import request from "./base";

export type ProductModel = {
    title: string
} & Record<string, any>

export type ProductPrivateMetadataModel = {
    metadata: ProductModel,
    private: boolean,
    slug: string
}

export type ImageUploadModel = {
    image: Blob,
    metadata?: object
}

export function get_products_for_current_user() {
    return request<string[]>({
        route: 'products'
    })
}

export function add_product(product: ProductModel) {
    return request<string>({
        route: 'products',
        method: 'post',
        body: JSON.stringify(product)
    })
}

export function update_product_raw(productId: string, product: ProductModel) {
    return request<``>({
        route: `products/${productId}`,
        method: 'patch',
        body: JSON.stringify(product)
    })
}

export async function update_product(productId: string, product: ProductModel) {
    await update_product_raw(productId, product)
}


export function delete_product_raw(productId: string) {
    return request<''>({
        route: `products/${productId}`,
        method: 'delete'
    })
}

export async function delete_product(productId: string) {
    await delete_product_raw(productId)
}

export function get_private_product(productId: string) {
    return request<ProductPrivateMetadataModel>({
        route: `products/${productId}`
    })
}

export function publish_product_raw(productId: string) {
    return request<''>({
        route: `products/${productId}/publish`,
        method: 'patch'
    })
}

export function unpublish_product_raw(productId: string) {
    return request<''>({
        route: `products/${productId}/unpublish`,
        method: 'patch'
    })
}

export async function publish_product(productId: string) {
    await publish_product_raw(productId)
}

export async function unpublish_product(productId: string) {
    await unpublish_product_raw(productId)
}

export function upload_product_image_raw(productId: string, model: ImageUploadModel) {
    const formData = new FormData()
    formData.append('image', model.image)
    formData.append('metadata', JSON.stringify(model.metadata ?? {}))
    return request<string>({
        route: `products/${productId}/images`,
        method: 'post',
        contentType: 'multipart/form-data',
        body: formData
    })
}

export async function upload_product_image(productId: string, image: Blob, metadata: object = {}) {
    return await upload_product_image_raw(productId, {image, metadata})
}
 
export function update_product_image_metadata_raw(productId: string, imageId: string, metadata: object) {
    return request<''>({
        route: `products/${productId}/${imageId}`,
        method: 'patch',
        body: JSON.stringify(metadata)
    })
}

export function delete_product_image_raw(productId: string, imageId: string) {
    return request<''>({
        route: `products/${productId}/${imageId}`,
        method: 'delete',
    })
}

export function get_product_images(productId: string) {
    return request<string[]>({
        route: `products/${productId}/images`
    })
}

export async function delete_product_image(productId: string, imageId: string) {
    await delete_product_image_raw(productId, imageId)
}

export async function update_product_image_metadata(productId: string, imageId: string, metadata: object) {
    await update_product_image_metadata_raw(productId, imageId, metadata)
}