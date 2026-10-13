import React, { useState } from 'react';
import { QUIZ_QUESTIONS, determineRecommendation } from '../data/wellnessGuide';
import type { QuizAnswers, QuizRecommendation, Treatment } from '../types';
import { Sparkles, ArrowRight, ArrowLeft, RotateCcw, Check, Clock, Calendar, HelpCircle } from 'lucide-react';

interface WellnessGuideProps {
  onBookTreatment: (treatment: Treatment, isFirstVisit: boolean) => void;
}

export const WellnessGuide: React.FC<WellnessGuideProps> = ({ onBookTreatment }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Partial<QuizAnswers>>({});
  const [recommendation, setRecommendation] = useState<QuizRecommendation | null>(null);

  const currentQuestion = QUIZ_QUESTIONS[currentStepIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;

  // Determine current field based on step index
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
      // Final step completed: generate deterministic recommendation
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
    <section id="wellness-guide" className="py-24 sm:py-32 bg-cream/30 relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory border border-antique">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[11px] font-medium tracking-[0.24em] uppercase text-forest">
              Personalized Consultation
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl text-charcoal font-normal">
            Tell us what you need. <br />
            <span className="italic text-forest font-light">We'll help you find your ritual.</span>
          </h2>

          <p className="text-charcoal-muted text-sm sm:text-base font-light leading-relaxed">
            A few thoughtful questions can help you explore the experience that best fits your preferences.
          </p>
        </div>

        {/* Main Interactive Questionnaire Card Container */}
        <div className="bg-ivory rounded-3xl p-6 sm:p-10 shadow-elevated border border-antique relative">
          
          {/* Header Bar inside card: Progress & Restart */}
          <div className="flex items-center justify-between pb-6 border-b border-forest/10 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest font-medium text-forest">
                {recommendation ? 'Your Recommendation' : `Step 0${currentStepIndex + 1} of 0${totalQuestions}`}
              </span>
              <span className="text-xs text-charcoal-muted font-serif">·</span>
              <span className="text-xs text-charcoal-muted">
                {recommendation ? 'Completed' : `${progressPercentage}% aligned`}
              </span>
            </div>

            <button
              type="button"
              onClick={handleRestart}
              className="inline-flex items-center gap-1.5 text-xs text-charcoal-muted hover:text-forest transition-colors p-1"
              title="Start over"
            >
              <RotateCcw className="w-3.5 h-3.5 text-sage" />
              <span className="hidden sm:inline">Restart</span>
            </button>
          </div>

          {/* Progress Bar Line */}
          <div className="w-full bg-cream h-1.5 rounded-full overflow-hidden mb-8">
            <div
              className="bg-forest h-full transition-all duration-500 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          {/* Content: Either Active Question OR Final Recommendation */}
          {!recommendation ? (
            <div className="space-y-8">
              
              {/* Question Title & Subtitle */}
              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal">
                  {currentQuestion.title}
                </h3>
                <p className="text-charcoal-muted text-sm font-light">
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
                          ? 'bg-cream border-forest ring-1 ring-forest shadow-sm'
                          : 'bg-ivory border-forest/15 hover:border-gold/60 hover:bg-cream/40'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          {option.tag && (
                            <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-forest/5 text-forest font-medium">
                              {option.tag}
                            </span>
                          )}
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                              isSelected
                                ? 'border-forest bg-forest text-ivory'
                                : 'border-forest/20 group-hover:border-forest/40'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                        </div>

                        <h4 className="font-serif text-lg text-charcoal font-medium">
                          {option.label}
                        </h4>

                        <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                          {option.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Step Navigation Controls */}
              <div className="pt-6 border-t border-forest/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentStepIndex === 0}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium transition-colors ${
                    currentStepIndex === 0
                      ? 'text-charcoal-muted/40 cursor-not-allowed'
                      : 'text-charcoal-muted hover:text-forest hover:bg-cream'
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
                      ? 'bg-forest text-ivory hover:bg-terracotta cursor-pointer'
                      : 'bg-charcoal/15 text-charcoal/40 cursor-not-allowed'
                  }`}
                >
                  <span>{currentStepIndex === totalQuestions - 1 ? 'Reveal My Ritual' : 'Continue'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ) : (
            /* Final Deterministic Recommendation View */
            <div className="space-y-8 animate-fadeIn">
              
              <div className="text-center space-y-2">
                <span className="text-[11px] uppercase tracking-[0.25em] text-terracotta font-medium">
                  Your Bespoke Sanctuary Recommendation
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-forest font-normal">
                  {recommendation.primaryTreatment.name}
                </h3>
                <p className="text-xs font-serif italic text-gold-dark tracking-widest">
                  {recommendation.primaryTreatment.sanskritName}
                </p>
              </div>

              {/* Featured Match Card */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-cream/40 p-6 sm:p-8 rounded-2xl border border-antique">
                <div className="md:col-span-5 rounded-xl overflow-hidden shadow-md h-64 sm:h-72">
                  <img
                    src={recommendation.primaryTreatment.imageUrl}
                    alt={recommendation.primaryTreatment.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:col-span-7 space-y-5">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-forest text-ivory font-medium">
                      Primary Match
                    </span>
                    <h4 className="font-serif text-2xl text-charcoal">
                      Why this ritual matches you
                    </h4>
                    <p className="text-sm text-charcoal-muted leading-relaxed font-light">
                      {recommendation.matchReason}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs pt-2 border-t border-forest/10">
                    <div className="flex items-center gap-1.5 text-forest font-medium">
                      <Clock className="w-4 h-4 text-sage" />
                      <span>{recommendation.primaryTreatment.durationMinutes} Minutes</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-charcoal-muted uppercase text-[10px]">Indicative:</span>
                      <span className="font-serif text-base font-semibold text-charcoal">
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
                      className="flex items-center gap-2 px-6 py-3 rounded-full bg-forest text-ivory text-xs uppercase tracking-widest font-medium hover:bg-terracotta transition-colors shadow-md"
                    >
                      <Calendar className="w-4 h-4 text-gold-light" />
                      <span>Book This Ritual</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleRestart}
                      className="flex items-center gap-1.5 px-4 py-3 rounded-full border border-forest/20 text-xs uppercase tracking-wider text-charcoal-muted hover:text-forest hover:bg-ivory transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Retake Questions</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Alternative Recommendations */}
              <div className="space-y-4 pt-4 border-t border-forest/10">
                <h4 className="text-xs uppercase tracking-[0.2em] text-forest font-semibold">
                  Harmonious Alternative Options
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {recommendation.alternativeTreatments.map((alt) => (
                    <div
                      key={alt.id}
                      className="p-4 rounded-xl bg-ivory border border-forest/15 flex items-center justify-between gap-4 hover:border-gold/50 transition-colors"
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] text-sage-dark uppercase tracking-wider font-medium">
                          {alt.category}
                        </span>
                        <h5 className="font-serif text-base text-charcoal font-medium">
                          {alt.name}
                        </h5>
                        <p className="text-xs text-charcoal-muted">
                          {alt.durationMinutes} mins · ₹{alt.priceINR.toLocaleString('en-IN')}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => onBookTreatment(alt, selectedAnswers.hasVisited === 'first-time')}
                        className="px-3.5 py-2 rounded-full border border-forest/20 text-[11px] uppercase tracking-wider text-forest hover:bg-forest hover:text-ivory transition-colors shrink-0"
                      >
                        Select
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation disclaimer note */}
              <div className="p-4 rounded-xl bg-cream/50 border border-forest/10 flex items-start gap-2.5 text-xs text-charcoal-muted">
                <HelpCircle className="w-4 h-4 text-sage-dark shrink-0 mt-0.5" />
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
