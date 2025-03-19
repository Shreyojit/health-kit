import Image from "next/image"

export default function HowItWorks() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex gap-6">
            <div className="text-green-600 font-bold text-xl">0{step}</div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {step === 1 && 'Explore'}
                {step === 2 && 'Create'}
                {step === 3 && 'Deploy'}
              </h3>
              <p className="text-gray-700">
                {step === 1 && 'Your data to understand how you can use it to accomplish your AI requirements.'}
                {step === 2 && 'Build your AI solution with our intuitive interface. No coding required.'}
                {step === 3 && 'Take your AI from prototype to production with just a few clicks.'}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
        <Image
          src="/workflow.svg"
          alt="Data visualization"
          width={500}
          height={400}
          className="rounded-lg w-full"
        />
      </div>
    </div>
  )
}