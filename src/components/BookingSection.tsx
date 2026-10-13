import React, { useState } from 'react';
import { TREATMENTS } from '../data/treatments';
import type { Treatment, BookingFormData } from '../types';
import { Calendar, Clock, CheckCircle2, MessageSquare, ArrowLeft, ArrowRight, Sparkles, Info, Edit3 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingSectionProps {
  initialTreatment?: Treatment | null;
  initialIsFirstVisit?: boolean;
}

// Configurable sanctuary contact number (empty string triggers configurable placeholder state as per spec)
const CONFIGURABLE_WHATSAPP_NUMBER = ''; // e.g. '919876543210' when business configures it
const CONFIGURABLE_PHONE_DISPLAY = '+91 (Sample Sanctuary Concierge)';

// Default today's date formatted for HTML date input
const TODAY_DATE = new Date().toISOString().split('T')[0];

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialTreatment,
  initialIsFirstVisit = false,
}) => {
  // Available sanctuary time slots
  const timeSlots = [
    '09:00 AM - 10:30 AM (Morning Calm)',
    '11:00 AM - 12:30 PM (Midday Solar)',
    '02:30 PM - 04:00 PM (Afternoon Rest)',
    '04:30 PM - 06:00 PM (Twilight Soothe)',
    '06:30 PM - 08:00 PM (Evening Wind-Down)',
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

  // Track if we are in 'edit', 'review', or 'submitted' step
  const [step, setStep] = useState<'form' | 'review' | 'confirmed'>('form');
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Selected treatment object
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
    // Subtle celebratory confetti
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#87927A', '#C4A36A', '#34483A', '#EAE2D3']
      });
    } catch {
      // Ignore if confetti not supported
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

  // Prefilled WhatsApp message text generator
  const getWhatsAppMessage = () => {
    const msg = `Namaste Lotus Ayurvedic Spa,\n\nI would like to request an appointment:\n• Ritual: ${formData.treatmentName} (${formData.duration} mins)\n• Guest: ${formData.fullName}\n• Phone: ${formData.phone}\n• Preferred Date: ${formData.date}\n• Preferred Slot: ${formData.timeSlot}\n• First-time Guest: ${formData.isFirstVisit ? 'Yes' : 'No'}${formData.specialRequests ? `\n• Notes: ${formData.specialRequests}` : ''}\n\nPlease let me know your availability.`;
    return encodeURIComponent(msg);
  };



  return (
    <section id="booking" className="py-24 sm:py-32 bg-ivory relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-forest/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream border border-antique">
            <Calendar className="w-3.5 h-3.5 text-gold" />
            <span className="text-[11px] font-medium tracking-[0.24em] uppercase text-forest">
              Sanctuary Reservations
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl text-charcoal font-normal">
            Request an Appointment
          </h2>

          <p className="text-charcoal-muted text-sm sm:text-base font-light leading-relaxed">
            Choose your desired ritual, date, and quiet hour. Our sanctuary concierge will confirm your suite.
          </p>
        </div>

        {/* Step Indicator Header */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className={`flex items-center gap-2 text-xs font-medium uppercase tracking-wider ${step === 'form' ? 'text-forest' : 'text-charcoal-muted'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === 'form' ? 'bg-forest text-ivory' : 'bg-cream text-charcoal'}`}>1</span>
            <span>Details</span>
          </div>
          <span className="w-8 h-[1px] bg-forest/20" />
          <div className={`flex items-center gap-2 text-xs font-medium uppercase tracking-wider ${step === 'review' ? 'text-forest' : 'text-charcoal-muted'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === 'review' ? 'bg-forest text-ivory' : 'bg-cream text-charcoal'}`}>2</span>
            <span>Review</span>
          </div>
          <span className="w-8 h-[1px] bg-forest/20" />
          <div className={`flex items-center gap-2 text-xs font-medium uppercase tracking-wider ${step === 'confirmed' ? 'text-forest' : 'text-charcoal-muted'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === 'confirmed' ? 'bg-forest text-ivory' : 'bg-cream text-charcoal'}`}>3</span>
            <span>Confirmation</span>
          </div>
        </div>

        {/* Main Booking Container Card */}
        <div className="bg-cream/40 rounded-3xl p-6 sm:p-10 shadow-elevated border border-antique relative">
          
          {/* STEP 1: Form Input */}
          {step === 'form' && (
            <form onSubmit={handleProceedToReview} className="space-y-8" noValidate>
              
              {/* Selected Treatment Preview Box */}
              <div className="p-5 rounded-2xl bg-ivory border border-forest/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shadow-sm shrink-0">
                    <img
                      src={currentTreatment.imageUrl}
                      alt={currentTreatment.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-sage-dark font-medium block">
                      Selected Ritual
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl text-charcoal font-medium">
                      {currentTreatment.name}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-charcoal-muted mt-0.5">
                      <span>{currentTreatment.durationMinutes} mins</span>
                      <span>·</span>
                      <span className="font-semibold text-forest">₹{currentTreatment.priceINR.toLocaleString('en-IN')} (indicative)</span>
                    </div>
                  </div>
                </div>

                <div className="w-full sm:w-64">
                  <label htmlFor="treatment-select" className="text-[11px] uppercase tracking-wider text-charcoal-muted block mb-1">
                    Change Ritual:
                  </label>
                  <select
                    id="treatment-select"
                    value={formData.treatmentId}
                    onChange={(e) => handleTreatmentChange(e.target.value)}
                    className="w-full text-xs py-2.5 px-3 rounded-xl bg-ivory border border-forest/20 text-charcoal focus:border-forest focus:ring-1 focus:ring-forest focus:outline-none"
                  >
                    {TREATMENTS.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.name} ({t.durationMinutes}m - ₹{t.priceINR})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-[0.2em] text-forest font-semibold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                  <span>1. Guest Information</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-medium text-charcoal mb-1">
                      Full Name <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Radhika Sharma"
                      className={`w-full text-sm p-3 rounded-xl bg-ivory border ${
                        errors.fullName ? 'border-terracotta' : 'border-forest/20'
                      } text-charcoal placeholder:text-charcoal-muted/50 focus:border-forest focus:outline-none`}
                    />
                    {errors.fullName && <p className="text-xs text-terracotta mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-charcoal mb-1">
                      Contact Phone / WhatsApp <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98200 12345"
                      className={`w-full text-sm p-3 rounded-xl bg-ivory border ${
                        errors.phone ? 'border-terracotta' : 'border-forest/20'
                      } text-charcoal placeholder:text-charcoal-muted/50 focus:border-forest focus:outline-none`}
                    />
                    {errors.phone && <p className="text-xs text-terracotta mt-1">{errors.phone}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-xs font-medium text-charcoal mb-1">
                      Email Address <span className="text-charcoal-muted text-[11px]">(Optional for calendar confirmation)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. radhika@example.com"
                      className="w-full text-sm p-3 rounded-xl bg-ivory border border-forest/20 text-charcoal placeholder:text-charcoal-muted/50 focus:border-forest focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Date & Time Slot Schedule */}
              <div className="space-y-4 pt-4 border-t border-forest/10">
                <h4 className="text-xs uppercase tracking-[0.2em] text-forest font-semibold flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-gold" />
                  <span>2. Schedule Your Visit</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-xs font-medium text-charcoal mb-1">
                      Preferred Date <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      min={TODAY_DATE}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className={`w-full text-sm p-3 rounded-xl bg-ivory border ${
                        errors.date ? 'border-terracotta' : 'border-forest/20'
                      } text-charcoal focus:border-forest focus:outline-none`}
                    />
                    {errors.date && <p className="text-xs text-terracotta mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label htmlFor="timeSlot" className="block text-xs font-medium text-charcoal mb-1">
                      Preferred Time Slot <span className="text-terracotta">*</span>
                    </label>
                    <select
                      id="timeSlot"
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full text-sm p-3 rounded-xl bg-ivory border border-forest/20 text-charcoal focus:border-forest focus:outline-none"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Special Notes & Guest Experience */}
              <div className="space-y-4 pt-4 border-t border-forest/10">
                <h4 className="text-xs uppercase tracking-[0.2em] text-forest font-semibold">
                  3. Sanctuary Preferences & History
                </h4>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-ivory border border-forest/15">
                  <input
                    type="checkbox"
                    id="isFirstVisit"
                    checked={formData.isFirstVisit}
                    onChange={(e) => setFormData({ ...formData, isFirstVisit: e.target.checked })}
                    className="w-4 h-4 rounded text-forest focus:ring-forest border-forest/30"
                  />
                  <label htmlFor="isFirstVisit" className="text-xs text-charcoal">
                    This is my first time visiting Lotus Ayurvedic Spa (we will reserve 10 mins for introductory herbal tea & pulse orientation)
                  </label>
                </div>

                <div>
                  <label htmlFor="specialRequests" className="block text-xs font-medium text-charcoal mb-1">
                    Specific focus areas, allergies, or pressure preferences (Optional)
                  </label>
                  <textarea
                    id="specialRequests"
                    rows={2}
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    placeholder="e.g. Please focus on upper shoulder stiffness; prefer mild fragrance oils."
                    className="w-full text-sm p-3 rounded-xl bg-ivory border border-forest/20 text-charcoal placeholder:text-charcoal-muted/50 focus:border-forest focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-6 border-t border-forest/10 flex items-center justify-between">
                <div className="text-xs text-charcoal-muted flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-sage-dark" />
                  <span>No payment required now. This requests an appointment slot.</span>
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-forest text-ivory text-xs uppercase tracking-[0.18em] font-medium hover:bg-terracotta transition-all shadow-md"
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
                <span className="text-[11px] uppercase tracking-widest text-terracotta font-medium">
                  Step 2 of 3: Summary
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal">
                  Review Your Sanctuary Request
                </h3>
                <p className="text-xs text-charcoal-muted">
                  Please confirm the details below before submitting your request.
                </p>
              </div>

              {/* Summary Card */}
              <div className="p-6 rounded-2xl bg-ivory border border-antique space-y-5">
                <div className="flex items-start justify-between pb-4 border-b border-forest/10">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-sage-dark font-medium">
                      Selected Ritual
                    </span>
                    <h4 className="font-serif text-xl text-forest font-medium">
                      {formData.treatmentName}
                    </h4>
                    <p className="text-xs text-charcoal-muted mt-0.5">
                      {formData.duration} minutes · Indicative Sample Rate: ₹{currentTreatment.priceINR.toLocaleString('en-IN')}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep('form')}
                    className="flex items-center gap-1 text-xs text-forest hover:text-terracotta transition-colors"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Edit</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-charcoal-muted uppercase text-[10px] block">Guest Name</span>
                    <span className="font-medium text-charcoal text-sm">{formData.fullName}</span>
                  </div>
                  <div>
                    <span className="text-charcoal-muted uppercase text-[10px] block">Contact Number</span>
                    <span className="font-medium text-charcoal text-sm">{formData.phone}</span>
                  </div>
                  <div>
                    <span className="text-charcoal-muted uppercase text-[10px] block">Preferred Date</span>
                    <span className="font-medium text-charcoal text-sm">{formData.date}</span>
                  </div>
                  <div>
                    <span className="text-charcoal-muted uppercase text-[10px] block">Preferred Slot</span>
                    <span className="font-medium text-charcoal text-sm">{formData.timeSlot}</span>
                  </div>
                  {formData.email && (
                    <div>
                      <span className="text-charcoal-muted uppercase text-[10px] block">Email</span>
                      <span className="text-charcoal">{formData.email}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-charcoal-muted uppercase text-[10px] block">Guest Type</span>
                    <span className="text-charcoal">
                      {formData.isFirstVisit ? 'First-time sanctuary visitor' : 'Returning guest'}
                    </span>
                  </div>
                </div>

                {formData.specialRequests && (
                  <div className="pt-3 border-t border-forest/10 text-xs">
                    <span className="text-charcoal-muted uppercase text-[10px] block">Special Notes / Preferences</span>
                    <p className="text-charcoal italic mt-0.5">"{formData.specialRequests}"</p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep('form')}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider text-charcoal-muted hover:text-forest"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Edit</span>
                </button>

                <button
                  type="button"
                  onClick={handleConfirmSubmission}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-forest text-ivory text-xs uppercase tracking-[0.18em] font-medium hover:bg-terracotta transition-all shadow-md"
                >
                  <span>Submit Booking Request</span>
                  <CheckCircle2 className="w-4 h-4 text-gold-light" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Request Submitted Confirmation Screen */}
          {step === 'confirmed' && (
            <div className="space-y-8 text-center animate-fadeIn py-4">
              
              <div className="w-16 h-16 rounded-full bg-sage/20 text-forest mx-auto flex items-center justify-center border border-sage/40">
                <CheckCircle2 className="w-8 h-8 text-forest" />
              </div>

              <div className="space-y-2 max-w-lg mx-auto">
                <span className="text-xs uppercase tracking-[0.24em] text-terracotta font-medium">
                  Request Received
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-forest font-normal">
                  Thank you, {formData.fullName}.
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed font-light">
                  Your appointment request has been prepared in our sanctuary calendar. 
                  Please note that this is an <strong>appointment request</strong> and not an instant confirmed booking.
                </p>
              </div>

              {/* Request Summary Receipt */}
              <div className="p-6 rounded-2xl bg-ivory border border-antique max-w-lg mx-auto text-left space-y-3 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-forest/10">
                  <span className="text-charcoal-muted">Ritual:</span>
                  <span className="font-serif text-base text-forest font-semibold">{formData.treatmentName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-charcoal-muted">Preferred Date:</span>
                  <span className="font-medium text-charcoal">{formData.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-charcoal-muted">Requested Time:</span>
                  <span className="font-medium text-charcoal">{formData.timeSlot}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-charcoal-muted">Guest Contact:</span>
                  <span className="font-medium text-charcoal">{formData.phone}</span>
                </div>
              </div>

              {/* WhatsApp Concierge Dispatch Option */}
              <div className="p-6 rounded-2xl bg-forest text-ivory max-w-lg mx-auto space-y-4">
                <div className="flex items-center justify-center gap-2 text-gold-light">
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
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-charcoal text-xs uppercase tracking-wider font-semibold hover:bg-gold-light transition-colors shadow-sm"
                  >
                    <span>Send Request on WhatsApp</span>
                  </a>
                ) : (
                  /* Spec compliant: clear placeholder configuration state when no live phone configured */
                  <div className="p-3.5 rounded-xl bg-forest-light/60 border border-gold/30 text-center space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-gold-light font-medium block">
                      Concierge WhatsApp Channel
                    </span>
                    <p className="text-[11px] text-ivory/70">
                      Sanctuary Desk: {CONFIGURABLE_PHONE_DISPLAY}
                    </p>
                    <span className="text-[10px] text-ivory/50 italic block">
                      (Live WhatsApp number is configurable in sanctuary settings)
                    </span>
                  </div>
                )}
              </div>

              {/* Reset / Modify Buttons */}
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full border border-forest/20 text-xs uppercase tracking-wider text-forest hover:bg-cream transition-colors"
                >
                  Submit Another Request
                </button>

                <a
                  href="#hero"
                  className="px-6 py-2.5 rounded-full bg-forest text-ivory text-xs uppercase tracking-wider hover:bg-terracotta transition-colors"
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
