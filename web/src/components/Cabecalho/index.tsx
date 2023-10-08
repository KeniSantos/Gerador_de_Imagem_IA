interface CabecalhoProps {
  titulo: string;
  subTitulo: string;
}

const Cabecalho = ({ titulo, subTitulo }: CabecalhoProps) => {
  return (
    <>
      <h1 className="text-white font-bold text-2xl">{titulo}</h1>
      <p className="text-gray-400">{subTitulo}</p>
    </>
  );
};

export default Cabecalho;
