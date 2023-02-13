import EditProducts from "./EditProducts"
import { ShowWhenEditProductToggled, useEditProductToggle } from "./EditProductToggle"

export default function EditProduct() {
    const editProductToggle = useEditProductToggle()
    return <ShowWhenEditProductToggled>
        <div className="fixed w-screen h-screen bg-transparent top-0 left-0" onClick={editProductToggle}>
            <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit bg-white drop-shadow shadow-2xl" onClick={e => e.stopPropagation()}>
                <EditProducts />
            </div>
        </div>
    </ShowWhenEditProductToggled>
} 