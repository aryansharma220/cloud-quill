import Link from "next/link";
import Image from "next/image";
import { SearchInput } from "./search-input";
import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-full w-full">
      <div className="flex items-center gap-3 shrink-0 pr-6">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
        </Link>
        <h3 className="text-xl">Cloud Quill</h3>
      </div>
      <SearchInput/>
      <UserButton/>
    </nav>
  )
}