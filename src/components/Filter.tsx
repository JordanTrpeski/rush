import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { useQuery, useQueryClient } from "react-query"
import { Search, SortItem } from "../api/query"
import { Product } from "../sdk/Product"

const FilterContext = createContext<{ search: Search, setSearch: (search: Search) => void }>({ search: {}, setSearch: () => { } })
const PageContext = createContext<{ page: number, setPage: (page: number) => void }>({ page: 0, setPage: () => { } })

export function PaginationProvider({ children }: { children: ReactNode }) {
	const [page, setPage] = useState(0)
	return <PageContext.Provider value={{ page, setPage }}>
		{children}
	</PageContext.Provider>
}

export function FilterProvider({ children }: { children: ReactNode }) {
	const [search, setSearch] = useState<Search>({})
	return <FilterContext.Provider value={{ search, setSearch }}>
		{children}
	</FilterContext.Provider>
}

export function usePage() {
	return useContext(PageContext).page
}

export function useSetPage() {
	return useContext(PageContext).setPage
}

export function useSearch() {
	return useContext(FilterContext).search
}

export const PageSize = 1

export function useFilteredProducts() {
	const search = useSearch()
	return useQuery(JSON.stringify(search), () => Product.query(search).then(items => {
		const products = items.map(item => Product.fromId(item.id!))
		const total = items.length === 0 ? 0 : items[0].full_count
		const maxPage = Math.ceil(total / PageSize)
		return { products, maxPage }
	})).data
}

export function Filter() {
	const [title, setTitle] = useState('')
	const [timeOrder, setTimeOrder] = useState('desc')
	const [category, setCategory] = useState('any')
	const [priceOrder, setPriceOrder] = useState('any')
	const page = usePage()
	const queryClient = useQueryClient()
	const { setSearch } = useContext(FilterContext)

	useEffect(() => {
		const search: Search = {
			combine_with: 'and',
			search: [
				...(title ? [{ field: 'title', value: `%${title}%` }] : []),
				...(category !== 'any' ? [{ field: 'category', value: category, eq: true }] : [])
			],
			sort: [
				...(priceOrder !== 'any' ? [{ field: 'price', direction: priceOrder } as SortItem] : []),
				...(timeOrder !== 'any' ? [{ field: 'created_at', direction: timeOrder } as SortItem] : [])
			],
			page,
			page_size: PageSize
		}
		setSearch(search)
	}, [title, timeOrder, category, priceOrder, page, queryClient, setSearch])

	return <div className="w-full md:w-2/3 shadow p-5 rounded-lg bg-[#4A5568]">
		<div className="relative">
			<div className="absolute flex items-center ml-2 h-full">
				<svg className="w-4 h-4 fill-current text-primary-gray-dark" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
				</svg>
			</div>
			<input autoComplete="off" name="title-search" onChange={e => setTitle(e.target.value)} value={title} type="text" placeholder="Search by Title" className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" />
		</div>
		<div className="flex items-center justify-between mt-4">
			<p className="font-medium text-white">
				Filters
			</p>

		</div>
		<div>
			<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
				<select value={timeOrder} onChange={e => setTimeOrder(e.target.value)} className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
					<option value="desc">Newest</option>
					<option value="asc">Oldest</option>
					<option value="any">Any</option>
				</select>

				<select value={category} onChange={e => setCategory(e.target.value)} className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
					<option value="any">Any Category</option>
					<option value="Vehicle">Vehicle</option>
					<option value="Electronics">Electronics</option>
					<option value="Accommodation">Accommodation</option>
					<option value="Home and Family">Home and Family</option>
					<option value="Sports and Recreation">Sports and Recreation</option>
					<option value="Work and Business">Work and Business</option>
					<option value="Other">Other</option>
				</select>
				<select value={priceOrder} onChange={e => setPriceOrder(e.target.value)} className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
					<option value="any">Any Price</option>
					<option value="asc">Lowest to Highest</option>
					<option value="desc">Highest to Lowest</option>
				</select>
				<button onClick={() => {
					setPriceOrder('any')
					setTimeOrder('desc')
					setCategory('any')
					setTitle('')
				}} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
					Reset Filter
				</button>
			</div>
		</div>
	</div>
}