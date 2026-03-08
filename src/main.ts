import { NestFactory } from '@nestjs/core'

import { EnvConfig, EnvValidator } from '@config/env'
import { AppModule } from '@modules/app.module'


async function bootstrap() {
  EnvValidator.assertEnvIsValid()

  const app = await NestFactory.create(AppModule)
  await app.listen(EnvConfig.PORT)
}


bootstrap()
