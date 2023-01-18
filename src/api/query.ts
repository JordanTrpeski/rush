import request from "./base"

export type Reference = {
    id: string,
    created_at: string,
    updated_at: string
}

export type QueryResultWithMetadata = Reference & {
    metadata: Record<string, any>
}


export type ProductResult = QueryResultWithMetadata & {
    owner_id: string,
    slug: string
}

export type UserResult = QueryResultWithMetadata

export type SearchItem = {
    field: string,
    value: string,
    eq?: boolean
}

export type SortItem = {
    field: string,
    direction?: 'asc' | 'desc'
}

export type SelectItem = {
    field: string,
    alias?: string
}

export type Search = {
    combine_with?: 'and' | 'or',
    search?: SearchItem[],
    sort?: SortItem[],
    select?: SelectItem[],
    page?: number,
    page_size?: number
}


type BatchRequest = {
    id?: number,
    table: 'products' | 'users',
}

type SearchBatchRequest = {
    query: Search
}

type EqualsBatchRequest = {
    key: string,
    value: string,

}
export type TableSearch = BatchRequest & (EqualsBatchRequest | SearchBatchRequest)
export type BatchResult<T> = { id?: number } & ({success: true, response: T} | {success: false, error: string})



export function query_products(search: Search) {
    return request<(Partial<ProductResult> & Record<string, any>)[]>({
        route: 'query/products',
        method: 'post',
        body: JSON.stringify(search)
    })
}

export function query_users(search: Search) {
    return request<(Partial<UserResult> & Record<string, any>)[]>({
        route: 'query/users',
        method: 'post',
        body: JSON.stringify(search)
    })
}


export function user_by_id(id: string) {
    return request<UserResult>({
        route: `query/users/by-id/${id}`
    })
}


export function user_by_email(email: string) {
    return request<UserResult>({
        route: `query/users/by-email/${email}`
    })
}

export function batch(tableSearches: TableSearch[]) {
    return request<BatchResult<QueryResultWithMetadata>[]>({
        route: 'query/batch',
        method: 'post',
        body: JSON.stringify(tableSearches)
    })
}


export function product_by_id(id: string) {
    return request<ProductResult>({
        route: `query/products/by-id/${id}`
    })
}

export function product_by_slug(slug: string) {
    return request<ProductResult>({
        route: `query/products/by-slug/${slug}`
    })
}