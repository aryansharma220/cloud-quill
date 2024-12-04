import { Button } from "@/components/ui/button"
import Link from "next/link"


const Home = () => {
  return(
    <div className="flex justify-center items-center min-h-screen bg-violet-200">
      Click <Link href="/documents/123"><Button>here</Button></Link>
    </div>
  )
}

export default Home