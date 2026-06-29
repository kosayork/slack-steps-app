import { skills, SkillId, SkillQrCode } from './skills';

export const QR_CLEAR_PARAM = 'qr';

export const QR_CLEAR_MAP = Object.fromEntries(
  skills.map((skill) => [skill.qrCode, skill.id])
) as Record<SkillQrCode, SkillId>;

export type QrClearCode = SkillQrCode;
export type QrClearSkillId = SkillId;

export function getSkillIdFromQrCode(code: string): QrClearSkillId | null {
  return skills.find((skill) => skill.qrCode === code)?.id ?? null;
}

export function getQrCodeFromSkillId(skillId: string): QrClearCode | null {
  return skills.find((skill) => skill.id === skillId)?.qrCode ?? null;
}

export function buildQrClearUrl(baseUrl: string, code: QrClearCode): string {
  const url = new URL(baseUrl);
  url.searchParams.set(QR_CLEAR_PARAM, code);
  return url.toString();
}
