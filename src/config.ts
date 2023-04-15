export const envVars = {
  wakatimeKey: process.env.WAKATIME_API_KEY,
  env: process.env.ENV,
}

export const isProduction = envVars.env === 'production'
