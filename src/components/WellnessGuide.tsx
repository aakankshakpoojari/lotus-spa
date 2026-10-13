import React, { useState } from 'react';
import { QUIZ_QUESTIONS, determineRecommendation } from '../data/wellnessGuide';
import type { QuizAnswers, QuizRecommendation, Treatment } from '../types';
import { ArrowRight, ArrowLeft, RotateCcw, Check, Clock, Calendar, HelpCircle } from 'lucide-react';
import { LotusMotif } from './LotusMotif';

interface WellnessGuideProps {
  onBookTreatment: (treatment: Treatment, isFirstVisit: boolean) => void;
}

export const WellnessGuide: React.FC<WellnessGuideProps> = ({ onBookTreatment }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Partial<QuizAnswers>>({});
  const [recommendation, setRecommendation] = useState<QuizRecommendation | null>(null);

  const currentQuestion = QUIZ_QUESTIONS[currentStepIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;

  const fieldKey: keyof QuizAnswers =
    currentStepIndex === 0
      ? 'need'
      : currentStepIndex === 1
      ? 'timeAvailable'
      : currentStepIndex === 2
      ? 'experienceType'
      : 'hasVisited';

  const currentSelection = selectedAnswers[fieldKey];

  const handleSelectOption = (optionId: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [fieldKey]: optionId
    }));
  };

  const handleNext = () => {
    if (!currentSelection) return;

    if (currentStepIndex < totalQuestions - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      const fullAnswers = selectedAnswers as QuizAnswers;
      const rec = determineRecommendation(fullAnswers);
      setRecommendation(rec);
    }
  };

  const handleBack = () => {
    if (recommendation) {
      setRecommendation(null);
      setCurrentStepIndex(totalQuestions - 1);
      return;
    }
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStepIndex(0);
    setSelectedAnswers({});
    setRecommendation(null);
  };

  const progressPercentage = recommendation
    ? 100
    : Math.round(((currentStepIndex + 1) / totalQuestions) * 100);

  return (
    <section id="wellness-guide" className="py-20 md:py-24 bg-pond-dark relative text-ivory border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-10">
          <div className="flex items-center gap-2.5">
            <LotusMotif size={20} className="text-blush" />
            <span className="text-xs uppercase tracking-[0.24em] text-blush font-light">
              Personal Wellness Guide
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal leading-tight">
            Find your natural ritual.
          </h2>

          <p className="text-ivory/70 text-sm sm:text-base font-light leading-relaxed">
            Answer four simple questions to discover which therapeutic experience aligns with your current bodily and mental rhythm.
          </p>
        </div>

        {/* Interactive Questionnaire Container */}
        <div className="bg-midnight/50 rounded-2xl p-6 sm:p-8 border border-white/10 relative">
          
          {/* Header Bar inside card */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest font-medium text-blush">
                {recommendation ? 'Your Recommendation' : `Step 0${currentStepIndex + 1} of 0${totalQuestions}`}
              </span>
              <span className="text-xs text-ivory/40 font-serif">·</span>
              <span className="text-xs text-ivory/60">
                {recommendation ? 'Complete' : `${progressPercentage}% aligned`}
              </span>
            </div>

            <button
              type="button"
              onClick={handleRestart}
              className="inline-flex items-center gap-1.5 text-xs text-ivory/60 hover:text-blush transition-colors p-1"
              title="Start over"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Restart</span>
            </button>
          </div>

          {/* Progress Bar Line */}
          <div className="w-full bg-pond h-1.5 rounded-full overflow-hidden mb-8 border border-white/5">
            <div
              className="bg-blush h-full transition-all duration-500 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          {/* Active Question View */}
          {!recommendation ? (
            <div className="space-y-8">
              
              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal">
                  {currentQuestion.title}
                </h3>
                <p className="text-ivory/70 text-sm font-light">
                  {currentQuestion.subtitle}
                </p>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentQuestion.options.map((option) => {
                  const isSelected = currentSelection === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelectOption(option.id)}
                      className={`text-left p-5 rounded-2xl border transition-all duration-300 relative group flex flex-col justify-between ${
                        isSelected
                          ? 'bg-pond border-blush ring-1 ring-blush shadow-pond-glow'
                          : 'bg-pond/60 border-white/10 hover:border-blush/40 hover:bg-pond/90'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          {option.tag && (
                            <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-blush font-medium">
                              {option.tag}
                            </span>
                          )}
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                              isSelected
                                ? 'border-blush bg-blush text-pond-dark'
                                : 'border-white/20 group-hover:border-blush/40'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                        </div>

                        <h4 className="font-serif text-lg text-ivory font-medium">
                          {option.label}
                        </h4>

                        <p className="text-xs text-ivory/70 leading-relaxed font-light">
                          {option.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Step Navigation Controls */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentStepIndex === 0}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium transition-colors ${
                    currentStepIndex === 0
                      ? 'text-ivory/30 cursor-not-allowed'
                      : 'text-ivory/70 hover:text-blush hover:bg-white/5'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!currentSelection}
                  className={`flex items-center gap-2 px-7 py-3 rounded-full text-xs uppercase tracking-[0.18em] font-medium transition-all shadow-sm ${
                    currentSelection
                      ? 'bg-blush text-pond-dark hover:bg-blush-light cursor-pointer shadow-pond-glow'
                      : 'bg-white/10 text-ivory/40 cursor-not-allowed'
                  }`}
                >
                  <span>{currentStepIndex === totalQuestions - 1 ? 'Reveal My Ritual' : 'Continue'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ) : (
            /* Final Recommendation View */
            <div className="space-y-8 animate-fadeIn">
              
              <div className="text-center space-y-2">
                <span className="text-[11px] uppercase tracking-[0.26em] text-blush font-medium">
                  Your Bespoke Sanctuary Recommendation
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-ivory font-normal">
                  {recommendation.primaryTreatment.name}
                </h3>
                <p className="text-xs font-serif italic text-gold tracking-widest">
                  {recommendation.primaryTreatment.sanskritName}
                </p>
              </div>

              {/* Featured Match Card */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-pond/80 p-6 sm:p-8 rounded-2xl border border-white/15">
                <div className="md:col-span-5 rounded-xl overflow-hidden shadow-md h-64 sm:h-72">
                  <img
                    src={recommendation.primaryTreatment.imageUrl}
                    alt={recommendation.primaryTreatment.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:col-span-7 space-y-5">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-blush text-pond-dark font-medium">
                      Primary Match
                    </span>
                    <h4 className="font-serif text-2xl text-ivory">
                      Why this ritual matches you
                    </h4>
                    <p className="text-sm text-ivory/80 leading-relaxed font-light">
                      {recommendation.matchReason}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs pt-3 border-t border-white/10">
                    <div className="flex items-center gap-1.5 text-blush font-medium">
                      <Clock className="w-4 h-4" />
                      <span>{recommendation.primaryTreatment.durationMinutes} Minutes</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-ivory/50 uppercase text-[10px]">Indicative:</span>
                      <span className="font-serif text-base font-semibold text-ivory">
                        ₹{recommendation.primaryTreatment.priceINR.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onBookTreatment(
                        recommendation.primaryTreatment,
                        selectedAnswers.hasVisited === 'first-time'
                      )}
                      className="flex items-center gap-2 px-6 py-3 rounded-full bg-blush text-pond-dark text-xs uppercase tracking-widest font-medium hover:bg-blush-light transition-colors shadow-pond-glow"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book This Ritual</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleRestart}
                      className="flex items-center gap-1.5 px-4 py-3 rounded-full border border-white/20 text-xs uppercase tracking-wider text-ivory hover:text-blush hover:bg-white/5 transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Retake Questions</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Harmonious Alternative Options */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <h4 className="text-xs uppercase tracking-[0.2em] text-ivory/80 font-semibold">
                  Harmonious Alternative Options
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {recommendation.alternativeTreatments.map((alt) => (
                    <div
                      key={alt.id}
                      className="p-4 rounded-xl bg-pond/50 border border-white/10 flex items-center justify-between gap-4 hover:border-blush/40 transition-colors"
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] text-blush uppercase tracking-wider font-medium">
                          {alt.category}
                        </span>
                        <h5 className="font-serif text-base text-ivory font-medium">
                          {alt.name}
                        </h5>
                        <p className="text-xs text-ivory/60">
                          {alt.durationMinutes} mins · ₹{alt.priceINR.toLocaleString('en-IN')}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => onBookTreatment(alt, selectedAnswers.hasVisited === 'first-time')}
                        className="px-3.5 py-2 rounded-full border border-white/20 text-[11px] uppercase tracking-wider text-ivory hover:bg-blush hover:text-pond-dark hover:border-blush transition-colors shrink-0"
                      >
                        Select
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation disclaimer note */}
              <div className="p-4 rounded-xl bg-pond/40 border border-white/10 flex items-start gap-2.5 text-xs text-ivory/60">
                <HelpCircle className="w-4 h-4 text-botanical-light shrink-0 mt-0.5" />
                <p>
                  This recommendation is an introductory preference discovery tool and not a medical or dosha diagnosis. 
                  Your therapist will conduct a gentle one-on-one consultation before your treatment to customize all botanical oils.
                </p>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
