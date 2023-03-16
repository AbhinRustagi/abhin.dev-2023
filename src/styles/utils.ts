export const buildMediaQuery = (
  width: number,
  keyword: 'min' | 'max' = 'min'
) => `@media only screen and (${keyword}-width: ${width}px)`

export const mediaQuery = {
  mobile: buildMediaQuery(420),
  tablet: buildMediaQuery(768),
  desktop: buildMediaQuery(1024),
  custom: buildMediaQuery,
}
