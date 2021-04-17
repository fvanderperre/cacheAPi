import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CacheModule } from './cache/cache.module';

@Module({
  imports: [
    CacheModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
