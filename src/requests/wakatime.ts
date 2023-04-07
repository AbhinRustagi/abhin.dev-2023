import axios from 'axios'
import { envVars } from '~/config'

const WAKATIME_URL_PREFIX = 'https://wakatime.com/api/v1/'

export interface WakatimeStatsFormatted {
  hours: number
  minutes: number
}

function makeURL(path: string, params?: {}) {
  const searchParams = new URLSearchParams(params)
  return WAKATIME_URL_PREFIX + path + '?' + searchParams.toString()
}

async function requestWakatimeStats() {
  const params = {
    api_key: envVars.wakatimeKey,
    range: 'Last 14 Days',
  }

  const response = await axios.get(makeURL('users/current/summaries', params))

  return response.data
}

function formatWakatimeStats(data: any): WakatimeStatsFormatted {
  // Using only Hours & Minutes right now
  const digitalCount = data.cumulative_total?.digital.split(':')

  if (digitalCount.length > 0) {
    return {
      hours: parseInt(digitalCount[0]),
      minutes: parseInt(digitalCount[1]),
    }
  } else {
    return {
      hours: 0,
      minutes: 0,
    }
  }
}

export async function getWakatimeStats() {
  const response = await requestWakatimeStats()
  const formattedData = formatWakatimeStats(response)
  return formattedData
}
