import { get_current_user_id, login, register } from "./auth"
import { change_base_path, change_global_token, delete_global_token, get_base_path } from "./base"
import { get_image_metadata, get_image_url } from "./images"
import { add_product, delete_product, delete_product_image, get_private_product, get_products_for_current_user, get_product_images, publish_product, unpublish_product, update_product, update_product_image_metadata, upload_product_image } from "./products"
import { batch, product_by_id, product_by_slug, query_products, query_users, user_by_email, user_by_id } from "./query"
import { add_favorite, change_password, delete_favorite, get_favorite_products, get_user_metadata, update_user_metadata } from "./user"

const api = {
    base: {
        get_base_path,
        delete_global_token,
        change_base_path,
        change_global_token
    },
    images: {
        get_image_metadata,
        get_image_url
    },
    auth: {
        login,
        register,
        get_current_user_id,
    },
    user: {
        get_user_metadata,
        update_user_metadata,
        change_password,
        get_favorite_products,
        add_favorite,
        delete_favorite
    },
    products: {
        get_products_for_current_user,
        add_product,
        update_product,
        delete_product,
        get_private_product,
        publish_product,
        unpublish_product,
        upload_product_image,
        get_product_images,
        delete_product_image,
        update_product_image_metadata
    },
    query: {
        query_products,
        query_users,
        user_by_id,
        user_by_email,
        batch,
        product_by_id,
        product_by_slug
    }
}

export default api