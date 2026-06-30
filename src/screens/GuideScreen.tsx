import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { getImageUrl } from '../utils/images';

interface GuideScreenProps {
  onBack: () => void;
}

// ---- StaticPageHeader ----

interface StaticPageHeaderProps {
  title: string;
  onBack: () => void;
}

export function StaticPageHeader({ title, onBack }: StaticPageHeaderProps) {
  return (
    <div className="static-page-header flex items-center px-4 py-4 bg-background border-b border-gray-200 relative">
      <button
        onClick={onBack}
        className="static-page-back-button w-10 h-10 bg-card rounded-full flex items-center justify-center card-shadow flex-shrink-0"
      >
        <ChevronLeft size={20} className="text-text-primary" />
      </button>
      <span className="static-page-title absolute left-1/2 -translate-x-1/2 font-jost font-bold text-base text-text-primary tracking-widest">
        {title}
      </span>
    </div>
  );
}

// ---- Guide data ----

const guideSteps = [
  {
    step: '01',
    title: '目標を見つけよう！',
    image: 'guide01.webp',
    lead: '技をえらんで動画を見よう！',
    body: 'まずはやってみたい技をタップ！お手本動画や上達のコツをチェックして、スラックラインの上でいざチャレンジだ！',
  },
  {
    step: '02',
    title: '先生に見てもらおう！',
    image: 'guide02.webp',
    lead: 'できたら先生にチェックしてもらおう！',
    body: '技ができるようになったら、先生に見てもらおう。合格すると、先生がキミのスマホに特別なQRコードを出してくれるよ！',
  },
  {
    step: '03',
    title: 'QRを読み取って、検定クリア',
    image: 'guide03.webp',
    lead: 'SCANで読み取ってレベルアップ！！',
    body: '先生のQRコードをアプリ内のSCANから読み取れば、検定クリア！目指せスラックラインマスター！',
  },
  {
    step: '04',
    title: 'ホーム画面に追加しよう！',
    image: 'guide04.webp',
    lead: 'いつでもすぐに、SLACK STEPS',
    body: 'ホーム画面に追加すれば、SLACK STEPSをアプリのように使えます。練習のときは、アイコンからすぐに開いて、技の確認やクリア記録をチェックしよう！',
  },
];

// ---- GuidePage ----

export function GuideScreen({ onBack }: GuideScreenProps) {
  const [isInstallGuideOpen, setIsInstallGuideOpen] = useState(false);

  return (
    <div className="guide-page static-page flex flex-col min-h-screen bg-background">
      <StaticPageHeader title="GUIDE" onBack={onBack} />

      <div className="guide-content flex-1 overflow-y-auto pb-16">
        <div className="guide-steps px-6 pt-8">
          {guideSteps.map((step, index) => {
            const imgUrl = getImageUrl(step.image);
            const isLast = index === guideSteps.length - 1;
            const isInstallStep = step.step === '04';

            return (
              <div key={step.step} className="guide-step">
                {/* Step heading */}
                <div className="guide-step-heading flex items-center justify-center gap-3 mb-5">
                  <div className="flex flex-col items-center justify-center leading-none flex-shrink-0">
                    <span className="guide-step-label font-jost font-bold text-[10px] text-text-primary tracking-widest uppercase">
                      STEP
                    </span>
                    <span className="guide-step-number font-jost font-bold text-3xl text-text-primary leading-none">
                      {step.step}
                    </span>
                  </div>
                  <span className="guide-step-title font-jp font-bold text-xl text-text-primary">
                    {step.title}
                  </span>
                </div>

                {/* Step image */}
                <div className="guide-step-image-card bg-card rounded-3xl overflow-hidden flex items-center justify-center mb-5"
                  style={{ minHeight: '220px' }}>
                  {imgUrl ? (
                    <img
                      src={imgUrl}
                      alt={step.title}
                      className="guide-step-image w-full object-contain"
                      style={{ maxHeight: '280px' }}
                    />
                  ) : (
                    <div className="w-full flex items-center justify-center" style={{ height: '220px' }}>
                      <span className="font-jp text-sm text-text-secondary">画像準備中</span>
                    </div>
                  )}
                </div>

                {/* Step text */}
                <p className="guide-step-lead font-jp font-bold text-base text-text-primary mb-2">
                  {step.lead}
                </p>
                <p className="guide-step-body font-jp text-sm text-text-primary leading-relaxed">
                  {step.body}
                </p>

                {isInstallStep && (
                  <div className="guide-install-guide mt-5">
                    <button
                      type="button"
                      className="guide-install-toggle w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 flex items-center justify-between gap-3 text-left"
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
                      <div className="guide-install-card bg-white rounded-2xl px-4 py-4 mt-3">
                        <div className="guide-install-section">
                          <p className="guide-install-heading font-jp font-bold text-sm text-text-primary mb-2">
                            iPhoneの場合
                          </p>
                          <ol className="guide-install-list font-jp text-xs text-text-primary leading-relaxed list-decimal pl-5 space-y-1">
                            <li>SafariでSLACK STEPSを開く</li>
                            <li>共有ボタンをタップ</li>
                            <li>「ホーム画面に追加」を選択</li>
                            <li>追加されたアイコンから起動</li>
                          </ol>
                        </div>

                        <div className="guide-install-section mt-4">
                          <p className="guide-install-heading font-jp font-bold text-sm text-text-primary mb-2">
                            Androidの場合
                          </p>
                          <ol className="guide-install-list font-jp text-xs text-text-primary leading-relaxed list-decimal pl-5 space-y-1">
                            <li>ChromeでSLACK STEPSを開く</li>
                            <li>メニューをタップ</li>
                            <li>「アプリをインストール」または「ホーム画面に追加」を選択</li>
                            <li>追加されたアイコンから起動</li>
                          </ol>
                        </div>

                        <p className="guide-install-note font-jp text-[11px] text-text-secondary leading-relaxed mt-4">
                          ※QRは端末のカメラアプリではなく、SLACK STEPS内のSCANから読み取ってください。
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Divider between steps */}
                {!isLast && (
                  <div className="guide-step-divider flex justify-center my-8">
                    <div className="w-px h-12 bg-gray-500" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
