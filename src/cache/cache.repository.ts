import { Injectable } from '@nestjs/common'

@Injectable()
export class CacheRepository {


  get = (key: string): any => {
    return  null
  }

  getAll = (): Array<any> => {
    return []
  }

  createOrUpdate = (key: string, value: any): void => {

  }

  delete = (key: string): void => {

  }

  deleteAll = (): void => {

  }

}
