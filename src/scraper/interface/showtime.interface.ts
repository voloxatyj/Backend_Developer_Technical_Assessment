import { ApiProperty } from '@nestjs/swagger';

export class ShowtimeInterface {
	@ApiProperty({
		example: "0009-170678",
	})
	showtimeId: string;
	@ApiProperty({
		example: "Al Hamra Mall - Ras Al Khaimah",
	})
	cinemaName: string;
	@ApiProperty({
		example: "Taylor Swift: The Eras Tour",
	})
	movieTitle: string;
	@ApiProperty({
		example: "2023-11-03T17:30:00Z",
	})
	showtimeInUTC: string;
	@ApiProperty({
		example: "https://uae.voxcinemas.com/booking/0009-170678",
	})
	bookingLink: string;
	@ApiProperty({
		example: ["Standard"],
	})
	attributes: string[];
}
