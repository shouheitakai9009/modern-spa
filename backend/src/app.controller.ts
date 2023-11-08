import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('books')
  books() {
    return [
      { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
      { title: 'The DaVinci Code', author: 'Dan Brown' },
      { title: 'Angels & Demons', author: 'Dan Brown' },
    ];
  }
}
