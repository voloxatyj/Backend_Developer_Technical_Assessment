import { ApiProperty } from '@nestjs/swagger';
import { ShowtimeInterface } from './showtime.interface';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

export class WebsiteData {
	@ApiProperty()
	title: string;
	@ApiProperty()
	metaDescription: string;
	@ApiProperty()
	faviconUrl: string;
	@ApiProperty()
	scriptUrls: string[];
	@ApiProperty()
	stylesheetUrls: string[];
	@ApiProperty()
	imageUrls: string[];
	@ApiProperty({
		type: ShowtimeInterface,
		isArray: true,
	})
	@ValidateNested({ each: true })
	@Type(() => ShowtimeInterface)
	showtimes: ShowtimeInterface[];
}
