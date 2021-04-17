import { Injectable } from '@nestjs/common'
import { Logger } from 'nestjs-pino'
import { EntryDTO } from './cache.model'
import { CacheRepository } from './repository/cache.repository'
import { Entry } from './repository/cache.schema'

@Injectable()
export class CacheService {

  constructor(
    private readonly cacheRepository: CacheRepository,
    private readonly logger: Logger
  ) { }

  get = (key: string): Promise<string> =>
    this.cacheRepository.get(key)
      .then((entry: Entry) => {
        if (entry != null) {
          this.updateTTL(key, entry.value)
          return entry.value
        }
        this.logger.log('CacheMiss')
        return this.generateNewEntry(key)

      })

  private generateRandomString = (): string => 'imsoRandom' + Math.random()

  private generateNewEntry = (key: string): string => {
    // FIXME handle cache size
    const value = this.generateRandomString()
    this.cacheRepository.create({ key, value })
    return value
  }

  private updateTTL = (key: string, value: string): void => {
    this.logger.log('Cache hit')
    this.cacheRepository.updateTTL({ key, value })
  }

  getAll = (): Promise<EntryDTO[]> =>
    this.cacheRepository.getAll()
      .then((entries: Entry[]) =>
        entries.map(({ key, value }) => {
          this.cacheRepository.updateTTL({ key, value })
          return ({ key, value })
        })
      )

  createOrUpdate = (entry: EntryDTO): Promise<any> =>
  // FIXME handle cache size
    this.cacheRepository.createOrUpdate(entry)
      .then((entry: Entry) => ({
        key: entry.key,
        value: entry.value
      }))

  delete = (key: string): Promise<number> =>
    this.cacheRepository.delete(key)
      .then((res) => res.deletedCount)

  deleteAll = (): Promise<number> =>
    this.cacheRepository.deleteAll()
      .then((res) => res.deletedCount)

}
