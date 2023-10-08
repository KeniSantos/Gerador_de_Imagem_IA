import { generateImage } from "@/services/image"
import { useState } from "react"
import toast from "react-hot-toast"


export const useGenerate = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [image, setImage] = useState<string>('')

  async function handleGerarImage(){
    setIsLoading(true)
    await generateImage()
      .then((image) => setImage(image))
      .catch((err) => {
        if(err.response?.data.message){
          return toast.error(`${err.response.data.message}`)
        }
        toast.error('Ocorreu um erro na solicitação')
      })
      .finally(() => setIsLoading(false))
  }

  return {handleGerarImage, isLoading, image}
}