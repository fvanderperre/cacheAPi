import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common'
import { EntryDTO } from './cache.model'
import { CacheService } from './cache.service'

@Controller('cache')
export class CacheController {
  constructor(private readonly cacheService: CacheService) { }

  @Get('/entry/:key')
  get(
    @Param('key') key: string,
  ): Promise<string> {
    return this.cacheService.get(key)
  }

  @Get('/entries')
  getAll(): Promise<EntryDTO[]> {
    return this.cacheService.getAll()
  }

  @Put('/entry')
  createOrUpdate(
    @Param('key') key: string,
    @Body() entry: EntryDTO
  ): Promise<EntryDTO> {
    return this.cacheService.createOrUpdate(entry)
  }

  @Delete('/entry/:key')
  delete(
    @Param('key') key: string,
  ): Promise<number> {
    return this.cacheService.delete(key)
  }

  @Delete('/entries')
  deleteAll(): Promise<number> {
    return this.cacheService.deleteAll()
  }

}
