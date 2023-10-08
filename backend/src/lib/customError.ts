

class CustomError extends Error {
  constructor(message?: string, public status?: number){
    super()

    Error.captureStackTrace(this)

    this.name = this.constructor.name

    this.message = message || "Erro interno"

    this.status = status || 500
  }
}

export { CustomError }