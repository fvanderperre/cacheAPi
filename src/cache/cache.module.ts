import { Module } from '@nestjs/common'
import { CacheController } from './cache.controller'
import { CacheRepository } from './cache.repository'
import { CacheService } from './cache.service'
import { LoggerModule, Logger } from 'nestjs-pino'

@Module({
    imports: [
        LoggerModule.forRoot()
    ],
    controllers: [CacheController],
    providers: [
        CacheService,
        CacheRepository,
    ],
})
export class CacheModule { }
