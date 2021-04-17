import { Injectable } from '@nestjs/common';
import { CacheRepository } from './cache.repository';

@Injectable()
export class CacheService {

  constructor(private readonly cacheRepository: CacheRepository) { }

    get(key: string): any {
    return 'fixme';
  }

  getAll(): Array<any> {
    return []
  }

  createOrUpdate(key: string, value: any): void {
    console.log('key,', key, 'value', value)
  }

  delete(key: string): void {

  }

  deleteAll(): void {

  }

}
