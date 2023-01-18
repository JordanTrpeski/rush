import request, { get_base_path } from "./base";

export function get_image_metadata(imageId: string) {
    return request<Record<string, any>>({
        route: `images/${imageId}/metadata`
    })
}

export function get_image_url(imageId: string) {
    return `${get_base_path()}/images/${imageId}`
}
