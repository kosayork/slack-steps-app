export type SkillRank = 'START' | 'BEGINNER' | 'ADVANCED';

export type Skill = {
  id: string;
  rank: SkillRank;
  grade: string;
  name: string;
  description: string;
  point: string;
  tips: string[];
  youtubeId?: string;
  thumbnail: string;
  qrCode: string;
};

export const skills = [
  {
    id: 'start-4',
    rank: 'START',
    grade: '4級',
    name: '片足20秒',
    description: '片足で20秒間バランスを保つ',
    point: '目線をまっすぐ前に向け、両手を広げてリラックスしましょう',
    tips: ['ラインの少し先を見る', '腕を大きく使ってバランスを取る', '膝を軽く曲げて体を固めすぎない'],
    youtubeId: 'nox7HdPG7YI',
    thumbnail: 'start-thumb-04.webp',
    qrCode: 'Q8mK4zV2nP7x',
  },
  {
    id: 'start-3',
    rank: 'START',
    grade: '3級',
    name: '逆足20秒',
    description: '利き足ではない方の足で20秒間バランスを保つ',
    point: '苦手な足でも焦らず、体の中心を意識しましょう',
    tips: ['最初は短い秒数から始める', '目線を落としすぎない', '呼吸を止めずにリラックスする'],
    youtubeId: 'nox7HdPG7YI',
    thumbnail: 'start-thumb-03.webp',
    qrCode: 'W3rT9bL6sH2a',
  },
  {
    id: 'start-2',
    rank: 'START',
    grade: '2級',
    name: 'ウォーク',
    description: 'スラックラインの上を歩く',
    point: '足元を見すぎず、進行方向を見るようにしましょう',
    tips: ['一歩ずつ止まってバランスを取る', '足裏の中心でラインを踏む', '急がずゆっくり進む'],
    youtubeId: 'nox7HdPG7YI',
    thumbnail: 'start-thumb-02.webp',
    qrCode: 'N6pX2cQ8vM5d',
  },
  {
    id: 'start-1',
    rank: 'START',
    grade: '1級',
    name: '両足20秒',
    description: '両足で20秒間バランスを保つ',
    point: '膝を軽く曲げて、体の軸を安定させましょう',
    tips: ['両足に均等に体重を乗せる', '肩の力を抜く', '腕を広げて小さく調整する'],
    youtubeId: 'nox7HdPG7YI',
    thumbnail: 'start-thumb-01.webp',
    qrCode: 'A9sD4fG7hJ1k',
  },
  {
    id: 'beginner-10',
    rank: 'BEGINNER',
    grade: '10級',
    name: '片足10秒',
    description: 'ビギナーランクの技10の説明文',
    point: 'ビギナー技10のポイントとコツです',
    tips: ['ラインの揺れを待つ', '軸足に体重を乗せる', '腕で左右の揺れを調整する'],
    youtubeId: 'nox7HdPG7YI',
    thumbnail: 'beginner-thumb-10.webp',
    qrCode: 'B7xQ3mN9vL2p',
  },
  {
    id: 'beginner-9',
    rank: 'BEGINNER',
    grade: '9級',
    name: '逆足10秒',
    description: 'ビギナーランクの技9の説明文',
    point: 'ビギナー技9のポイントとコツです',
    tips: ['得意な足と同じ目線を意識する', '足首を固めすぎない', '短い成功を積み重ねる'],
    youtubeId: 'nox7HdPG7YI',
    thumbnail: 'beginner-thumb-09.webp',
    qrCode: 'C4tY8rK1wZ6n',
  },
  {
    id: 'beginner-8',
    rank: 'BEGINNER',
    grade: '8級',
    name: 'ウォーク',
    description: 'ビギナーランクの技8の説明文',
    point: 'ビギナー技8のポイントとコツです',
    tips: ['進行方向を見る', '足をラインにまっすぐ乗せる', '一歩ごとに姿勢を戻す'],
    youtubeId: 'nox7HdPG7YI',
    thumbnail: 'beginner-thumb-08.webp',
    qrCode: 'D9vP2sM5qX8a',
  },
  {
    id: 'beginner-7',
    rank: 'BEGINNER',
    grade: '7級',
    name: '両足20秒',
    description: 'ビギナーランクの技7の説明文',
    point: 'ビギナー技7のポイントとコツです',
    tips: ['膝を軽く曲げる', '上半身を起こす', '呼吸を整える'],
    youtubeId: 'nox7HdPG7YI',
    thumbnail: 'beginner-thumb-07.webp',
    qrCode: 'E2nL7bR4cT9y',
  },
  {
    id: 'beginner-6',
    rank: 'BEGINNER',
    grade: '6級',
    name: 'バックウォーク',
    description: 'ビギナーランクの技6の説明文',
    point: 'ビギナー技6のポイントとコツです',
    tips: ['後ろ足の位置を丁寧に探る', '体を反らしすぎない', '小さな歩幅で進む'],
    youtubeId: 'nox7HdPG7YI',
    thumbnail: 'beginner-thumb-06.webp',
    qrCode: 'F6qW1zH8pK3m',
  },
  {
    id: 'beginner-5',
    rank: 'BEGINNER',
    grade: '5級',
    name: 'ウォーク ターン ウォーク',
    description: 'ビギナーランクの技5の説明文',
    point: 'ビギナー技5のポイントとコツです',
    tips: ['ターン前に一度止まる', '目線を先に回す', '腕で回転を止める'],
    youtubeId: 'nox7HdPG7YI',
    thumbnail: 'beginner-thumb-05.webp',
    qrCode: 'G3aV9xC2nS7r',
  },
  {
    id: 'beginner-4',
    rank: 'BEGINNER',
    grade: '4級',
    name: 'ドロップニー',
    description: 'ビギナーランクの技4の説明文',
    point: 'ビギナー技4のポイントとコツです',
    tips: ['腰を落とす前に姿勢を安定させる', '膝をラインに近づけすぎない', '戻る動作まで丁寧に行う'],
    youtubeId: 'nox7HdPG7YI',
    thumbnail: 'beginner-thumb-04.webp',
    qrCode: 'H8mD4qT6wL1p',
  },
  {
    id: 'beginner-3',
    rank: 'BEGINNER',
    grade: '3級',
    name: 'フットプラント',
    description: 'ビギナーランクの技3の説明文',
    point: 'ビギナー技3のポイントとコツです',
    tips: ['置く足の位置を決める', '上体を急に倒さない', '戻る時もラインを見る'],
    youtubeId: 'nox7HdPG7YI',
    thumbnail: 'beginner-thumb-03.webp',
    qrCode: 'J5rN2vX9cB6s',
  },
  {
    id: 'beginner-2',
    rank: 'BEGINNER',
    grade: '2級',
    name: 'クルック',
    description: 'ビギナーランクの技2の説明文',
    point: 'ビギナー技2のポイントとコツです',
    tips: ['軸を保って腰を落とす', '腕でバランスを取り続ける', '焦らず静止を作る'],
    youtubeId: 'nox7HdPG7YI',
    thumbnail: 'beginner-thumb-02.webp',
    qrCode: 'K1yP7mQ4zD8t',
  },
  {
    id: 'beginner-1',
    rank: 'BEGINNER',
    grade: '1級',
    name: 'ダブルドロップニー',
    description: 'ビギナーランクの技1の説明文',
    point: 'ビギナー技1のポイントとコツです',
    tips: ['左右の膝の位置を意識する', '低くなるほどゆっくり動く', '戻りの姿勢までコントロールする'],
    youtubeId: 'nox7HdPG7YI',
    thumbnail: 'beginner-thumb-01.webp',
    qrCode: 'L9cS3wV6nH2x',
  },
  ...Array.from({ length: 10 }, (_, i) => {
    const gradeNumber = String(10 - i);
    return {
      id: `advanced-${i + 1}`,
      rank: 'ADVANCED' as const,
      grade: `${gradeNumber}級`,
      name: `アドバンス技 ${gradeNumber}`,
      description: `アドバンスランクの技${gradeNumber}の説明文`,
      point: `アドバンス技${gradeNumber}のポイントとコツです`,
      tips: ['動作に入る前に姿勢を整える', 'ラインの揺れを使いすぎない', '成功後の戻りまで意識する'],
      youtubeId: 'nox7HdPG7YI',
      thumbnail: `advanced-thumb-${gradeNumber.padStart(2, '0')}.webp`,
      qrCode: [
        'M4pX8dR1qT7v',
        'P7nC2sL9wQ4a',
        'R2vK6mD8xN3y',
        'S8qH1pV5cL9z',
        'T3wN7xB2mQ6r',
        'V6aD9sK4pX1n',
        'X1mR5qT8vC3w',
        'Y9pL2nH6dS4x',
        'Z4cV8wQ1rM7t',
        'U2xS6bP9nK5q',
      ][i],
    };
  }),
] as const satisfies readonly Skill[];

export type SkillId = (typeof skills)[number]['id'];
export type SkillQrCode = (typeof skills)[number]['qrCode'];

export function getYouTubeEmbedUrl(youtubeId?: string): string {
  if (!youtubeId) return '';
  const params = new URLSearchParams({
    controls: '1',
    fs: '0',
    iv_load_policy: '3',
    rel: '0',
    loop: '1',
    playlist: youtubeId,
    playsinline: '1',
  });
  return `https://www.youtube.com/embed/${youtubeId}?${params.toString()}`;
}
