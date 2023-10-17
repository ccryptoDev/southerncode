import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class MovieDetail extends Document {
  @Prop()
  adult: boolean;

  @Prop()
  backdrop_path: string;

  @Prop()
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };

  @Prop()
  budget: number;

  // @Prop([{ type: { id: Number, name: String } })] // Array of genres
  // genres: { id: number; name: string }[];

  @Prop()
  homepage: string;

  @Prop()
  id: number;

  @Prop()
  imdb_id: string;

  @Prop()
  original_language: string;

  @Prop()
  original_title: string;

  @Prop()
  overview: string;

  @Prop()
  popularity: number;

  @Prop()
  poster_path: string;

  @Prop([{ type: { id: Number, logo_path: String, name: String, origin_country: String } }]) // Array of production companies
  production_companies: { id: number; logo_path: string; name: string; origin_country: string }[];

  @Prop([{ type: { iso_3166_1: String, name: String } }]) // Array of production countries
  production_countries: { iso_3166_1: string; name: string }[];

  @Prop()
  release_date: string;

  @Prop()
  revenue: number;

  @Prop()
  runtime: number;

  @Prop([{ type: { english_name: String, iso_639_1: String, name: String } }]) // Array of spoken languages
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];

  @Prop()
  status: string;

  @Prop()
  tagline: string;

  @Prop()
  title: string;

  @Prop()
  video: boolean;

  @Prop()
  vote_average: number;

  @Prop()
  vote_count: number;
}

export const MovieDetailSchema = SchemaFactory.createForClass(MovieDetail);
