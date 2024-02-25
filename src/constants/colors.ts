import { createTonalPalette } from "./createTonalPalette";

const palette = {
  primary: "#F25D29",
  secondary: "#8C2CCC",
  tertiary: "#1F8CAA",
  error: "#B3261E",
};

const primary = createTonalPalette(palette.primary);
const secondary = createTonalPalette(palette.secondary);
const tertiary = createTonalPalette(palette.tertiary);

export { palette, primary, secondary, tertiary };
