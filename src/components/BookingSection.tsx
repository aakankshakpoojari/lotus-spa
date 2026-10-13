import React, { useState } from 'react';
import { TREATMENTS } from '../data/treatments';
import type { Treatment, BookingFormData } from '../types';
import { Clock, CheckCircle2, MessageSquare, ArrowLeft, ArrowRight, Info, Edit3 } from 'lucide-react';
import { LotusMotif } from './LotusMotif';
import confetti from 'canvas-confetti';

interface BookingSectionProps {
  initialTreatment?: Treatment | null;
  initialIsFirstVisit?: boolean;
}

const CONFIGURABLE_WHATSAPP_NUMBER = ''; // e.g. '919876543210'
const CONFIGURABLE_PHONE_DISPLAY = '+91 (Sanctuary Concierge Desk)';

const TODAY_DATE = new Date().toISOString().split('T')[0];

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialTreatment,
  initialIsFirstVisit = false,
}) => {
  const timeSlots = [
    '09:00 AM - 10:30 AM (Morning Stillness)',
    '11:00 AM - 12:30 PM (Midday Solar)',
    '02:30 PM - 04:00 PM (Afternoon Rest)',
    '04:30 PM - 06:00 PM (Twilight Soothe)',
    '06:30 PM - 08:00 PM (Night Lotus Wind-Down)',
  ];

  const [formData, setFormData] = useState<BookingFormData>({
    treatmentId: initialTreatment?.id || TREATMENTS[0].id,
    treatmentName: initialTreatment?.name || TREATMENTS[0].name,
    date: '',
    timeSlot: timeSlots[0],
    duration: initialTreatment?.durationMinutes || TREATMENTS[0].durationMinutes,
    fullName: '',
    email: '',
    phone: '',
    specialRequests: '',
    isFirstVisit: initialIsFirstVisit,
  });

  const [step, setStep] = useState<'form' | 'review' | 'confirmed'>('form');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const currentTreatment = TREATMENTS.find(t => t.id === formData.treatmentId) || TREATMENTS[0];

  const handleTreatmentChange = (tId: string) => {
    const found = TREATMENTS.find(t => t.id === tId);
    if (found) {
      setFormData(prev => ({
        ...prev,
        treatmentId: found.id,
        treatmentName: found.name,
        duration: found.durationMinutes,
      }));
    }
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your full name.';
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      errs.phone = 'Please provide a valid contact phone number.';
    }
    if (!formData.date) {
      errs.date = 'Please select a preferred date for your visit.';
    }
    if (!formData.timeSlot) {
      errs.timeSlot = 'Please select a preferred time slot.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleProceedToReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStep('review');
    }
  };

  const handleConfirmSubmission = () => {
    setStep('confirmed');
    try {
      confetti({
        particleCount: 50,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#E7A0B4', '#D9A64E', '#536B55', '#F5EFE6']
      });
    } catch {
      // Ignored if confetti unavailable
    }
  };

  const handleReset = () => {
    setFormData({
      treatmentId: TREATMENTS[0].id,
      treatmentName: TREATMENTS[0].name,
      date: '',
      timeSlot: timeSlots[0],
      duration: TREATMENTS[0].durationMinutes,
      fullName: '',
      email: '',
      phone: '',
      specialRequests: '',
      isFirstVisit: false,
    });
    setStep('form');
    setErrors({});
  };

  const getWhatsAppMessage = () => {
    const msg = `Namaste Lotus Ayurvedic Spa,\n\nI would like to request an appointment:\n• Ritual: ${formData.treatmentName} (${formData.duration} mins)\n• Guest: ${formData.fullName}\n• Phone: ${formData.phone}\n• Preferred Date: ${formData.date}\n• Preferred Slot: ${formData.timeSlot}\n• First-time Guest: ${formData.isFirstVisit ? 'Yes' : 'No'}${formData.specialRequests ? `\n• Notes: ${formData.specialRequests}` : ''}\n\nPlease let me know your availability.`;
    return encodeURIComponent(msg);
  };

  return (
    <section id="booking" className="py-20 md:py-24 bg-pond relative text-ivory border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-10">
          <div className="flex items-center gap-2.5">
            <LotusMotif size={20} className="text-blush" />
            <span className="text-xs uppercase tracking-[0.24em] text-blush font-light">
              Sanctuary Reservations
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal leading-tight">
            Request an appointment.
          </h2>

          <p className="text-ivory/70 text-sm sm:text-base font-light leading-relaxed">
            Select your preferred treatment, date, and quiet hour. Our concierge will prepare your private chamber.
          </p>
        </div>

        {/* Step Indicator Header */}
        <div className="flex items-center justify-start gap-4 mb-8">
          <div className={`flex items-center gap-2 text-xs font-medium uppercase tracking-wider ${step === 'form' ? 'text-blush' : 'text-ivory/50'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 'form' ? 'bg-blush text-pond-dark' : 'bg-midnight text-ivory/70 border border-white/10'}`}>1</span>
            <span>Details</span>
          </div>
          <span className="w-6 h-[1px] bg-white/15" />
          <div className={`flex items-center gap-2 text-xs font-medium uppercase tracking-wider ${step === 'review' ? 'text-blush' : 'text-ivory/50'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 'review' ? 'bg-blush text-pond-dark' : 'bg-midnight text-ivory/70 border border-white/10'}`}>2</span>
            <span>Review</span>
          </div>
          <span className="w-6 h-[1px] bg-white/15" />
          <div className={`flex items-center gap-2 text-xs font-medium uppercase tracking-wider ${step === 'confirmed' ? 'text-blush' : 'text-ivory/50'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 'confirmed' ? 'bg-blush text-pond-dark' : 'bg-midnight text-ivory/70 border border-white/10'}`}>3</span>
            <span>Confirmation</span>
          </div>
        </div>

        {/* Main Booking Container Card */}
        <div className="bg-midnight/50 rounded-2xl p-6 sm:p-8 border border-white/10 relative">
          
          {/* STEP 1: Form Input */}
          {step === 'form' && (
            <form onSubmit={handleProceedToReview} className="space-y-8" noValidate>
              
              {/* Selected Treatment Preview Box */}
              <div className="p-5 rounded-2xl bg-pond border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shadow-sm shrink-0 border border-white/10">
                    <img
                      src={currentTreatment.imageUrl}
                      alt={currentTreatment.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-blush font-medium block">
                      Selected Ritual
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl text-ivory font-medium">
                      {currentTreatment.name}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-ivory/60 mt-0.5">
                      <span>{currentTreatment.durationMinutes} mins</span>
                      <span>·</span>
                      <span className="text-gold font-medium">₹{currentTreatment.priceINR.toLocaleString('en-IN')} (indicative)</span>
                    </div>
                  </div>
                </div>

                <div className="w-full sm:w-64">
                  <label htmlFor="treatment-select" className="text-[11px] uppercase tracking-wider text-ivory/60 block mb-1">
                    Change Ritual:
                  </label>
                  <select
                    id="treatment-select"
                    value={formData.treatmentId}
                    onChange={(e) => handleTreatmentChange(e.target.value)}
                    className="w-full text-xs py-2.5 px-3 rounded-xl bg-midnight border border-white/20 text-ivory focus:border-blush focus:outline-none"
                  >
                    {TREATMENTS.map((t) => (
                      <option key={t.id} value={t.id} className="bg-midnight text-ivory">
                        {t.name} ({t.durationMinutes}m - ₹{t.priceINR})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-[0.2em] text-blush font-semibold">
                  1. Guest Information
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-medium text-ivory/90 mb-1">
                      Full Name <span className="text-blush">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Radhika Sharma"
                      className={`w-full text-sm p-3 rounded-xl bg-pond border ${
                        errors.fullName ? 'border-blush' : 'border-white/15'
                      } text-ivory placeholder:text-ivory/30 focus:border-blush focus:outline-none`}
                    />
                    {errors.fullName && <p className="text-xs text-blush mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-ivory/90 mb-1">
                      Contact Phone / WhatsApp <span className="text-blush">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98200 12345"
                      className={`w-full text-sm p-3 rounded-xl bg-pond border ${
                        errors.phone ? 'border-blush' : 'border-white/15'
                      } text-ivory placeholder:text-ivory/30 focus:border-blush focus:outline-none`}
                    />
                    {errors.phone && <p className="text-xs text-blush mt-1">{errors.phone}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-xs font-medium text-ivory/90 mb-1">
                      Email Address <span className="text-ivory/50 text-[11px]">(Optional for calendar confirmation)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. radhika@example.com"
                      className="w-full text-sm p-3 rounded-xl bg-pond border border-white/15 text-ivory placeholder:text-ivory/30 focus:border-blush focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <h4 className="text-xs uppercase tracking-[0.2em] text-blush font-semibold flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-gold" />
                  <span>2. Schedule Your Visit</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-xs font-medium text-ivory/90 mb-1">
                      Preferred Date <span className="text-blush">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      min={TODAY_DATE}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className={`w-full text-sm p-3 rounded-xl bg-pond border ${
                        errors.date ? 'border-blush' : 'border-white/15'
                      } text-ivory focus:border-blush focus:outline-none`}
                    />
                    {errors.date && <p className="text-xs text-blush mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label htmlFor="timeSlot" className="block text-xs font-medium text-ivory/90 mb-1">
                      Preferred Time Slot <span className="text-blush">*</span>
                    </label>
                    <select
                      id="timeSlot"
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full text-sm p-3 rounded-xl bg-pond border border-white/15 text-ivory focus:border-blush focus:outline-none"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot} className="bg-midnight text-ivory">
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <h4 className="text-xs uppercase tracking-[0.2em] text-blush font-semibold">
                  3. Sanctuary Preferences & History
                </h4>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-pond border border-white/10">
                  <input
                    type="checkbox"
                    id="isFirstVisit"
                    checked={formData.isFirstVisit}
                    onChange={(e) => setFormData({ ...formData, isFirstVisit: e.target.checked })}
                    className="w-4 h-4 rounded text-blush focus:ring-blush border-white/20"
                  />
                  <label htmlFor="isFirstVisit" className="text-xs text-ivory/80">
                    This is my first time visiting Lotus Ayurvedic Spa (we reserve 15 mins for lotus tea & pulse orientation)
                  </label>
                </div>

                <div>
                  <label htmlFor="specialRequests" className="block text-xs font-medium text-ivory/90 mb-1">
                    Specific focus areas, allergies, or pressure preferences (Optional)
                  </label>
                  <textarea
                    id="specialRequests"
                    rows={2}
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    placeholder="e.g. Please focus on upper shoulder stiffness; prefer gentle pressure."
                    className="w-full text-sm p-3 rounded-xl bg-pond border border-white/15 text-ivory placeholder:text-ivory/30 focus:border-blush focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-ivory/60 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-blush" />
                  <span>No payment required now. This requests an appointment slot.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-blush text-pond-dark text-xs uppercase tracking-[0.2em] font-medium hover:bg-blush-light transition-all shadow-pond-glow"
                >
                  <span>Review Visit Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}

          {/* STEP 2: Review Before Submission */}
          {step === 'review' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-widest text-blush font-medium">
                  Step 2 of 3: Summary
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal">
                  Review Your Sanctuary Request
                </h3>
                <p className="text-xs text-ivory/60">
                  Please confirm the details below before submitting your request.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-pond border border-white/10 space-y-5">
                <div className="flex items-start justify-between pb-4 border-b border-white/10">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-blush font-medium">
                      Selected Ritual
                    </span>
                    <h4 className="font-serif text-xl text-ivory font-medium">
                      {formData.treatmentName}
                    </h4>
                    <p className="text-xs text-ivory/60 mt-0.5">
                      {formData.duration} minutes · Indicative Sample Rate: ₹{currentTreatment.priceINR.toLocaleString('en-IN')}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep('form')}
                    className="flex items-center gap-1 text-xs text-blush hover:underline transition-colors"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Edit</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-ivory/50 uppercase text-[10px] block">Guest Name</span>
                    <span className="font-medium text-ivory text-sm">{formData.fullName}</span>
                  </div>
                  <div>
                    <span className="text-ivory/50 uppercase text-[10px] block">Contact Number</span>
                    <span className="font-medium text-ivory text-sm">{formData.phone}</span>
                  </div>
                  <div>
                    <span className="text-ivory/50 uppercase text-[10px] block">Preferred Date</span>
                    <span className="font-medium text-ivory text-sm">{formData.date}</span>
                  </div>
                  <div>
                    <span className="text-ivory/50 uppercase text-[10px] block">Preferred Slot</span>
                    <span className="font-medium text-ivory text-sm">{formData.timeSlot}</span>
                  </div>
                  {formData.email && (
                    <div>
                      <span className="text-ivory/50 uppercase text-[10px] block">Email</span>
                      <span className="text-ivory">{formData.email}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-ivory/50 uppercase text-[10px] block">Guest History</span>
                    <span className="text-ivory">
                      {formData.isFirstVisit ? 'First-time sanctuary visitor' : 'Returning guest'}
                    </span>
                  </div>
                </div>

                {formData.specialRequests && (
                  <div className="pt-3 border-t border-white/10 text-xs">
                    <span className="text-ivory/50 uppercase text-[10px] block">Special Notes / Preferences</span>
                    <p className="text-ivory italic mt-0.5">"{formData.specialRequests}"</p>
                  </div>
                )}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep('form')}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider text-ivory/70 hover:text-blush"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Edit</span>
                </button>

                <button
                  type="button"
                  onClick={handleConfirmSubmission}
                  className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-blush text-pond-dark text-xs uppercase tracking-[0.18em] font-medium hover:bg-blush-light transition-all shadow-pond-glow"
                >
                  <span>Submit Booking Request</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Request Submitted Confirmation Screen */}
          {step === 'confirmed' && (
            <div className="space-y-8 text-center animate-fadeIn py-4">
              
              <div className="w-16 h-16 rounded-full bg-blush/20 text-blush mx-auto flex items-center justify-center border border-blush/40 shadow-pond-glow">
                <CheckCircle2 className="w-8 h-8 text-blush" />
              </div>

              <div className="space-y-2 max-w-lg mx-auto">
                <span className="text-xs uppercase tracking-[0.24em] text-blush font-medium">
                  Request Received
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-ivory font-normal">
                  Thank you, {formData.fullName}.
                </h3>
                <p className="text-sm text-ivory/75 leading-relaxed font-light">
                  Your appointment request has been recorded. 
                  Please note that this is an <strong>appointment request</strong> and not an instant confirmed booking.
                </p>
              </div>

              {/* Receipt Summary */}
              <div className="p-6 rounded-2xl bg-pond border border-white/10 max-w-lg mx-auto text-left space-y-3 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-ivory/60">Ritual:</span>
                  <span className="font-serif text-base text-blush font-medium">{formData.treatmentName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-ivory/60">Preferred Date:</span>
                  <span className="font-medium text-ivory">{formData.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-ivory/60">Requested Time:</span>
                  <span className="font-medium text-ivory">{formData.timeSlot}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-ivory/60">Guest Contact:</span>
                  <span className="font-medium text-ivory">{formData.phone}</span>
                </div>
              </div>

              {/* WhatsApp Concierge Dispatch Option */}
              <div className="p-6 rounded-2xl bg-midnight border border-blush/30 max-w-lg mx-auto space-y-4">
                <div className="flex items-center justify-center gap-2 text-blush">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-wider font-semibold">
                    Instant WhatsApp Dispatch
                  </span>
                </div>
                
                <p className="text-xs text-ivory/80 leading-relaxed font-light">
                  Send your prefilled request details directly to our sanctuary concierge via WhatsApp for swift confirmation.
                </p>

                {CONFIGURABLE_WHATSAPP_NUMBER ? (
                  <a
                    href={`https://wa.me/${CONFIGURABLE_WHATSAPP_NUMBER}?text=${getWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blush text-pond-dark text-xs uppercase tracking-wider font-semibold hover:bg-blush-light transition-colors shadow-pond-glow"
                  >
                    <span>Send Request on WhatsApp</span>
                  </a>
                ) : (
                  <div className="p-3.5 rounded-xl bg-pond border border-white/10 text-center space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-blush font-medium block">
                      Concierge WhatsApp Channel
                    </span>
                    <p className="text-[11px] text-ivory/80">
                      Sanctuary Desk: {CONFIGURABLE_PHONE_DISPLAY}
                    </p>
                    <span className="text-[10px] text-ivory/40 italic block">
                      (Live WhatsApp number is configurable in sanctuary settings)
                    </span>
                  </div>
                )}
              </div>

              {/* Return Controls */}
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full border border-white/20 text-xs uppercase tracking-wider text-ivory hover:text-blush transition-colors"
                >
                  Submit Another Request
                </button>

                <a
                  href="#hero"
                  className="px-6 py-2.5 rounded-full bg-blush text-pond-dark text-xs uppercase tracking-wider font-medium hover:bg-blush-light transition-colors shadow-pond-glow"
                >
                  Return to Home
                </a>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
