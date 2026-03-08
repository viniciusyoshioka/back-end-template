import type { Environment } from './env.types.ts'


export class EnvConfig {
  static get ENVIRONMENT(): Environment {
    return process.env['ENVIRONMENT'] as Environment
  }

  static get PORT(): string {
    return process.env['PORT'] as string
  }
}
