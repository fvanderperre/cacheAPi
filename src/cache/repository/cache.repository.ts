import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { EntryDTO } from '../cache.model'
import { Entry, EntryDocument } from './cache.schema'

@Injectable()
export class CacheRepository {
  constructor(@InjectModel(Entry.name) private cacheModel: Model<EntryDocument>) { }

  create = (entry: EntryDTO): Promise<Entry> => {
    const createdEntry = new this.cacheModel(entry)
    return createdEntry.save()
  }

  get = (key: string): Promise<Entry> =>
    this.cacheModel.findOne({ key }).exec()

  getAll = (): Promise<Entry[]> => this.cacheModel.find().exec()

  createOrUpdate = ({ key, value }: EntryDTO): Promise<Entry> =>
    this.cacheModel.findOneAndUpdate({ key },
      {
        key,
        value,
        expireAt: new Date(),
      }, {
      upsert: true,
      useFindAndModify: false,
      new: true,
    }).exec()

  delete = (key: string): Promise<{ deletedCount?: number }> =>
    this.cacheModel.deleteOne({ key }).exec()


  deleteAll = (): Promise<{ deletedCount?: number }> =>
    this.cacheModel.deleteMany({}).exec()

  updateTTL = ({ key, value }: EntryDTO): Promise<Entry> =>
    this.createOrUpdate({ key, value })
  // FIXME find another way to do that

}
