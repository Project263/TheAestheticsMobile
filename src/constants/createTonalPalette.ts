export function createTonalPalette(baseColor: string): {
  [key: number]: string;
} {
  const colors: { [key: number]: string } = {};
  for (let tone = 0; tone <= 100; tone++) {
    colors[tone] = calculateColor(baseColor, tone);
  }
  return colors;
}

function calculateColor(baseColor: string, tone: number): string {
  const baseRGB = hexToRgb(baseColor);
  const deltaR = Math.round((255 - baseRGB.r) * (tone / 100));
  const deltaG = Math.round((255 - baseRGB.g) * (tone / 100));
  const deltaB = Math.round((255 - baseRGB.b) * (tone / 100));
  const newR = baseRGB.r + deltaR;
  const newG = baseRGB.g + deltaG;
  const newB = baseRGB.b + deltaB;
  return rgbToHex(newR, newG, newB);
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  hex = hex.replace(/^#/, "");
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

function rgbToHex(r: number, g: number, b: number): string {
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function toHex(value: number): string {
  const hex = value.toString(16).toUpperCase();
  return hex.length === 1 ? `0${hex}` : hex;
}
