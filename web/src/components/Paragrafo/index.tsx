interface ParagrafoProps {
  texto: string;
  children: React.ReactNode;
}

const Paragrafo = ({ texto, children }: ParagrafoProps) => {
  return (
    <p className="text-white text-sm text-center mt-2">
      {texto} {children}
    </p>
  );
};

export default Paragrafo;