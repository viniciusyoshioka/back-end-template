import { isEnum, isInt } from 'class-validator'

import { Environment } from './env.types.ts'


export class EnvValidator {


  static assertEnvIsValid(): void {
    try {
      this.assertEnvironmentEnvIsValid()
      this.assertPortEnvIsValid()
    } catch (error) {
      console.error(error)
      throw error
    }
  }


  private static assertEnvironmentEnvIsValid(): void {
    const environment = process.env['ENVIRONMENT']

    if (typeof environment !== 'string') {
      throw new Error('Env "ENVIRONMENT" is required')
    }

    const isValid = isEnum(environment, Environment)
    if (!isValid) {
      throw new Error(`Value ${environment} is invalid for "ENVIRONMENT" env`)
    }
  }

  private static assertPortEnvIsValid(): void {
    const port = process.env['PORT']

    if (typeof port !== 'string') {
      throw new Error('Env "PORT" is required')
    }

    const isValid = isInt(port)
    if (isValid) {
      throw new Error(`Value ${port} is invalid for "PORT" env`)
    }
  }
}
