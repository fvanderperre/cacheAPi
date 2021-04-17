import { Module } from '@nestjs/common'
import { CacheController } from './cache.controller'
import { CacheRepository } from './cache.repository'
import { CacheService } from './cache.service'

@Module({
    imports: [],
    controllers: [CacheController],
    providers: [
        CacheService,
        CacheRepository,
    ],
})
export class CacheModule { }
