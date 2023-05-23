import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTimePlugin from 'dayjs/plugin/relativeTime'

export const useDayjs = () => {
  dayjs.locale('zh-cn')
  dayjs.extend(relativeTimePlugin)

  return {
    dayjs,
  }
}
