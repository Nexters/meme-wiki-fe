/* 크롬 개발자 도구 기준 */
export const breakpoints = {
  mobile: '425px',
  tablet: '768px',
  desktop: '1024px',
} as const;

export const mq = {
  tablet: `@media (min-width: ${breakpoints.tablet})`,
  desktop: `@media (min-width: ${breakpoints.desktop})`,
} as const;
