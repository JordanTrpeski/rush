import { ReactNode } from "react"
import { usePage, useSetPage } from "./Filter"

function Page({ active, number }: { number: number, active: boolean }) {
    const setPage = useSetPage()

    if (active) {
        return <p onClick={() => setPage(number - 1)} className="text-sm font-medium leading-none cursor-pointer text-gray-900 dark:text-gray-500 border-t border-gray-900 pt-3 mr-4 px-2">{number}</p>
    }
    return <p onClick={() => setPage(number - 1)} className="text-sm font-medium leading-none cursor-pointer text-gray-900 dark:text-gray-500  hover:text-gray-700 dark:hover:text-gray-600 border-t border-transparent hover:border-gray-600 pt-3 mr-4 px-2">{number}</p>
}

function NavContainer({ active, children, onClick }: { onClick: () => void, active: boolean, children: ReactNode }) {
    if (!active) {
        return <div className="flex items-center pt-3 text-gray-600 dark:text-gray-900">
            {children}
        </div>
    }

    return <div onClick={onClick} className="flex items-center pt-3 text-gray-900 dark:text-gray-900 hover:text-gray-700 cursor-pointer">
        {children}
    </div>
}

function generateArray(maxPage: number, currentPage: number, relativePage: number): ReactNode {
    let notCorrect = false
    const result = Array.from(Array(maxPage > 7 ? 7 : maxPage).keys()).map(item => {
        let offset = 0
        if (maxPage > 7) {
            offset = (relativePage - 3 <= 0) ? 0 : relativePage - 3
            if (offset + item + 1 > maxPage) {
                notCorrect = true
            }
        }
        return <Page key={item} number={item + offset + 1} active={item + offset === currentPage} />
    })

    if (notCorrect) {
        return generateArray(maxPage, currentPage, relativePage - 1)
    }

    return result
}

export function Pagination({ maxPage }: { maxPage: number }) {
    const currentPage = usePage()
    const setPage = useSetPage()
    return <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
        <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-900 dark:border-gray-700">
            <NavContainer onClick={() => setPage(currentPage - 1)} active={currentPage > 0}>
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
            </NavContainer>
            <div className="sm:flex hidden">
                {
                    generateArray(maxPage, currentPage, currentPage)
                }
            </div>
            <NavContainer onClick={() => setPage(currentPage + 1)} active={currentPage < maxPage - 1}>
                <p className="text-sm font-medium leading-none mr-3">Next</p>
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </NavContainer>
        </div>
    </div>
}