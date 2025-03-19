import Image from "next/image"

export default function WorkflowDiagram() {
  return (
    <div className="relative">
      <Image
        src="/workflow-diagram.svg"
        alt="Jiva.ai Workflow Diagram"
        width={600}
        height={300}
        className="w-full"
      />
    </div>
  )
}