import { ProductModel, ProductPrivateMetadataModel } from "../api/products"
import { Search } from "../api/query"
import { ApiObject } from "./ApiObject"
import { Favorite } from "./Favorite"
import { Image } from "./Image"
import { call, params } from "./rpc"

export class Product implements ApiObject<{productId?: string, slug?: string, authorized: boolean}> {
    private constructor(private _productId?: string, private _slug?: string, private _private: boolean = false) { }
    id(): { productId?: string | undefined; slug?: string | undefined; authorized: boolean } {
        return {productId: this._productId, slug: this._slug, authorized: this._private}
    }

    public static fromId(productId: string) {
        return new Product(productId)
    }

    public static fromIdPrivate(productId: string) {
        return new Product(productId, undefined, true)
    }

    public static fromSlug(slug: string) {
        return new Product(undefined, slug)
    }

    public static async create(product: ProductModel) {
        const productId = await call({
            type: 'products',
            method: 'add_product',
            pass: params(product)
        })
        return Product.fromId(productId)
    }

    public async update(product: ProductModel) {
        if (!this._private || !this._productId) {
            throw new TypeError('This operation can be done only on products owned by the currently logged in user')
        }
        await call({
            type: 'products',
            method: 'update_product',
            pass: params(this._productId, product)
        })
    }

    public async remove() {
        if (!this._private || !this._productId) {
            throw new TypeError('This operation can be done only on products owned by the currently logged in user')
        }

        await call({
            type: 'products',
            method: 'delete_product',
            pass: params(this._productId)
        })
    }

    public async publish() {
        if (!this._private || !this._productId) {
            throw new TypeError('This operation can be done only on products owned by the currently logged in user')
        }

        await call({
            type: 'products',
            method: 'publish_product',
            pass: params(this._productId)
        })
    }


    public async unpublish() {
        if (!this._private || !this._productId) {
            throw new TypeError('This operation can be done only on products owned by the currently logged in user')
        }

        await call({
            type: 'products',
            method: 'unpublish_product',
            pass: params(this._productId)
        })
    }

    public async metadata() {
        if (this._private && this._productId) {
            return await call({
                type: 'products',
                method: 'get_private_product',
                pass: params(this._productId)
            })
        }

        if (this._productId) {
            return await call({
                type: 'query',
                method: 'product_by_id',
                pass: params(this._productId)
            }).then(x => ({ ...x, private: false } as unknown as ProductPrivateMetadataModel))
        }

        if (this._slug) {
            return await call({
                type: 'query',
                method: 'product_by_slug',
                pass: params(this._slug)
            }).then(x => ({ ...x, private: false } as unknown as ProductPrivateMetadataModel))
        }

        throw new TypeError('This product doesn\'t have any identification properties')
    }

    public async images() {
        this._productId ??= await call({
            type: 'query',
            method: 'product_by_slug',
            pass: params(this._slug ?? "")
        }).then(data => data.id)

        const imageIds = await call({
            type: 'products',
            method: 'get_product_images',
            pass: params(this._productId ?? "")
        })

        return imageIds.map(imageId => Image.fromProduct(this._productId ?? "", imageId, this._private))
    }

    public async uploadImage(image: Blob, metadata: object = {}) {
        if (!this._private || !this._productId) {
            throw new TypeError('This operation can be done only on products owned by the currently logged in user')
        }

        const imageId = await call({
            type: 'products',
            method: 'upload_product_image',
            pass: params(this._productId, image, metadata)
        })

        return Image.fromProduct(this._productId, imageId, this._private)
    }

    public static async query(search: Search) {
        return await call({
            type: 'query',
            method: 'query_products',
            pass: params(search)
        })
    }

    public async favorite() {
        this._productId ??= await call({
            type: 'query',
            method: 'product_by_slug',
            pass: params(this._slug ?? "")
        }).then(data => data.id)
        await call({
            type: 'user',
            method: 'add_favorite',
            pass: params(this._productId ?? "")
        })
        return Favorite.fromId(this._productId ?? "")
    }
}

