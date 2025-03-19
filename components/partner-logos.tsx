import Image from "next/image"

export default function PartnerLogos() {
  const partners = Array(6).fill(null).map((_, i) => ({
    name: `Partner ${i + 1}`,
    logo: `/partner-${i + 1}.svg`
  }))

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
      {partners.map((partner, index) => (
        <div key={index} className="w-32 h-16 relative">
          <Image
            src={partner.logo}
            alt={partner.name}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  )
}