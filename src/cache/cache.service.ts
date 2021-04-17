import { Injectable } from '@nestjs/common'
import { Logger } from 'nestjs-pino'
import { CacheRepository } from './cache.repository'

@Injectable()
export class CacheService {

  constructor(
    private readonly cacheRepository: CacheRepository,
    private readonly logger: Logger
  ) { }

  get(key: string): any {
    const entry = this.cacheRepository.get(key)

    if (entry != null) {
      this.logger.log('Cache hit')
      return entry
    }
    this.logger.log('CacheMiss')
    return this.generateNewEntry(key)
  }

  private generateRandomString = (): string => 'fixme'

  private generateNewEntry = (key: string): string => {
    const newEntry = this.generateRandomString()
    this.cacheRepository.createOrUpdate(key, newEntry)
    return newEntry
  }

  getAll = (): Array<any> => this.cacheRepository.getAll()

  createOrUpdate = (key: string, value: any): void => this.cacheRepository.createOrUpdate(key, value)

  delete = (key: string): void => this.cacheRepository.delete(key)

  deleteAll = (): void => this.cacheRepository.deleteAll()

}
