'use client'
import Image from 'next/image'
import file from '@/../public/file.svg'
import Loading from '../Loading'
import { useUpload } from '@/hooks/useUpload'
import { useState } from 'react'

const UploadImage = () => {
  const [image, setImage] = useState<string | null>(null)
  const {handleEnviarImage, isLoading} = useUpload()

  return (
    <form className="relative" onSubmit={(event) => handleEnviarImage(event)}>
      <label htmlFor="imagem" className="flex items-center justify-center md:w-[400px] md:h-[400px] bg-gray-800/20 rounded-[30px] border-dashed border border-gray-400 w-[320px] h-[320px] cursor-pointer">
        <div>
          <div className="flex gap-3 bg-gray-800/40 h-16 md:w-[340px] w-[290px] items-center justify-center rounded-md">
            {image && 
              <>
              <div className="h-12 w-12 border-dashed border border-blue-600 flex items-center justify-center rounded-lg bg-blue-600/20">
                <Image src={file} alt="Não foi encontrado" />
              </div>
              <p className="md:w-[250px] w-[200px] truncate text-gray-400 font-bold">{image}</p>
              </>
            }
            {!image && <p className="text-gray-400">Clique aqui para selecionar a imagem</p>}
          </div>
        </div>
      </label>
      <input id="imagem" name="image" type="file" className="sr-only" accept="image/png" onChange={(e) => setImage(e.target.files[0]?.name)} />
        <div className="absolute bottom-4 w-full flex justify-center">
          {isLoading && <Loading />}
          {!isLoading && 
            <button className="rounded-lg text-white font-bold bg-blue-600 w-[150px] h-10">Enviar</button>
          }
        </div>  
    </form>
  )
}

export default UploadImage