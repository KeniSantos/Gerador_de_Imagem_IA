import api from './api'

export async function uplaodImage(image: FormData){
  await api.post('/image/upload', image)
}

export async function generateImage(){
  const {data} = await api.get('/image/variation')

  return data.variation[0].url
}