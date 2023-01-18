import { createContext, DependencyList, ReactNode, useContext, useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import { User } from "../sdk/User";
import { useMutation } from "./api";
import { useUserRaw } from "./api/auth";

const AuthContext = createContext({
  loggedIn: false,
  loading: false,
  user: undefined as User | undefined | null,
  refresh: () => { }
})

export function AuthStatus({ children }: { children: ReactNode }) {
  const { isLoading, hasError, user, refresh } = useUserRaw()
  const obj = useMemo(() => ({
    loading: isLoading,
    loggedIn: !hasError,
    user,
    refresh
  }), [isLoading, hasError, user, refresh])
  return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>
}

export function useIsLoggedIn() {
  const ctx = useContext(AuthContext)
  return !ctx.loading && ctx.loggedIn
}

export function useIsLoggedOut() {
  const ctx = useContext(AuthContext)
  return !ctx.loading && !ctx.loggedIn
}

export function useRefreshLoginStatus() {
  return useContext(AuthContext).refresh
}

export function useUserMutation<T>(mutation: (user: User) => Promise<T>, deps: DependencyList) {
  const ctx = useContext(AuthContext)
  return useMutation<T | undefined>(async () => {
    if (!ctx.loading && ctx.loggedIn && ctx.user) {
      return await mutation(ctx.user)
    }
    throw new Error('Cannot apply mutation while not logged in')

  }, [ctx.user, ...deps])
}

export function useUserQuery<T>(query: (user: User) => Promise<T>, keys: string[]) {
  const ctx = useContext(AuthContext)
  const obj = useQuery(keys, async () => {
    if (ctx.user) {
      return await query(ctx.user)
    }
    throw new Error('Cannot query while not logged in')
  })
  useEffect(() => {
    if (!ctx.loading && obj.isError) {
      obj.refetch()
    }
  }, [ctx.loading, ctx.user, obj])
  return obj.data
}

export function useLogin(email: string, password: string) {
  const ctx = useContext(AuthContext)
  return useMutation(() => User.login(email, password).then(ctx.refresh), [ctx.refresh, email, password])
}


export function useRegister(email: string, password: string, metadata: Record<string, any>) {
  const ctx = useContext(AuthContext)
  return useMutation(() => User.register(email, password, metadata).then(ctx.refresh), [ctx.refresh, email, password, metadata])
}

export function useLogout() {
  const ctx = useContext(AuthContext)
  return useMutation(() => User.logout().then(ctx.refresh), [ctx.refresh])
}
