import { useState } from 'react';
import { Technique } from '../types/technique';
import { getImageUrl } from '../utils/images';
import { Play } from 'lucide-react';

interface TechniqueDetailModalProps {
  technique: Technique;
  onClose: () => void;
}

const rankBadgeConfig: Record<string, { label: string; className: string }> = {
  Start:    { label: 'Start',    className: 'modal-rank-badge-start bg-gray-100 text-gray-600' },
  Beginner: { label: 'BEGINNER', className: 'modal-rank-badge-beginner bg-green-100 text-green-700' },
  Advanced: { label: 'ADVANCED', className: 'modal-rank-badge-advanced bg-purple-100 text-purple-700' },
};

export function TechniqueDetailModal({ technique, onClose }: TechniqueDetailModalProps) {
  const [imgError, setImgError] = useState(false);
  const imageUrl = getImageUrl(technique.thumbnail);
  const showImage = imageUrl && !imgError;
  const badge = rankBadgeConfig[technique.rank] ?? rankBadgeConfig.Start;

  return (
    <div
      className="modal-overlay fixed inset-0 z-[60] flex items-end justify-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
      onClick={onClose}
    >
      <div
        className="skill-detail-modal w-full max-w-md bg-card rounded-t-3xl animate-slide-up"
        style={{ maxHeight: '85dvh', display: 'flex', flexDirection: 'column' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Scrollable inner */}
        <div className="skill-detail-modal-scroll overflow-y-auto flex-1">

          {/* Rank badge — centered */}
          <div className="flex justify-center pt-5 pb-3 px-5">
            <span className={`modal-rank-badge inline-block font-jost font-bold text-sm px-5 py-1.5 rounded-full ${badge.className}`}>
              {badge.label}
            </span>
          </div>

          {/* Title row: thumb + grade + name */}
          <div className="modal-title-row flex items-center gap-3 px-5 pb-4">
            <div className="modal-skill-thumb w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
              {showImage ? (
                <img
                  src={imageUrl}
                  alt={technique.name}
                  className="modal-skill-thumb-image w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gray-200 rounded-full" />
              )}
            </div>
            <div className="modal-grade flex items-baseline gap-1">
              <span className="modal-grade-number grade-number text-5xl text-text-primary leading-none">
                {technique.gradeNumber}
              </span>
              <span className="modal-grade-label font-jp text-base text-text-primary">級</span>
            </div>
            <span className="modal-skill-name font-jp font-bold text-xl text-text-primary leading-tight">
              {technique.name}
            </span>
          </div>

          {/* Media — full width, no side padding */}
          <div className="modal-media w-full aspect-video bg-gray-100 relative overflow-hidden">
            {technique.videoUrl ? (
              <div className="modal-video-placeholder w-full h-full flex items-center justify-center bg-gray-200">
                <button className="modal-play-button w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-md">
                  <Play size={28} className="text-text-primary ml-1" fill="currentColor" />
                </button>
              </div>
            ) : showImage ? (
              <img
                src={imageUrl}
                alt={technique.name}
                className="modal-media-image w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="modal-video-placeholder w-full h-full bg-accent-light flex items-center justify-center">
                <span className="grade-number text-7xl text-white/60">{technique.gradeNumber}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="modal-description font-jp text-base text-text-primary px-5 pt-5 pb-1 leading-relaxed">
            {technique.description}
          </p>

          {/* Point */}
          <div className="modal-point px-5 pt-4 pb-2">
            <p className="modal-point-label font-jost font-bold text-sm tracking-widest text-text-secondary mb-2">
              POINT
            </p>
            <p className="modal-point-text font-jp text-base text-text-primary leading-relaxed">
              {technique.point}
            </p>
          </div>

          {/* Close button */}
          <div className="modal-actions flex justify-center px-5 pt-6 pb-10">
            <button
              onClick={onClose}
              className="modal-close-button px-16 py-3.5 rounded-full border-2 border-black font-jost font-bold text-text-primary tracking-widest text-sm bg-card"
            >
              CLOSE
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
