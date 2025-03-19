import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Link href="/" className="inline-block mb-6">
            <Image
              src="/logo.svg"
              alt="Jiva.ai Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>
          <div className="mt-4">
            <Image
              src="/certification.svg"
              alt="Certification Badge"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4 text-gray-400">COMPANY</h3>
          <ul className="space-y-3">
            <li><Link href="#" className="hover:text-blue-300 transition-colors">Platform</Link></li>
            <li><Link href="#" className="hover:text-blue-300 transition-colors">Why Jiva.ai?</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4 text-gray-400">RESOURCES</h3>
          <ul className="space-y-3">
            <li><Link href="#" className="hover:text-blue-300 transition-colors">Case studies</Link></li>
            <li><Link href="#" className="hover:text-blue-300 transition-colors">Blogs</Link></li>
            <li><Link href="#" className="hover:text-blue-300 transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}