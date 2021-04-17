import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common'
import { CacheService } from './cache.service'

@Controller('cache')
export class CacheController {
  constructor(private readonly cacheService: CacheService) { }

  @Get('/entry/:key')
  get(
    @Param('key') key: string,
  ) {
    return this.cacheService.get(key)
  }

  @Get('/entries')
  getAll() {
    return this.cacheService.getAll()
  }

  @Put('/entry/:key')
  createOrUpdate(
    @Param('key') key: string,
    @Body() value: any,
  ) {
    return this.cacheService.createOrUpdate(key, value)
  }

  @Delete('/entry/:key')
  delete(
    @Param('key') key: string,
  ) {
    return this.cacheService.delete(key)
  }

  @Delete('/entries')
  deleteAll() {
    return this.cacheService.deleteAll()
  }

}
