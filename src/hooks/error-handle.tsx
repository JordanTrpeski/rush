import { useCallback, useState } from "react";
import { ApiError } from "../api/base";

export function useCallbackWithError<Args extends any[], T>(cb: (...args: Args) => Promise<T>) {
  const [errorStatus, setError] = useState({
    error: '',
    hasError: false
  })
  const callback =  useCallback(async (...args: Args) => {
    try {
      return await cb(...args)
    } catch(e) {
      if (e instanceof ApiError<string>) {
        setError({
          error: e.response,
          hasError: true
        })
      } else {
        setError({
          error: (e as any)?.message ? (e as any)?.message.toString() : (e as any)?.toString(),
          hasError: true
        })
      }
    }
  }, [cb])
  return {errorStatus, callback}
}