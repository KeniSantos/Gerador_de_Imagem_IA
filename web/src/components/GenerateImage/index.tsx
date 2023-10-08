'use client'
import Loading from "../Loading"
import Image from 'next/image'
import seta from '@/../public/seta.svg'
import { useGenerate } from "@/hooks/useGenerate"
import image from "next/image"


const GenerateImage = () => {
  const {handleGerarImage, isLoading, image} = useGenerate()

  return (
    <div className="overflow-hidden flex items-center justify-center md:w-[400px] md:h-[400px] bg-gray-800/20 rounded-[30px] w-[320px] h-[320px] relative">
      {isLoading && <Loading />}
      {image && 
        <Image unoptimized src={image} width={400} height={400} alt=""/>
      }
      {!isLoading && 
        <>
          {!image && <p className="text-gray-400">Clique em gerar</p>}
          <button className="rounded-lg text-white font-bold bg-blue-600 w-[150px] h-10 absolute bottom-4" onClick={handleGerarImage}>Gerar</button>
        </>
      }
      {image &&
        <a href="" className="rounded-lg text-white font-bold bg-blue-600 w-[40px] h-10 absolute bottom-4 right-6 flex items-center justify-center cursor-pointer" download="imagemGeradaIa.png" type="image/png" target="_blank" >
          <Image priority src={seta} alt="seta" />
        </a>
      }
    </div>
  )
}

export default GenerateImage