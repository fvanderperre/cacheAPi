import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { LoggerModule } from 'nestjs-pino'
import { CacheController } from './cache.controller'
import { CacheRepository } from './repository/cache.repository'
import { CacheService } from './cache.service'
import { CacheSchema, Entry } from './repository/cache.schema'

@Module({
    imports: [
        LoggerModule.forRoot(),
        MongooseModule.forFeature([{ name: Entry.name, schema: CacheSchema }]),
    ],
    controllers: [CacheController],
    providers: [
        CacheService,
        CacheRepository,
    ],
})
export class CacheModule { }
