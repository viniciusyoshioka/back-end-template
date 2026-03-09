import { DataSource } from 'typeorm'

import { EnvConfig } from '@config/env'


// TODO: Finish configuration https://typeorm.io/docs/drivers/postgres/#installation
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

  migrationsRun: false,
  poolSize: 32,

  synchronize: false,
  logging: false,
})
