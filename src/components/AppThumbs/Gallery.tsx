import { IoIosImages } from 'react-icons/io'
import { FaTwitter } from 'react-icons/fa'
import { AppThumb } from './AppThumb'
import { SiWakatime } from 'react-icons/si'

export const Gallery = () => (
  <AppThumb color="#20262E" background="#E8D5C4">
    <IoIosImages />
  </AppThumb>
)

export const Twitter = () => (
  <AppThumb color="#fff" background="#1DA1F2">
    <FaTwitter />
  </AppThumb>
)

export const Wakatime = () => (
  <AppThumb color="#0B2447" background="#F6F1E9">
    <SiWakatime />
  </AppThumb>
)
