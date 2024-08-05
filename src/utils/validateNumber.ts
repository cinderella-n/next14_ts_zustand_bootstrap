/* eslint-disable no-unused-expressions */
// (gif|jpg) ตรงกับข้อความที่มีคำว่า gif หรือ jpg (ตรวจสอบชนิดของไฟล์)
// [0-9\.\-] จำนวนตัวเลขทั้งหมด เช่น 1, 1.5, -5.02 (รวมเครื่องหมาย - และ จุดทศนิยม)
// ^[a-zA-Z0-9_]{1,}$ ตัวอักษรภาษาอังกฤษ ตัวเลข และ _ ทั้งหมด อย่างน้อย 1 ตัว (หรือประมาณว่าต้องไม่มีภาษาไทย)
// ([wx])([yz]) wy, wz, xy, หรือ xz
// ([A-Z]{3}|[0-9]{4}) 3 ตัวอักษรภาษาอังกฤษพิมพ์ใหญ่ หรือ 4 ตัวเลข
// ^[1-9][0-9]*$ 1 ถึง 99999... ต้องไม่เริ่มต้นด้วย 0
// ^(-?[0-9]*)$ ตัวเลข 0-9 เท่านั้น กี่หลักก็ได้ ติดลบก็ได้ (ต้องไม่มีตัวอักษร) สำหรับการตรวจสอบการกรอกตัวเลข
// ^[0-9]+(\.[0-9]+)?$ ตัวเลขเท่านั้น รวมจุดทศนิยม
// ^[0-9]+(\.[0-9]{2})?$ ตัวเลขเท่านั้น มีจุดทศนิยมได้ไม่เกิน 2 ตำแหน่ง (จำนวนเงิน)
// ^[1-9]{1,3}(,[0-9]{3})*(\.[0-9]{2})?$ จำนวนเงินตั้งแต่ 1 ขึ้นไป หลักพันต้องมี , คั่นด้วย มีทศนิยมได้ 2 ตำแหน่ง
// id[0-9]{4} ตรงกับ id0000 ถึง id9999 (id ตามด้วยตัวเลข 4 หลัก)
// [0-9]{4} ตรงกับข้อความที่มีตัวเลขติดกัน จำนวน 4 หลัก เช่น a0000a หรือ 0000-9999 แต่จะไม่ตรงกับ 0a000a
// [0-3][0-9]-[0-1][0-9]-[0-9]{4} วันที่(01-31)-เดือน(01-12)-พศ(4 หลัก)

// import { inputNumberAbs } from '@/shared/utils/validatenumber'
// @input="inputNumberAbs($event)" วิธีใช้
const inputNumberAbs = (event: any) => {
    absNumber(event)
    // const input = event.target
    // let val = input.value
    // val = val.replace(/^0+|[^\d.]/g, '')
    // input.value = val
  }
  
  const numberNoverspend = (event: any) => {
    const input = event.target
    let val = input.value
    val = val.replace(/^[0-9][0-9]*$/g, '')
    input.value = val
  }
  
  const telephoneNumber = (event: any) => {
    const input = event.target
    let val = input.value
    val = val.replace(/^0+|[^\d-+]/g, '')
    //   val = val.replace(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/g, '')
    input.value = val
  }
  
  const absNumber = (event: any) => {
    // console.log('--event-val---------->', event.target.value)
    // console.log('--event-data---------->', event.data)
    const input = event.target
    let val = input.value
    const reg1 = /[0-9.]/gm
    const reg2 = /^[0-9,]*(\.[0-9]{0,2})?$/i
    const reg3 = /^0{2,30}/gm
    if (event.data) {
      if (reg1.test(event.data)) {
        // console.log('--event.data 1----------->', event.data)
  
        if (reg2.test(val) && !reg3.test(val)) {
          if (val)
            input.value = val
  
          else
            input.value = event.data
          // console.log('--val1----------->', val)
        }
        else {
          event.preventDefault
          input.value = val.slice(0, -1)
          // console.log('--val2----------->', val)
        }
      }
      else {
        event.preventDefault
        input.value = val.slice(0, -1)
        // console.log('--val2----------->', val)
      }
    }
    else {
      val = val.replace(/,/gm, '')
      if (reg2.test(val) && !reg3.test(val)) {
        if (val)
          input.value = val
  
        else
          input.value = event.data
        // console.log('--val3----------->', val)
      }
    }
    // 1,233,212.332
    // if (reg1.test(event.data)) {
    //   if (reg2.test(val) && !reg3.test(val)) {
    //     if (val)
    //       input.value = val
  
    //     else
    //       input.value = event.data
    //     console.log('--val1----------->', val)
    //   }
    //   else {
    //     event.preventDefault
    //     input.value = val.slice(0, -1)
    //     console.log('--val2----------->', val)
    //   }
    // }
    // else {
    //   val = val.replace(/,/gm, '')
    //   if (reg1.test(event.data)) {
    //     if (reg2.test(val) && !reg3.test(val)) {
    //       if (val)
    //         input.value = val
  
    //       else
    //         input.value = event.data
    //       console.log('--val3----------->', val)
    //     }
    //   }
    //   else {
    //     event.preventDefault
    //     input.value = val.slice(0, -1)
    //     console.log('--val4----------->', val)
    //   }
    // }
  }
  
  export {
    inputNumberAbs,
    telephoneNumber,
    numberNoverspend,
    absNumber,
  }
  