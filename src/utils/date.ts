// eslint-disable-next-line import/no-named-default
import { default as dayjs } from 'dayjs'
import en from 'dayjs/locale/en'
import th from 'dayjs/locale/th'
// eslint-disable-next-line import/no-named-default
import { default as buddhistEra } from 'dayjs/plugin/buddhistEra'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { lastValueFrom } from 'rxjs'

// import { CommonMasterDataService } from '@/shared/generate/service/common'
// import { appStore } from '@/shared/stores'
const BangkokTime = 'Asia/Bangkok'

dayjs.extend(utc)
dayjs.extend(timezone)

dayjs.tz.setDefault(BangkokTime)
dayjs.extend(buddhistEra)

// tslint:disable-next-line:variable-name
const YYYYMMDD_HHMMSS = 'YYYY-MM-DD HH:mm:ss'

// const dd = ref('')

// @Injectable()
export class DateService {
  formatDateTimeENZone(d: string | undefined) {
    return d ? dayjs(d).tz(BangkokTime).locale(th).format('YYYY-MM-DDTHH:mm:ssZ') : '-'
  }

  formatDateTimeENWithoutZone(d: string | undefined) {
    return d ? dayjs(d).tz(BangkokTime).locale(th).format('YYYY-MM-DDTHH:mm:ss') : '-'
  }

  formatDate(d: string | undefined) {
    return d ? dayjs(d).tz(BangkokTime).locale(th).format('DD MMM BBBB') : '-'
  }

  formatDateFullMonth(d: string | Date | undefined) {
    return d ? dayjs(d).tz(BangkokTime).locale(th).format('D MMMM BBBB') : '-'
  }

  formatDateOneDigit(d: string | undefined) {
    return dayjs(d).tz(BangkokTime).locale(th).format('D MMM BBBB')
  }

  formatFullDate(d: string | undefined) {
    return d ? dayjs(d).tz(BangkokTime).locale(th).format('DD MMM BBBB (HH:mm น.)') : '-'
  }

  formatTime(d: string | undefined) {
    return dayjs(d).tz(BangkokTime).locale(th).format('HH:mm น.')
  }

  formatDateTime(d: string | undefined) {
    return dayjs(d).tz(BangkokTime).locale(th).format('DD MMM BBBB HH:mm น.')
  }

  formatDateTimeThai(d: string | undefined) {
    return dayjs(d).tz(BangkokTime).locale(th).format('DD/MM/BBBB HH:mm น.')
  }

  formatDateMonthNo(d: string | undefined) {
    return dayjs(String(d)).locale(th).format('DD-MM')
  }

  formatMonthThai(d: string | undefined) {
    return dayjs(String(d)).locale(th).format('MMM')
  }

  formatMonthNo(d: string | undefined) {
    return dayjs(String(d)).locale(th).format('MM')
  }

  formatDateThaiFullMonth(d: string | undefined) {
    return d ? dayjs(d).tz(BangkokTime).locale(th).format('DD MMMM BBBB') : '-'
  }

  formatDateThai(d: string | undefined) {
    return d ? dayjs(d).tz(BangkokTime).locale(th).format('D MMM BBBB') : '-'
  }

  formatDateThai2(d: string | undefined) {
    return d ? dayjs(d).tz(BangkokTime).locale(th).format('DD/MM/BBBB') : ''
  }

  formatDateThai3(d: string | undefined) {
    return d ? dayjs(d).tz(BangkokTime).locale(th).format('DD/MM/BBBB HH:mm น.') : ''
  }

  formatDateThai4(d: string | undefined) {
    return d ? dayjs(d).tz(BangkokTime).locale(th).format('BBBB-MM-DD') : '-'
  }

  formatDateThai5(d: string | undefined) {
    return d ? dayjs(d).tz(BangkokTime).locale(th).format('DD-MM-BBBB') : '-'
  }

  formatMonthAndYearThai(d: string | undefined) {
    return d ? dayjs(d).tz(BangkokTime).locale(th).format('MMM BBBB') : '-'
  }

  formatDateEn(d: Date | string) {
    if (d === null)
      return ''
    return dayjs(d).tz(BangkokTime).locale(th).format('YYYY-MM-DD')
  }

  formatDateEn2(d: string | undefined) {
    return d ? dayjs(d).tz(BangkokTime).locale(th).format('DD/MM/YYYY') : '-'
  }

  formatFixDateTH(d: string | undefined) {
    const reg = /(\d\d\d\d)-(\d\d)-(\d\d)T.*/gm
    if (d) {
      const ds: any[] = reg.exec(d) as any[]
      const y = Number.parseInt(ds[1]) + 543
      return `${ds[3]}/${ds[2]}/${y}`
    } return '-'
  }

  listMonthsByLocales(length = 12, locales = 'th-TH', formatMonth: any = 'long') {
    // Default Thai
    const months = Array.from({ length }, (item, i) => {
      return new Date(0, i).toLocaleString(locales, { month: formatMonth })
    })

    return months
  }

  getCurrent = async () => {
    // const srvCommonMasterDataService = await new CommonMasterDataService()
    // return await lastValueFrom(srvCommonMasterDataService.getCurrentDateTime())
    // return dayjs().tz(BangkokTime).locale(th).format(YYYYMMDD_HHMMSS)
    // const $appStore = appStore()
    const $appStore = new Date()
    // return $appStore.getCurrentDate
    return $appStore

  }

  // async getTomorrow() {
  //   const srvCommonMasterDataService = await new CommonMasterDataService()
  //   const dd: string = await lastValueFrom(srvCommonMasterDataService.getCurrentDateTime())
  //   if (dd) {
  //     const tomorrow = await new Date(dd) // The Date object returns today's timestamp
  //     return await tomorrow.setDate(tomorrow.getDate() + 1)
  //   }
  // }

  getCurrentDateThai() {
    return dayjs().tz(BangkokTime).locale(th).format('DD/MM/BBBB')
  }

  getCurrentWithoutTime() {
    return dayjs().tz(BangkokTime).locale(th).format('YYYY-MM-DD')
  }

  getCurrentMonth(format = 'MMMM') {
    return dayjs().tz(BangkokTime).locale(th).format(format)
  }

  getCurrentMonthNumber() {
    return dayjs().tz(BangkokTime).locale(th).month()
  }

  getCurrentFormat(format = 'YYYY-MM-DD') {
    return dayjs().tz(BangkokTime).locale(th).format(format)
  }

  getFullYear() {
    return dayjs().tz(BangkokTime).locale(th).format('BBBB')
  }

  getFullYearAD() {
    return dayjs().tz(BangkokTime).locale(en).format('YYYY')
  }

  getCurrentYear(d: string | undefined) {
    return dayjs(d).tz(BangkokTime).locale(th).format('YYYY')
  }

  getCurrentMonthYear(d: string | undefined) {
    return dayjs(d).tz(BangkokTime).locale(th).format('YYYYMM')
  }

  getCurrentYearAD(d: string | undefined) {
    return dayjs(d).format('YYYY')
  }

  getBuddhistEra(y: string) {
    return dayjs(String(y)).locale(th).format('BBBB')
  }

  getTwoDigit(n: number) {
    return (`${n}`).length === 1 ? `0${n}` : n
  }

  compareDiffRefreshToken(before: string, after: string) {
    const beforeDt = dayjs(before).locale(th).format(YYYYMMDD_HHMMSS)
    const afterDt = dayjs(after).locale(th).format(YYYYMMDD_HHMMSS)
    return Math.abs(dayjs(beforeDt).diff(afterDt, 'minute')) === 0
  }

  getMinSec(time: string) {
    const times: number = parseInt(time, 10)
    const minutes: number = Math.floor(times / 60)
    return (
      `${this.getTwoDigit(minutes)}:${this.getTwoDigit(times - minutes * 60)}`
    )
  }

  getCurrentDatetimeFile(): string {
    return dayjs().tz(BangkokTime).locale(th).format('DDMMBBBB_HH-mm-ss')
  }

  ParseTimeZoneDateTime(dt: string) {
    return dt?.split(' ')?.join('T')
  }

  convertDateFeatureConfig(
    value: number,
    format: any,
    specificStartDate?: string,
  ): string {
    let d: dayjs.Dayjs
    if (specificStartDate)
      d = dayjs(specificStartDate).locale(th).add(value, format)

    else
      d = dayjs().tz(BangkokTime).locale(th).add(value, format)

    return dayjs(d).tz(BangkokTime).locale(th).format('YYYY-MM-DD')
  }

  static substractDate(
    value: number,
    format: dayjs.ManipulateType | undefined,
    specificStartDate?: string,
  ) {
    let d: dayjs.Dayjs
    if (specificStartDate)
      d = dayjs(specificStartDate).locale(th).subtract(value, format)

    else
      d = dayjs().tz(BangkokTime).locale(th).subtract(value, format)

    return dayjs(d).tz(BangkokTime).locale(th).format('YYYY-MM-DD')
  }
}
