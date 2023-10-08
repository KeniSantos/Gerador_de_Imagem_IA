import Cabecalho from "@/components/Cabecalho"
import FormRegister from "@/components/FormRegister"
import Paragrafo from "@/components/Paragrafo"
import Link from "next/link"

const registrar = () => {
  return (
    <>
      <Cabecalho titulo="Registrar" subTitulo="Informe os dados solicitados" />
      <FormRegister />
      <Paragrafo texto="Já possui conta ?">
        <Link className="text-blue-600 font-bold" href="/">
          Entrar
        </Link>
      </Paragrafo>
    </>
  )
}

export default registrar