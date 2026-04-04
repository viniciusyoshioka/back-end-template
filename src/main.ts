import { NestFactory } from '@nestjs/core'
import 'reflect-metadata'

import { EnvConfig, EnvValidator } from '@config/env/index.js'
import { AppModule } from '@modules/app.module.js'


async function bootstrap() {
  EnvValidator.assertEnvIsValid()

  const app = await NestFactory.create(AppModule)
  await app.listen(EnvConfig.PORT)
}


bootstrap()
