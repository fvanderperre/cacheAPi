import { Injectable } from '@nestjs/common'
import { CacheRepository } from './cache.repository'

@Injectable()
export class CacheService {

  constructor(private readonly cacheRepository: CacheRepository) { }


  getHello(): string {
    return this.cacheRepository.getHello()
  }
}
