import GenerateImage from '@/components/GenerateImage'
import UploadImage from '@/components/UploadImage'

const Generate = () => {

  return (
    <div className="w-screen flex items-center justify-center flex-col my-6">
      <p className="text-gray-400">As imagens geradas expiram em 1 hora</p>
      <div className="pt-6 w-screen flex justify-center gap-20 flex-wrap">
        <UploadImage />
        <GenerateImage />
      </div>
    </div>
  )
}

export default Generate