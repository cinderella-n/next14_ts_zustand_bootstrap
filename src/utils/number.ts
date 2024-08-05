/**
 * FormatNumber
 */
export class FormatNumber {
    public Currency(value: number, decimal = 0) {
      const v = new Intl.NumberFormat('th-TH', {
        minimumFractionDigits: decimal,
        maximumFractionDigits: decimal,
      }).format(Number(value))
      return v.toString()
    }
  
    public getNumberFromCommas(num: string) {
      return Number(num.toString().replace(/\,/g, ''))
    }
  
    public getFormatAccount = (data: number | string, digi = 2) => {
      const number = +data
      if (+number < 0) {
        const num = this.Currency(Math.abs(+data), 2)
        return `(${num})`
      }
      else { return this.Currency(Number(data), digi) }
    }
  }
  