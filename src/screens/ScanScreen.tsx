import { useEffect, useRef, useState } from 'react';
import type { IScannerControls } from '@zxing/browser';

interface ScanScreenProps {
  onScan: (decodedText: string) => void;
}

export function ScanScreen({ onScan }: ScanScreenProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const controlsRef = useRef<IScannerControls | null>(null);
  const hasHandledScanRef = useRef(false);
  const onScanRef = useRef(onScan);
  const [status, setStatus] = useState('カメラを起動しています');
  const [error, setError] = useState('');

  useEffect(() => {
    onScanRef.current = onScan;
  }, [onScan]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isMounted = true;
    const stopCamera = () => {
      controlsRef.current?.stop();
      controlsRef.current = null;
    };

    const startScanner = async () => {
      try {
        setStatus('QRコードをカメラにかざしてください');
        const { BrowserQRCodeReader } = await import('@zxing/browser');
        if (!isMounted) return;
        const reader = new BrowserQRCodeReader();
        const controls = await reader.decodeFromVideoDevice(undefined, video, (result, _error, scannerControls) => {
          if (!result || hasHandledScanRef.current) return;

          hasHandledScanRef.current = true;
          setStatus('QRコードを読み取りました');
          scannerControls.stop();
          controlsRef.current = null;
          onScanRef.current(result.getText());
        });

        if (!isMounted) {
          controls.stop();
          return;
        }

        controlsRef.current = controls;
      } catch {
        if (!isMounted) return;
        setError('カメラを起動できませんでした。ブラウザの設定でカメラの使用を許可してください。');
        setStatus('カメラを使用できません');
      }
    };

    void startScanner();

    return () => {
      isMounted = false;
      stopCamera();
    };
  }, []);

  return (
    <div className="scan-page min-h-screen bg-background flex flex-col pb-28">
      <div className="scan-header flex items-center px-4 py-4 bg-background border-b border-gray-200 gap-4">
        <div className="flex items-center gap-2 flex-1 justify-center">
          <span className="scan-title font-jost font-bold text-base text-text-primary tracking-widest">
            SCAN
          </span>
        </div>
      </div>

      <div className="scan-content flex-1 px-5 pt-8 flex flex-col gap-5">
        <div>

          <p className="scan-description font-jp text-sm text-text-secondary mt-2">
            先生の承認QRを読み取ってください
          </p>
        </div>

        <div className="scan-camera-area bg-black rounded-3xl overflow-hidden card-shadow relative aspect-square">
          <video
            ref={videoRef}
            className="scan-camera-video w-full h-full object-cover"
            muted
            playsInline
          />
          <div className="scan-camera-frame pointer-events-none absolute inset-8 border-2 border-white/70 rounded-2xl" />
        </div>

        <p className="scan-status font-jp text-sm text-text-secondary text-center leading-relaxed">
          {status}
        </p>

        {error && (
          <p className="scan-error font-jp text-sm text-red-500 text-center leading-relaxed bg-white rounded-2xl px-4 py-4">
            {error}
          </p>
        )}

      </div>
    </div>
  );
}
