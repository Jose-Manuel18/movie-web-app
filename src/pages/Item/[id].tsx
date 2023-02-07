import { useRouter } from "next/router"
export default function Testing() {
  const router = useRouter()
  const { name } = router.query
  return <div className="text-body">{name}</div>
}
