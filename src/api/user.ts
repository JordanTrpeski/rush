import { UserMetadata } from "./auth";
import request from "./base";

type ChangePasswordModel = {
    old_password: string,
    new_password: string
}

export function get_user_metadata()  {
    return request<UserMetadata>({
        route: 'user'
    })
}

export function update_user_metadata_raw(metadata: UserMetadata) {
    return request<''>({
        route: 'user',
        method: 'patch',
        body: JSON.stringify(metadata)
    })
}

export async function update_user_metadata(metadata: UserMetadata) {
    await update_user_metadata_raw(metadata)
}

export function change_password_raw(model: ChangePasswordModel) {
    return request<''>({
        route: 'user/password',
        method: 'patch',
        body: JSON.stringify(model)
    })
}

export async function change_password(old_password: string, new_password: string) {
    await change_password_raw({old_password, new_password})
}

export function get_favorite_products() {
    return request<string[]>({
        route: 'user/favorites'
    })
}

export function add_favorite_raw(productId: string) {
    return request<''>({
        route: `user/favorites/${productId}`,
        method: 'put'
    })
}

export async function add_favorite(productId: string) {
    await add_favorite_raw(productId)
}

export function delete_favorite_raw(productId: string) {
    return request<''>({
        route: `user/favorites/${productId}`,
        method: 'delete'
    })
}

export async function delete_favorite(productId: string) {
    await delete_favorite_raw(productId)
}
