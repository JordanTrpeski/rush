import request, { change_global_token } from "./base";

export type UserMetadata = {
    email: string
} & Record<string, any>

export type RegisterModel = {
    password: string,
    metadata: UserMetadata
}

export type LoginModel = {
    password: string,
    email: string
}

export type AuthResponse = {
    token: string
}

export function register_raw(model: RegisterModel) {
    return request<AuthResponse>({
        route: 'auth/register',
        method: 'post',
        body: JSON.stringify(model)
    })
}

export function login_raw(model: LoginModel) {
    return request<AuthResponse>({
        route: 'auth/login',
        method: 'post',
        body: JSON.stringify(model)
    })
}

export function get_current_user_id() {
    return request<string>({
        route: 'auth/id',
        method: 'get'
    })
}

export async function register(email: string, password: string, metadata?: Record<string, any>) {
    if (!metadata) {
        metadata = {}
    }
    const response = await register_raw({
        password,
        metadata: {
            ...metadata,
            email
        }
    })
    const token = response.token
    change_global_token(token)
    return token
}

export async function login(email: string, password: string) {
    const response = await login_raw({
        password,
        email
    })
    const token = response.token
    change_global_token(token)
    return token
}