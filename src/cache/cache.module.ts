import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { LoggerModule } from 'nestjs-pino'
import { CacheController } from './cache.controller'
import { CacheRepository } from './cache.repository'
import { CacheSchema, Entry } from './cache.schema'
import { CacheService } from './cache.service'

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
