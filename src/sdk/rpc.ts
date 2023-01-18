import api from '../api'

type ApiMethod<T extends keyof typeof api> = keyof typeof api[T]

export function params<A extends [...X], F extends (...args: A) => ReturnType<F>, X extends any[]>(...params: A) {
    return (f : F) => f(...params)
}

export function call<T extends keyof typeof api, M extends ApiMethod<T>, X>({type, method, pass}:{type: T, method: M, pass: (fn: typeof api[T][M]) => X}) {
    return pass(api[type][method])
}
