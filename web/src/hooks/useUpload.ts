import { uplaodImage } from "@/services/image"
import { useState, FormEvent } from "react"
import toast from "react-hot-toast"


export const useUpload = () => {
  const [isLoading, setIsLoading] = useState(false)

  async function handleEnviarImage(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const formDataUrl = formData.get('image')
    
    if(formDataUrl){
      setIsLoading(true)
      const image = new FormData()
      image.set('image', formDataUrl)
      await uplaodImage(image)
        .then(() => toast.success('Imagem enviada com sucesso'))
        .catch((err) => {
          if(err.response?.data.message){
            return toast.error(`${err.response.data.message}`)
          }
          toast.error('Ocorreu um erro na solicitação')
        })
        .finally(() => setIsLoading(false))
    }
  }

  return {isLoading, handleEnviarImage}
}