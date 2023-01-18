import { ApiObject } from "./ApiObject"
import { call, params } from "./rpc"

export class Image implements ApiObject<{id?: string, productId?: string, authorized: boolean}> {
    private constructor(private _id: string, private _productId?: string, private _private: boolean = false) {
    }
    id(): { id?: string | undefined; productId?: string | undefined; authorized: boolean } {
        return {id: this._id, productId: this._productId, authorized: this._private}
    }

    public url() {
        return call({
            type: 'images',
            method: 'get_image_url',
            pass: params(this._id)
        })
    }

    public async metadata() {
        return await call({
            type: 'images',
            method: 'get_image_metadata',
            pass: params(this._id)
        })
    }

    public async remove() {
        if (!this._private || !this._productId) {
            throw new TypeError('This operation can only be done on an image that has been uploaded by the current user')
        }
        await call({
            type: 'products',
            method: 'delete_product_image',
            pass: params(this._productId, this._id)
        })
    }

    public async update(metadata: object) {
        if (!this._private || !this._productId) {
            throw new TypeError('This operation can only be done on an image that has been uploaded by the current user')
        }
        
        await call({
            type: 'products',
            method: 'update_product_image_metadata',
            pass: params(this._productId, this._id, metadata)
        })
    }

    public static fromId(id: string) {
        return new Image(id)
    }

    public static fromProduct(productId: string, imageId: string, isOwnedByUser: boolean) {
        return new Image(imageId, productId, isOwnedByUser)
    }
}
