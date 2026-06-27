import { Technique } from '../types/technique';

export const startTechniques: Technique[] = [
  { id: 'start-4', rank: 'Start', grade: '4級', gradeNumber: '4', name: '片足20秒', description: '片足で20秒間バランスを保つ', point: '目線をまっすぐ前に向け、両手を広げてリラックスしましょう', thumbnail: 'start-thumb-04.webp', qr: 'start-qr-04.svg', videoUrl: '', cleared: true },
  { id: 'start-3', rank: 'Start', grade: '3級', gradeNumber: '3', name: '逆足20秒', description: '利き足ではない方の足で20秒間バランスを保つ', point: '苦手な足でも焦らず、体の中心を意識しましょう', thumbnail: 'start-thumb-03.webp', qr: 'start-qr-03.svg', videoUrl: '', cleared: false },
  { id: 'start-2', rank: 'Start', grade: '2級', gradeNumber: '2', name: 'ウォーク', description: 'スラックラインの上を歩く', point: '足元を見すぎず、進行方向を見るようにしましょう', thumbnail: 'start-thumb-02.webp', qr: 'start-qr-02.svg', videoUrl: '', cleared: false },
  { id: 'start-1', rank: 'Start', grade: '1級', gradeNumber: '1', name: '両足20秒', description: '両足で20秒間バランスを保つ', point: '膝を軽く曲げて、体の軸を安定させましょう', thumbnail: 'start-thumb-01.webp', qr: 'start-qr-01.svg', videoUrl: '', cleared: false },
];

export const beginnerTechniques: Technique[] = [
  { id: 'beginner-10', rank: 'Beginner', grade: '10級', gradeNumber: '10', name: '片足10秒',          description: 'ビギナーランクの技10の説明文', point: 'ビギナー技10のポイントとコツです', thumbnail: 'beginner-thumb-10.webp', qr: 'beginner-qr-10.svg', videoUrl: '', cleared: false },
  { id: 'beginner-9',  rank: 'Beginner', grade: '9級',  gradeNumber: '9',  name: '逆足10秒',          description: 'ビギナーランクの技9の説明文',  point: 'ビギナー技9のポイントとコツです',  thumbnail: 'beginner-thumb-09.webp', qr: 'beginner-qr-09.svg', videoUrl: '', cleared: false },
  { id: 'beginner-8',  rank: 'Beginner', grade: '8級',  gradeNumber: '8',  name: 'ウォーク',           description: 'ビギナーランクの技8の説明文',  point: 'ビギナー技8のポイントとコツです',  thumbnail: 'beginner-thumb-08.webp', qr: 'beginner-qr-08.svg', videoUrl: '', cleared: false },
  { id: 'beginner-7',  rank: 'Beginner', grade: '7級',  gradeNumber: '7',  name: '両足20秒',          description: 'ビギナーランクの技7の説明文',  point: 'ビギナー技7のポイントとコツです',  thumbnail: 'beginner-thumb-07.webp', qr: 'beginner-qr-07.svg', videoUrl: '', cleared: false },
  { id: 'beginner-6',  rank: 'Beginner', grade: '6級',  gradeNumber: '6',  name: 'バックウォーク',     description: 'ビギナーランクの技6の説明文',  point: 'ビギナー技6のポイントとコツです',  thumbnail: 'beginner-thumb-06.webp', qr: 'beginner-qr-06.svg', videoUrl: '', cleared: false },
  { id: 'beginner-5',  rank: 'Beginner', grade: '5級',  gradeNumber: '5',  name: 'ウォーク ターン ウォーク', description: 'ビギナーランクの技5の説明文', point: 'ビギナー技5のポイントとコツです', thumbnail: 'beginner-thumb-05.webp', qr: 'beginner-qr-05.svg', videoUrl: '', cleared: false },
  { id: 'beginner-4',  rank: 'Beginner', grade: '4級',  gradeNumber: '4',  name: 'ドロップニー',       description: 'ビギナーランクの技4の説明文',  point: 'ビギナー技4のポイントとコツです',  thumbnail: 'beginner-thumb-04.webp', qr: 'beginner-qr-04.svg', videoUrl: '', cleared: false },
  { id: 'beginner-3',  rank: 'Beginner', grade: '3級',  gradeNumber: '3',  name: 'フットプラント',     description: 'ビギナーランクの技3の説明文',  point: 'ビギナー技3のポイントとコツです',  thumbnail: 'beginner-thumb-03.webp', qr: 'beginner-qr-03.svg', videoUrl: '', cleared: false },
  { id: 'beginner-2',  rank: 'Beginner', grade: '2級',  gradeNumber: '2',  name: 'クルック',           description: 'ビギナーランクの技2の説明文',  point: 'ビギナー技2のポイントとコツです',  thumbnail: 'beginner-thumb-02.webp', qr: 'beginner-qr-02.svg', videoUrl: '', cleared: false },
  { id: 'beginner-1',  rank: 'Beginner', grade: '1級',  gradeNumber: '1',  name: 'ダブルドロップニー', description: 'ビギナーランクの技1の説明文',  point: 'ビギナー技1のポイントとコツです',  thumbnail: 'beginner-thumb-01.webp', qr: 'beginner-qr-01.svg', videoUrl: '', cleared: false },
];

export const advancedTechniques: Technique[] = Array.from({ length: 10 }, (_, i) => ({
  id: `advanced-${i + 1}`,
  rank: 'Advanced' as const,
  grade: `${10 - i}級`,
  gradeNumber: `${10 - i}`,
  name: `アドバンス技 ${10 - i}`,
  description: `アドバンスランクの技${10 - i}の説明文`,
  point: `アドバンス技${10 - i}のポイントとコツです`,
  thumbnail: `advanced-thumb-${String(10 - i).padStart(2, '0')}.webp`,
  qr: `advanced-qr-${String(10 - i).padStart(2, '0')}.svg`,
  videoUrl: '',
  cleared: false,
}));

export const allTechniques = [...startTechniques, ...beginnerTechniques, ...advancedTechniques];

export const getTechniquesByRank = (rank: 'Start' | 'Beginner' | 'Advanced'): Technique[] => {
  if (rank === 'Start') return startTechniques;
  if (rank === 'Beginner') return beginnerTechniques;
  return advancedTechniques;
};
