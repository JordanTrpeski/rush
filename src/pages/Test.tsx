import { useParams } from "react-router-dom"
import { EmptyPage } from "../components/Layout"

export default function Test() {
  const params = useParams()
  return <EmptyPage>
    {params['id']}
  </EmptyPage>
}
