import { EmptyPage } from "../components/Layout"

export default function NotFound() {
  return (
    <EmptyPage>
      <div>
        <p className="text-bold text-xl"> You clicked a dead end link. </p>
      </div >
    </EmptyPage >
  )
}