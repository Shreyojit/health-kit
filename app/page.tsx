import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FeatureCard from "../components/feature-card";
import HowItWorks from "../components/how-it-works";
import PartnerLogos from "../components/partner-logos";
import WorkflowDiagram from "../components/workflow-diagram";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-300 via-teal-300 to-green-300 py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            AI and automations
            <br />
            made easy
          </h1>
          <p className="text-xl text-gray-800 mb-8">Create, evaluate and deploy AI - code not required</p>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-6 text-lg">
            Book a demo
          </Button>

          <div className="mt-16 max-w-4xl mx-auto bg-white/20 backdrop-blur-sm p-6 rounded-xl shadow-lg">
            <WorkflowDiagram />
          </div>
        </div>
      </section>

      {/* What is Jiva.ai Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-green-600 font-medium mb-2">WHAT IS JIVA.AI?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A zero-code platform for rapid multimodal AI development
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Whether you are working with imaging, video, text, audio or structured data &ndash; Jiva.ai will be your
                constant companion on your AI journey. Manage your organisation&apos;s entire AI requirements from start to
                finish. Connect multiple data verticals together to create meaningful, multimodal insights. Democratise
                access to data science and AI skills with your existing team.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <Image
                src="/placeholder.svg"
                alt="Jiva.ai Platform Interface"
                width={600}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-green-600 font-medium mb-2">FEATURES</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Jiva makes AI easy</h3>
          </div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Science and Automations Assistant</h3>
                <p className="text-gray-700 text-lg">
                  Engineer data and AI with ease. Jiva&apos;s assistant walks you through the design process, step by step.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
                <Image
                  src="/placeholder.svg"
                  alt="AI Assistant Interface"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              title="Next Generation AutoML"
              description="Train and test 1000s of models to arrive at the best possible solution for you and your data."
              bgColor="from-green-50 to-green-100"
              imageSrc="/placeholder.svg"
            />
            <FeatureCard
              title="Multimodal AI"
              description="Merge multiple AI models together to create bigger, better AIs over time."
              bgColor="from-orange-50 to-orange-100"
              imageSrc="/placeholder.svg"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-green-600 font-medium mb-2">HOW IT WORKS</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Design your solution with ease</h3>
          </div>

          <HowItWorks />
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <PartnerLogos />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-blue-300 via-teal-300 to-green-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your AI Building Assistant.</h2>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Whether you are working within images, video, text, audio or unstructured data &ndash; Jiva.ai will be your
            constant companion on your AI journey.
          </p>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-6 text-lg">
            Book a demo
          </Button>
        </div>
      </section>

      {/* Recent Blogs Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-green-600 font-medium mb-2">RECENT BLOGS</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">AIs created by our partners and clients</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt="Blog post"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="font-bold text-xl mb-2">Case Study Title</h4>
                  <p className="text-gray-600 mb-4">Short description of the case study or blog post...</p>
                  <Link href="#" className="text-green-600 font-medium flex items-center">
                    Read more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" className="rounded-full px-8">
              View all
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
