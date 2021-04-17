import { Controller, Get } from '@nestjs/common'
import { CacheService } from './cache.service'

@Controller('cache')
export class CacheController {
  constructor(private readonly appService: CacheService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }
}
