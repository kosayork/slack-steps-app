import { Technique, Rank } from '../types/technique';
import { Skill, skills, SkillRank } from './skills';

const RANK_TO_TECHNIQUE_RANK: Record<SkillRank, Rank> = {
  START: 'Start',
  BEGINNER: 'Beginner',
  ADVANCED: 'Advanced',
};

function getGradeNumber(grade: string): string {
  return grade.replace(/\D/g, '');
}

function toTechnique(skill: Skill): Technique {
  return {
    id: skill.id,
    rank: RANK_TO_TECHNIQUE_RANK[skill.rank],
    grade: skill.grade,
    gradeNumber: getGradeNumber(skill.grade),
    name: skill.name,
    description: skill.description,
    point: skill.point,
    tips: [...skill.tips],
    youtubeId: skill.youtubeId ?? '',
    thumbnail: skill.thumbnail,
    qrCode: skill.qrCode,
    videoUrl: skill.youtubeId ?? '',
    cleared: skill.id === 'start-4',
  };
}

export const allTechniques = skills.map(toTechnique);

export const startTechniques = allTechniques.filter((technique) => technique.rank === 'Start');
export const beginnerTechniques = allTechniques.filter((technique) => technique.rank === 'Beginner');
export const advancedTechniques = allTechniques.filter((technique) => technique.rank === 'Advanced');

export const getTechniquesByRank = (rank: Rank): Technique[] => {
  if (rank === 'Start') return startTechniques;
  if (rank === 'Beginner') return beginnerTechniques;
  return advancedTechniques;
};
