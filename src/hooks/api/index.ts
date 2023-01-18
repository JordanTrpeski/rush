import { DependencyList, useCallback, useState } from "react"

export function useMutation<T>(mutation: () => Promise<T>, deps: DependencyList) {
  const [isLoading, setBusy] = useState(false)
  const [hasSentRequest, setHasSentRequest] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [result, setResult] = useState<T | undefined>(undefined)
  const [error, setError] = useState<any>(undefined)
  const send = useCallback(async () => {
    setBusy(true)
    setHasSentRequest(true)
    try {
      const res = await mutation()
      setResult(res)
      setBusy(false)
      setHasError(false)
      setError(undefined)
    } catch (err) {
      setResult(undefined)
      setBusy(false)
      setHasError(true)
      setError(err)
      throw err
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return { send, result, isLoading, hasError, hasSentRequest, error }
}