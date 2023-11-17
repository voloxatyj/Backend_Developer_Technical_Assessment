import { ApiProperty } from '@nestjs/swagger';
import { Matches } from 'class-validator';

export class ScraperRequestDto {
	@ApiProperty({
		description: "Website Url",
		required: true,
		example: "https://uae.voxcinemas.com/showtimes",
	})
	//TODO: Implement validation for the 'url' field to ensure it contains a valid URL format.
	// Ensure to handle edge cases, such as trailing slash consistency, allowed protocols (http, https)
	@Matches(
		"(https://www.|http://www.|https://|http://)?[a-zA-Z0-9]{2,}(.[a-zA-Z0-9]{2,})(.[a-zA-Z0-9]{2,})?",
	)
	url: string;
	@ApiProperty({
		description: "ShowTime Date",
		required: false,
		example:
			"https://uae.voxcinemas.com/showtimes?c=al-hamra-mall-ras-al-khaimah&d=20231103",
	})
	d?: string;
}
