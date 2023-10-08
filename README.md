
# Gerar variação de imagem com IA

![imagem-dektop](https://github.com/KeniSantos/Gerador_de_Imagem_IA/assets/66180684/5ea39bd6-a249-436b-9476-7ed85248252b)


## Tecnologias

Lista de tecnologias utilizadas no projeto:

* [React](https://react.dev/)
* [Next.js](https://nextjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Express](https://expressjs.com/)
* [JWT Token](https://jwt.io/)
## Executando

Web
```bash
  cd web
  npm install
  npm run dev
```
Estará rodando no endereço [http://localhost:3000](http://localhost:3000)

Backend
```bash
  cd Backend
  npm install
  npx prisma migrate dev
  npm run dev
```
para o backend é preciso inserir na raiz do projeto um arquivo .env com as seguintes variáveis:
```bash
  DATABASE_URL=""
  PRIVATE_KEY=""
  PRIVATE_KEY_TOKEN=""
```
Por padrão o prisma está com sqlite sendo necessário apenas configurar a pasta onde o .db será criado, a PRIVATE_KEY é o token de acesso a api do [OpenAI](https://openai.com/) e a PRIVATE_KEY_TOKEN é a secret key para geração do JWT.


## Sobre o projeto

O projeto utiliza a API da OpenAI para gerar uma variação da imagem que foi fei upload pelo usuário, disponibilizando a opção para o usuário baixar.

