import Link from "next/link";
import Image from "next/image";

export const WelcomePage = () => {
  return (
    <div className="min-h-screen flex flex-col gap-2">
      <nav className="flex items-center justify-between h-full w-full p-4 bg-emerald-100 rounded-md shadow-lg">
      <div className="flex items-center gap-3 shrink-0 pr-6">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={60} height={60} />
        </Link>
        <h3 className="text-xl">Cloud Quill</h3>
      </div>
    </nav>
    
    <main className="flex-1 flex flex-col justify-center gap-4 ml-4 context">
      <h1 className="text-4xl font-bold">Welcome to Cloud Quill</h1>
      <p className="text-muted-foreground text-lg">Get started by creating a new document.</p>
      <p className="text-muted-foreground text-lg">Sign in to get started</p>
      
    </main>
    </div>
  )
}