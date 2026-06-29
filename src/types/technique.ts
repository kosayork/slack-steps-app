export type Rank = 'Start' | 'Beginner' | 'Advanced';

export interface Technique {
  id: string;
  rank: Rank;
  grade: string;
  gradeNumber: string;
  name: string;
  description: string;
  point: string;
  tips: string[];
  youtubeId: string;
  thumbnail: string;
  qrCode: string;
  videoUrl: string;
  cleared: boolean;
}
