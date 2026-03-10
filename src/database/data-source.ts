import { DataSource } from 'typeorm'

import { EnvConfig } from '@config/env'


const applicationName = 'application-name'
const connectTimeoutMS = 1000 * 10


export const AppDataSource = new DataSource({
  type: 'postgres',

  host: EnvConfig.DATABASE_HOST,
  port: EnvConfig.DATABASE_PORT,
  username: EnvConfig.DATABASE_USERNAME,
  password: EnvConfig.DATABASE_PASSWORD,

  entities: [
    'src/modules/**/*.entity.ts',
  ],
  migrations: [
    'src/database/migrations/**/*.ts',
  ],

  applicationName,
  connectTimeoutMS,
  migrationsRun: false,
  poolSize: 32,

  synchronize: false,
  logging: false,
})
