import { ApiObject } from "./ApiObject"
import { Product } from "./Product"
import { call, params } from "./rpc"

export class Favorite implements ApiObject<{id: string}> {
    private constructor(private _favoriteId: string) { }
    
    id(): { id: string } {
        return {id: this._favoriteId}
    }

    public static fromId(favoriteId: string) {
        return new Favorite(favoriteId)
    }

    public product() {
        return Product.fromId(this._favoriteId)
    }

    public async remove() {
        await call({
            type: 'user',
            method: 'delete_favorite',
            pass: params(this._favoriteId)
        })
    }
}