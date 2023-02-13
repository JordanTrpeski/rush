import { useQuery } from "react-query";
import { User } from "../../sdk/User";

export function useUserRaw() {
  const { data, refetch, isError, isLoading } = useQuery(['user-id'], async () => {
    const self = await User.self()
    if (!self) {
      throw new Error('Not logged in!')
    }
    return self
  })
  return {
    user: data,
    hasError: isError,
    isLoading: isLoading,
    refresh: refetch
  }
}