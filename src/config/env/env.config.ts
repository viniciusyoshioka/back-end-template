import { Environment } from './env.types.ts'


export class EnvConfig {


  static get envFilePath(): string {
    const envFilePathMap: Record<Environment, string> = {
      [Environment.DEVELOPMENT]: '.env.development',
      [Environment.TEST]: '.env.test',
      [Environment.PRODUCTION]: '.env',
    }

    return envFilePathMap[this.ENVIRONMENT]
  }


  static get ENVIRONMENT(): Environment {
    return process.env['ENVIRONMENT'] as Environment
  }

  static get PORT(): number {
    const port = process.env['PORT']
    return Number(port)
  }

  static get DATABASE_HOST(): string {
    return process.env['DATABASE_HOST'] as string
  }

  static get DATABASE_PORT(): number {
    const databasePort = process.env['DATABASE_PORT']
    return Number(databasePort)
  }

  static get DATABASE_USERNAME(): string {
    return process.env['DATABASE_USERNAME'] as string
  }

  static get DATABASE_PASSWORD(): string {
    return process.env['DATABASE_PASSWORD'] as string
  }
}
