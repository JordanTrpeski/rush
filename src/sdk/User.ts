import { UserMetadata } from "../api/auth";
import { Search } from "../api/query";
import { ApiObject } from "./ApiObject";
import { Favorite } from "./Favorite";
import { Product } from "./Product";
import { call, params } from "./rpc";


export class User implements ApiObject<{id?: string, email?: string, authorized: boolean}> {
    private constructor(private _id?: string, private _email?: string, private _self: boolean = false) { }
    id(): { id?: string | undefined; email?: string | undefined; authorized: boolean; } {
        return {id: this._id, email: this._email, authorized: this._self}
    }

    public static fromId(id: string) {
        return new User(id, undefined, false)
    }

    public static fromEmail(email: string) {
        return new User(undefined, email, false)
    }

    public static async register(email: string, password: string, metadata?: Record<string, any>) {
        const token = await call({
            type: 'auth',
            method: 'register',
            pass: params(email, password, metadata)
        })
        localStorage.setItem('token', token)
    }


    public async metadata() {
        if (this._self) {
            return await call({
                type: 'user',
                method: 'get_user_metadata',
                pass: params()
            })
        }
        if (this._id) {
            return await call({
                type: 'query',
                method: 'user_by_id',
                pass: params(this._id)
            }).then(x => x.metadata)
        }

        if (this._email) {
            return await call({
                type: 'query',
                method: 'user_by_email',
                pass: params(this._email)
            }).then(x => x.metadata)
        }

        throw new TypeError('This user doesn\'t have an associated email or id')

    }

    public static async update(metadata: UserMetadata) {
        await call({
            type: 'user',
            method: 'update_user_metadata',
            pass: params(metadata)
        })
    }

    public static async changePassword(oldPassword: string, newPassword: string) {
        await call({
            type: 'user',
            method: 'change_password',
            pass: params(oldPassword, newPassword)
        })
    }

    public static async favorites() {
        return await call({
            type: 'user',
            method: 'get_favorite_products',
            pass: params()
        }).then(favorites => favorites.map(favoriteId => Favorite.fromId(favoriteId)))
    }

    public static async products() {
        return await call({
            type: 'products',
            method: 'get_products_for_current_user',
            pass: params()
        }).then(products => products.map(productId => Product.fromIdPrivate(productId)))
    }

    public static async login(email: string, password: string) {
        const token = await call({
            type: 'auth',
            method: 'login',
            pass: params(email, password)
        })
        localStorage.setItem('token', token)
    }

    public static async logout() {
        call({
            type: 'base',
            method: 'delete_global_token',
            pass: params()
        })
        localStorage.clear()
    }

    public static async query(search: Search) {
        return await call({
            type: 'query',
            method: 'query_users',
            pass: params(search)
        })
    }

    public static async self(): Promise<User | null> {
        try {
            const id = await call({
                type: 'auth',
                method: 'get_current_user_id',
                pass: params()
            })
            return new User(id, undefined, true)
        } catch {
            return null
        }

    }
}