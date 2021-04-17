
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type EntryDocument = Entry & Document

@Schema()
export class Entry {
    @Prop({ required: true })
    key: string

    @Prop({ required: true })
    value: string

    @Prop({ 
        required: true,
        default: Date.now,
        index: { expires: '5m' },
     })
    expireAt: Date
}

export const CacheSchema = SchemaFactory.createForClass(Entry)
