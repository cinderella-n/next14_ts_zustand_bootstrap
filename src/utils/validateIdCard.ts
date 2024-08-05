const calculateCheckIDCard = (idCardDigits: any) => {
    let total = 0
    const iPID = idCardDigits.replace(/-/g, '')
    const Validchk = iPID.substr(12, 1)
    for (let n = 0, j = 0, pidcut; n < 12; n++, j++) {
      pidcut = parseInt(iPID.substr(j, 1))
      total += pidcut * (13 - n)
    }
    let chk = 11 - (total % 11)
    if (chk === 10)
      chk = 0
    else if (chk === 11)
      chk = 1
    return chk === parseInt(Validchk)
  }
  export {
    calculateCheckIDCard,
  }
  