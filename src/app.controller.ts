import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { StudantsService } from './students/students.service';

@Controller()
export class AppController {
  constructor(appService: AppService) {}

  @Get()
  getHelloController(): string {
    return this.appService.getHelloService();
  }

  @Get("Students")
  getStudents(): string[] {
    return ["Ronei","Deivid","Vinicius"];
  }

  @Get("StudentsWithO")
  getStudentsWithO(): string[] {
    return ["Ronei","Deivid","Vinicius"].filter(name => name.includes("o"));
  }
}
