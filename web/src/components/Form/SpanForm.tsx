
interface SpanFormProps {
  texto: string
}

const SpanForm = ({texto}: SpanFormProps) => {
  return (
    <span className="text-red-600">{texto}</span>
  )
}

export default SpanForm