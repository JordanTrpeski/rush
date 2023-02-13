import { createContext, ReactElement, RefObject, useContext, useRef } from "react";


const CanvasContext = createContext<{ ref: RefObject<HTMLCanvasElement | undefined> }>({
    ref: {
        current: undefined
    }
})


export function CanvasProvider({ children }: { children?: ReactElement }) {
    const ref = useRef<HTMLCanvasElement>(null)
    return <CanvasContext.Provider value={{ ref }}>
        <canvas ref={ref} hidden />
        {children}
    </CanvasContext.Provider>
}

export function useCanvas() {
    return useContext(CanvasContext).ref.current
}
