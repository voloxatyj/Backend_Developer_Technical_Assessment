import { Module } from '@nestjs/common';
import { ScraperModule } from './scraper/scraper.module';
import { ShowtimeModule } from './showtime/showtime.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

import * as Joi from "joi";

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: ".env",
			isGlobal: true,
			validationSchema: Joi.object({
				PORT: Joi.number().required(),
				DB_TYPE: Joi.string().required(),
				DB_HOST: Joi.string().required(),
				DB_PORT: Joi.number().required(),
				DB_USERNAME: Joi.string().required(),
				DB_PASSWORD: Joi.string().required(),
				DB_DATABASE: Joi.string().required(),
			}),
		}),
		DatabaseModule,
		ScraperModule,
		ShowtimeModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
