
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EntryDocument = Entry & Document;

@Schema()
export class Entry {
    @Prop({ required: true })
    key: string;

    @Prop({ required: true })
    value: string;
}

export const CacheSchema = SchemaFactory.createForClass(Entry);
