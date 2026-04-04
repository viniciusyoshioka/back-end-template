import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { EnvConfig } from '@config/env/index.js'


const configModule = ConfigModule.forRoot({
  envFilePath: EnvConfig.envFilePath,
})


@Module({
  imports: [configModule],
  exports: [],
  providers: [],
  controllers: [],
})
export class AppModule {}
