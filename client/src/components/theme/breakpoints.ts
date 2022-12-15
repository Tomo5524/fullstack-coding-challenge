const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  // desktop
  xl: customMediaQuery(1441),
  // laptop
  lg: customMediaQuery(1280),
  // tablet
  md: customMediaQuery(768),
  // mobile phone
  sm: customMediaQuery(480),
};
