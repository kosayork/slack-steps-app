export type Rank = 'Start' | 'Beginner' | 'Advanced';

export interface Technique {
  id: string;
  rank: Rank;
  grade: string;
  gradeNumber: string;
  name: string;
  description: string;
  point: string;
  thumbnail: string;
  qr: string;
  videoUrl: string;
  cleared: boolean;
}
