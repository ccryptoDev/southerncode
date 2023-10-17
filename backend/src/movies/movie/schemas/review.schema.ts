import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class MovieReview extends Document {
  @Prop()
  tmdb_id: number;

  @Prop()
  author: string;

  @Prop()
  content: string;

  @Prop()
  rating: number;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;

  @Prop()
  tmdbId: number;

  @Prop()
  authorDetails: {
    name: string;
    username: string;
    avatarPath: string;
    rating: number;
  };

  @Prop()
  url: string;
}

export const MovieReviewSchema = SchemaFactory.createForClass(MovieReview);

