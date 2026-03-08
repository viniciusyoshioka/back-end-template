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

  static get PORT(): string {
    return process.env['PORT'] as string
  }
}
