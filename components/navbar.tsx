import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-blue-300 via-teal-300 to-green-300 py-4 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Jiva.ai Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {['Platform', 'Why Jiva', 'Team', 'Blog', 'Case Studies', 'Contact us'].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-gray-800 hover:text-gray-900 font-medium"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="#" className="text-gray-800 hover:text-gray-900 font-medium hidden md:inline-block">
            Sign Up / Log In
          </Link>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full">Book a demo</Button>
        </div>
      </div>
    </header>
  )
}