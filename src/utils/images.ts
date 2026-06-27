const webpModules = import.meta.glob('../assets/images/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const svgModules = import.meta.glob('../assets/images/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

export function getImageUrl(filename: string): string {
  if (!filename) return '';
  const key = `../assets/images/${filename}`;
  return webpModules[key] ?? svgModules[key] ?? '';
}
