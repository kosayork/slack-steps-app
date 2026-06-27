import { StaticPageHeader } from './GuideScreen';

interface PrivacyScreenProps {
  onBack: () => void;
}

const privacySections: { title: string | null; body: string[] }[] = [
  {
    title: null,
    body: [
      "スラックライン検定アプリ「slack-steps」（以下「本アプリ」といいます）では、利用者の皆様に安心してアプリをご利用いただくため、以下の通りプライバシーポリシーを定めています。",
    ],
  },
  {
    title: "1. 個人情報の収集と利用目的",
    body: [
      "本アプリでは、ユーザーアイコン用の画像、ニックネーム、および検定の合格記録（スタンプ状況）を入力・保持しますが、これらのデータはすべてアプリの機能（プロフィールの表示・検定記録の管理）にのみ使用されます。",
    ],
  },
  {
    title: "2. データの保存場所（ローカル完結について）",
    body: [
      "本アプリで入力または撮影された画像、名前、検定記録などのすべてのデータは、利用者のスマートフォン内部（ローカルストレージ）にのみ安全に保存されます。外部のサーバーへ送信・蓄積されることは一切ありません。",
    ],
  },
  {
    title: "3. 第三者への提供・開示",
    body: [
      "本アプリは通信を介して個人情報を外部に送信しないため、収集したデータを第三者に提供または開示することはございません。",
    ],
  },
  {
    title: "4. 端末の機能利用について",
    body: [
      "カメラ・写真ライブラリへのアクセス：プロフィール画像の変更機能、および先生のQRコードを読み取る検定機能のためにのみ使用します。",
    ],
  },
];

export function PrivacyScreen({ onBack }: PrivacyScreenProps) {
  return (
    <div className="static-page privacy-page flex flex-col min-h-screen bg-background">
      <StaticPageHeader title="プライバシーポリシー" onBack={onBack} />

      <div className="privacy-content flex-1 overflow-y-auto px-6 py-8 pb-16">
        {privacySections.map((section, i) => (
          <div key={i} className="privacy-section mb-8">
            {section.title && (
              <p className="privacy-section-title font-jp font-bold text-base text-text-primary mb-3">
                {section.title}
              </p>
            )}
            {section.body.map((para, j) => (
              <p
                key={j}
                className={`privacy-section-body font-jp text-sm text-text-secondary leading-relaxed${j > 0 ? ' mt-3' : ''}`}
              >
                {para}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
