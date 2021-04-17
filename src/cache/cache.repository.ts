import { Injectable } from '@nestjs/common'

@Injectable()
export class CacheRepository {

  getHello(): string {
    return 'Hello World!'
  }
  
}
