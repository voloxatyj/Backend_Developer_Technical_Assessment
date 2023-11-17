import { ShowtimeEntity } from './entity/showtime.entity';
import { DataSource, Repository } from 'typeorm';
import { ShowtimeSummaryEntity } from './entity/showtimeSummary.entity';
import { ShowtimeInterface } from 'src/scraper/interface/showtime.interface';
export declare class ShowtimeService {
    private showtimeEntityRepository;
    private showtimeSummaryEntityRepository;
    private dataSource;
    constructor(showtimeEntityRepository: Repository<ShowtimeEntity>, showtimeSummaryEntityRepository: Repository<ShowtimeSummaryEntity>, dataSource: DataSource);
    private updateShowtimeSummary;
    addShowtimes(showtimes: ShowtimeInterface[]): Promise<void>;
}
