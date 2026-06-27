import { useState } from 'react';
import { getImageUrl } from '../utils/images';

const STORAGE_KEY_TUTORIAL = 'slackStepsTutorialCompleted';

export function markTutorialCompleted() {
  localStorage.setItem(STORAGE_KEY_TUTORIAL, 'true');
}

export function isTutorialCompleted(): boolean {
  return localStorage.getItem(STORAGE_KEY_TUTORIAL) === 'true';
}

export function resetTutorial() {
  localStorage.removeItem(STORAGE_KEY_TUTORIAL);
}

const tutorialSteps = [
  {
    stepSvg: 'step01.svg',
    title: '目標を見つけよう！',
    image: 'guide01.webp',
    lead: '技をえらんで動画を見よう！',
    body: 'まずはやってみたい技をタップ！お手本動画や上達のコツをチェックして、スラックラインの上でいざチャレンジだ！',
  },
  {
    stepSvg: 'step02.svg',
    title: '先生に見てもらおう！',
    image: 'guide02.webp',
    lead: 'できたら先生にチェックしてもらおう！',
    body: '技ができるようになったら、先生に見てもらおう。合格すると、先生がキミのスマホに特別なQRコードを出してくれるよ！',
  },
  {
    stepSvg: 'step03.svg',
    title: 'スタンプをゲット！',
    image: 'guide03.webp',
    lead: 'カメラで読み取ってレベルアップ！！',
    body: '先生のQRコードを自分のスマホのカメラで読み取れば、検定クリア！どんどんスタンプを集めて、目指せスラックラインマスター！',
  },
];

type AnimPhase = 'idle' | 'exit' | 'enter' | 'leaving';

interface TutorialScreenProps {
  onComplete: () => void;
}

export function TutorialScreen({ onComplete }: TutorialScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animPhase, setAnimPhase] = useState<AnimPhase>('idle');

  const logoUrl = getImageUrl('logo.svg');
  const step = tutorialSteps[currentIndex];
  const stepSvgUrl = getImageUrl(step.stepSvg);
  const imgUrl = getImageUrl(step.image);
  const isLast = currentIndex === tutorialSteps.length - 1;
  const isAnimating = animPhase !== 'idle';

  const screenClass = animPhase === 'leaving' ? 'tutorial-screen tutorial-screen-leaving' : 'tutorial-screen';

  const handleNext = () => {
    if (isAnimating) return;
    if (isLast) {
      markTutorialCompleted();
      setAnimPhase('leaving');
      setTimeout(() => onComplete(), 400);
      return;
    }

    // Phase 1: exit current content
    setAnimPhase('exit');

    setTimeout(() => {
      // Phase 2: swap content and enter from right
      setCurrentIndex((i) => i + 1);
      setAnimPhase('enter');

      setTimeout(() => {
        // Phase 3: done
        setAnimPhase('idle');
      }, 260);
    }, 220);
  };

  const contentClass =
    animPhase === 'exit'
      ? 'tutorial-content tutorial-content-exit'
      : animPhase === 'enter'
      ? 'tutorial-content tutorial-content-enter'
      : 'tutorial-content';

  return (
    <div className={`${screenClass} flex flex-col min-h-screen bg-background`}>
      {/* Logo */}
      <div className="tutorial-logo flex justify-center pt-10 pb-4 px-6">
        {logoUrl ? (
          <img src={logoUrl} alt="SLACK STEPS" style={{ width: '113px' }} />
        ) : (
          <span className="font-jost font-bold text-xl text-text-primary tracking-widest">SLACK STEPS</span>
        )}
      </div>

      {/* Animated content */}
      <div className={`${contentClass} flex-1 flex flex-col px-6`}>
        {/* Step heading */}
        <div className="tutorial-step-heading flex items-center gap-3 mb-4">
          {stepSvgUrl ? (
            <img src={stepSvgUrl} alt={`STEP ${currentIndex + 1}`} className="tutorial-step-label h-10 flex-shrink-0" />
          ) : (
            <div className="flex flex-col items-center leading-none flex-shrink-0">
              <span className="tutorial-step-label font-jost font-bold text-[10px] text-text-secondary tracking-widest uppercase">STEP</span>
              <span className="tutorial-step-number font-jost font-bold text-3xl text-text-primary leading-none">{currentIndex + 1}</span>
            </div>
          )}
          <span className="tutorial-step-title font-jp font-bold text-xl text-text-primary">
            {step.title}
          </span>
        </div>

        {/* Image card */}
        <div className="tutorial-image-card bg-card rounded-3xl overflow-hidden flex items-center justify-center mb-5"
          style={{ minHeight: '200px' }}>
          {imgUrl ? (
            <img
              src={imgUrl}
              alt={step.title}
              className="tutorial-image w-full object-contain"
              style={{ maxHeight: '260px' }}
            />
          ) : (
            <div className="w-full flex items-center justify-center" style={{ height: '200px' }}>
              <span className="font-jp text-sm text-text-secondary">画像準備中</span>
            </div>
          )}
        </div>

        {/* Text */}
        <p className="tutorial-lead font-jp font-bold text-base text-text-primary mb-2">
          {step.lead}
        </p>
        <p className="tutorial-body font-jp text-sm text-text-secondary leading-relaxed">
          {step.body}
        </p>
      </div>

      {/* Dots and button — outside animated area so they don't flicker */}
      <div className="flex flex-col px-6 pb-8 pt-4">
        <div className="tutorial-dots flex justify-center gap-2 mb-6">
          {tutorialSteps.map((_, i) => (
            <span
              key={i}
              className={`tutorial-dot w-2 h-2 rounded-full ${i === currentIndex ? 'tutorial-dot-active bg-accent' : 'bg-gray-300'}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={isAnimating}
          className={`${isLast ? 'tutorial-home-button' : 'tutorial-next-button'} w-full py-4 rounded-full bg-black text-white font-jost font-bold text-base tracking-widest disabled:opacity-70`}
        >
          {isLast ? 'HOMEへ' : 'つぎへ'}
        </button>
      </div>
    </div>
  );
}
