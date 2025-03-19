import Image from "next/image"

interface FeatureCardProps {
  title: string
  description: string
  bgColor: string
  imageSrc: string
}

export default function FeatureCard({ title, description, bgColor, imageSrc }: FeatureCardProps) {
  return (
    <div className={`bg-gradient-to-br ${bgColor} rounded-xl p-6 shadow-sm`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 mb-6">{description}</p>
      <div className="bg-white/50 rounded-lg p-4">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={250}
          className="rounded-lg w-full"
        />
      </div>
    </div>
  )
}