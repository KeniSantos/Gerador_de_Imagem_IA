import Cabecalho from '@/components/Cabecalho'
import FormLogin from '@/components/FormLogin'
import Paragrafo from '@/components/Paragrafo'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Cabecalho titulo="Entrar" subTitulo="Informe os dados solicitados" />
      <FormLogin />
      <Paragrafo texto="Não possui conta ?">
        <Link className="text-blue-600 font-bold" href="/registrar">
          Registrar-se
        </Link>
      </Paragrafo>
    </>
  )
}
