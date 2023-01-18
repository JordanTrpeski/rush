let basePath = 'http://localhost:5000'
let globalToken : string | undefined = undefined

export function get_base_path() {
    return basePath
}

export function delete_global_token() {
    globalToken = undefined
}

export function change_base_path(path: string) {
    if (path.endsWith('/')) {
        throw new TypeError('The base path ends with `/` which is probably a mistake')
    }
    basePath = path
}

export function change_global_token(token: string) {
    globalToken = token
}
type RequestObject = {route: string, method?: string, token?: string, body?: BodyInit, contentType?: string}
type ErrorObject<T> = {status: {code: number, text: string}, response: T, request: RequestObject}
class ApiError<T> extends Error {
    public readonly status: {code: number, text: string}
    public readonly response : T
    public readonly request : RequestObject
    constructor(obj: ErrorObject<T>) {
        super(obj.status.text)
        this.status = obj.status
        this.response = obj.response
        this.request = obj.request
    }
}

export default function request<T>({route, method, token, body, contentType} : RequestObject) {

    if (route.startsWith('/')) {
        throw new TypeError('The route starts with `/` which is probably a mistake')
    }

    if (!method) {
        method = 'get'
    }
    let headers : Record<string, string> = {
    } 

    if (!token) {
        token = globalToken
    }


    if (token) {
        headers = {
            ...headers,
            authorization: `Bearer ${token}`
        }
    }

    if (body && !(body instanceof FormData)) {
        headers['content-type'] = contentType ?? 'application/json'
    }

    return fetch(`${basePath}/${route}`,{
        method,
        headers,
        body
    })
    .then(async response => {
        if (!response.ok) {
            throw new ApiError<string>({
                status: {
                    text: response.statusText,
                    code: response.status
                },
                response: await response.json(),
                request: structuredClone({ route, method, token: '<hidden>', body, contentType })
            })
        }
        if (response.headers.get('content-type')?.startsWith('application/json')
         || response.headers.get('content-type')?.startsWith('text/json')) {
            return await response.json() as T
        }
        return await response.text() as T
    })
}