import { Injectable } from '@nestjs/common'
import { Logger } from 'nestjs-pino'
import { EntryDTO } from './cache.model'
import { CacheRepository } from './cache.repository'
import { Entry } from './cache.schema'

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
          this.logger.log('Cache hit')
          return entry.value
        }
        this.logger.log('CacheMiss')
        return this.generateNewEntry(key)

      })

  private generateRandomString = (): string => 'fixme' + Math.random()

  private generateNewEntry = (key: string): string => {
    const value = this.generateRandomString()
    this.cacheRepository.create({ key, value })
    return value
  }

  getAll = (): Promise<EntryDTO[]> =>
    this.cacheRepository.getAll()
      .then((entries: Entry[]) =>
        entries.map(({ key, value }) => ({ key, value }))
      )

  createOrUpdate = (entry: EntryDTO): Promise<any> =>
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
