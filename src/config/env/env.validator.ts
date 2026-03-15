import { isEnum, isInt } from 'class-validator'

import { Environment } from './env.types.ts'


export class EnvValidator {


  static assertEnvIsValid(): void {
    try {
      this.assertEnvironmentEnvIsValid()
      this.assertPortEnvIsValid()
      this.assertDatabaseHostEnvIsValid()
      this.assertDatabasePortEnvIsValid()
      this.assertDatabaseUsernameEnvIsValid()
      this.assertDatabasePasswordEnvIsValid()
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
      throw new Error(`Value "${environment}" is invalid for "ENVIRONMENT" env`)
    }
  }

  private static assertPortEnvIsValid(): void {
    const port = process.env['PORT']
    const portAsNumber = Number(port)

    if (typeof port !== 'string') {
      throw new Error('Env "PORT" is required')
    }

    const isValid = isInt(portAsNumber)
    if (!isValid) {
      throw new Error(`Value "${port}" is invalid for "PORT" env`)
    }
  }

  private static assertDatabaseHostEnvIsValid(): void {
    const databaseHost = process.env['DATABASE_HOST']

    if (typeof databaseHost !== 'string') {
      throw new Error('Env "DATABASE_HOST" is required')
    }

    const isValid = !!databaseHost.length
    if (!isValid) {
      throw new Error(`Value "${databaseHost}" is invalid for "DATABASE_HOST" env`)
    }
  }

  private static assertDatabasePortEnvIsValid(): void {
    const databasePort = process.env['DATABASE_PORT']
    const databasePortAsNumber = Number(databasePort)

    if (typeof databasePort !== 'string') {
      throw new Error('Env "DATABASE_PORT" is required')
    }

    const isValid = isInt(databasePortAsNumber)
    if (!isValid) {
      throw new Error(`Value "${databasePort}" is invalid for "DATABASE_PORT" env`)
    }
  }

  private static assertDatabaseUsernameEnvIsValid(): void {
    const databaseUsername = process.env['DATABASE_USERNAME']

    if (typeof databaseUsername !== 'string') {
      throw new Error('Env "DATABASE_USERNAME" is required')
    }

    const isValid = !!databaseUsername.length
    if (!isValid) {
      throw new Error(
        `Value "${databaseUsername}" is invalid for "DATABASE_USERNAME" env`,
      )
    }
  }

  private static assertDatabasePasswordEnvIsValid(): void {
    const databasePassword = process.env['DATABASE_PASSWORD']

    if (typeof databasePassword !== 'string') {
      throw new Error('Env "DATABASE_PASSWORD" is required')
    }

    const isValid = !!databasePassword.length
    if (!isValid) {
      throw new Error(
        `Value "${databasePassword}" is invalid for "DATABASE_PASSWORD" env`,
      )
    }
  }
}
