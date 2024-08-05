export const parseJson = (str: string | undefined) => {
    try {
      const data = JSON.parse(String(str))
      return { ok: true, error: false, data }
    }
    catch (err: any) {
      return { ok: false, error: true, data: str }
    }
  }
  