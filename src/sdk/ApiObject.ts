import { TableSearch } from "../api/query"
import { call, params } from "./rpc"

export interface ApiObject<T> {
    id(): T
}

export class ApiService {
    public static async query(requests: TableSearch[]) {
        return await call({
            type: 'query',
            method: 'batch',
            pass: params(requests)
        })
    }
    public static canModify<T extends {authorized: boolean}>(obj: ApiObject<T>) {
        if (obj.id().authorized !== undefined) {
            return obj.id().authorized
        } 
        return true
    }
    
    public static configure(baseUrl?: string) {
        if (baseUrl) {
            call({
                type: 'base',
                method: 'change_base_path',
                pass: params(baseUrl)
            })
        }
        const savedToken = localStorage.getItem('token')
        if (savedToken) {
            call({
                type: 'base',
                method: 'change_global_token',
                pass: params(savedToken)
            })
        }
    }
}