import { useEffect, useState } from 'react';
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
    title: 'QRを読み取って、検定クリア',
    image: 'guide03.webp',
    lead: 'SCANで読み取ってレベルアップ！！',
    body: '先生のQRコードをアプリ内のSCANから読み取れば、検定クリア！目指せスラックラインマスター！',
  },
  {
    stepSvg: 'step04.svg',
    title: 'ホーム画面に追加しよう！',
    image: 'guide04.webp',
    lead: 'いつでもすぐに、SLACK STEPS',
    body: 'ホーム画面に追加すれば、SLACK STEPSをアプリのように使えます。練習のときは、アイコンからすぐに開いて、技の確認やクリア記録をチェックしよう！',
  },
];

type AnimPhase = 'idle' | 'exit' | 'enter' | 'leaving';

interface TutorialScreenProps {
  onComplete: () => void;
}

export function TutorialScreen({ onComplete }: TutorialScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animPhase, setAnimPhase] = useState<AnimPhase>('idle');
  const [introVisible, setIntroVisible] = useState(false);
  const [isInstallGuideOpen, setIsInstallGuideOpen] = useState(false);

  const logoUrl = getImageUrl('logo.svg');
  const step = tutorialSteps[currentIndex];
  const stepSvgUrl = getImageUrl(step.stepSvg);
  const imgUrl = getImageUrl(step.image);
  const isLast = currentIndex === tutorialSteps.length - 1;
  const isInstallStep = currentIndex === 3;
  const isAnimating = animPhase !== 'idle';

  useEffect(() => {
    const timer = requestAnimationFrame(() => setIntroVisible(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  const screenClass = [
    'tutorial-screen',
    introVisible ? 'tutorial-screen-intro-visible' : 'tutorial-screen-intro-hidden',
    animPhase === 'leaving' ? 'tutorial-screen-leaving' : '',
  ].join(' ');

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
      setIsInstallGuideOpen(false);
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
      <div className="tutorial-logo flex justify-center pt-10 pb-10 px-6">
        {logoUrl ? (
          <img src={logoUrl} alt="SLACK STEPS" style={{ width: '113px' }} />
        ) : (
          <span className="font-jost font-bold text-xl text-text-primary tracking-widest">SLACK STEPS</span>
        )}
      </div>

      {/* Animated content */}
      <div className={`${contentClass} flex-1 flex flex-col px-6`}>
        {/* Step heading */}
        <div className="tutorial-step-heading flex items-center justify-center gap-3 mb-4">
          {stepSvgUrl ? (
            <img src={stepSvgUrl} alt={`STEP ${currentIndex + 1}`} className="tutorial-step-label h-10 flex-shrink-0" />
          ) : (
            <div className="flex flex-col items-center leading-none flex-shrink-0">
              <span className="tutorial-step-label font-jost font-bold text-[10px] text-text-primary tracking-widest uppercase">STEP</span>
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
              className="tutorial-image w-full object-cover"
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
        <p className="tutorial-body font-jp text-sm text-text-primary leading-relaxed">
          {step.body}
        </p>

        {isInstallStep && (
          <div className="tutorial-install-guide mt-5">
            <button
              type="button"
              className="tutorial-install-toggle w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 flex items-center justify-between gap-3 text-left"
              onClick={() => setIsInstallGuideOpen((open) => !open)}
              aria-expanded={isInstallGuideOpen}
            >
              <span className="font-jp font-bold text-sm text-text-primary">
                ホーム画面への追加方法を見る
              </span>
              <span className={`tutorial-install-toggle-icon font-jost font-bold text-xl text-text-primary ${isInstallGuideOpen ? 'rotate-45' : ''}`}>
                +
              </span>
            </button>

            <div className={`tutorial-install-panel ${isInstallGuideOpen ? 'tutorial-install-panel-open' : ''}`}>
              <div className="tutorial-install-card bg-white rounded-2xl px-4 py-4 mt-3">
                <div className="tutorial-install-section">
                  <p className="tutorial-install-heading font-jp font-bold text-sm text-text-primary mb-2">
                    iPhoneの場合
                  </p>
                  <ol className="tutorial-install-list font-jp text-xs text-text-primary leading-relaxed list-decimal pl-5 space-y-1">
                    <li>SafariでSLACK STEPSを開く</li>
                    <li>共有ボタンをタップ</li>
                    <li>「ホーム画面に追加」を選択</li>
                    <li>追加されたアイコンから起動</li>
                  </ol>
                </div>

                <div className="tutorial-install-section mt-4">
                  <p className="tutorial-install-heading font-jp font-bold text-sm text-text-primary mb-2">
                    Androidの場合
                  </p>
                  <ol className="tutorial-install-list font-jp text-xs text-text-primary leading-relaxed list-decimal pl-5 space-y-1">
                    <li>ChromeでSLACK STEPSを開く</li>
                    <li>メニューをタップ</li>
                    <li>「アプリをインストール」または「ホーム画面に追加」を選択</li>
                    <li>追加されたアイコンから起動</li>
                  </ol>
                </div>

                <p className="tutorial-install-note font-jp text-[11px] text-text-secondary leading-relaxed mt-4">
                  ※QRは端末のカメラアプリではなく、SLACK STEPS内のSCANから読み取ってください。
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Dots and button — outside animated area so they don't flicker */}
      <div className="flex flex-col px-6 pb-20 pt-4">
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
          className={`${isLast ? 'tutorial-home-button' : 'tutorial-next-button'} w-56 block mx-auto py-4 rounded-full bg-black text-white font-jost font-bold text-base tracking-widest disabled:opacity-70`}
        >
          {isLast ? 'スタート！' : 'つぎへ'}
        </button>
      </div>
    </div>
  );
}
