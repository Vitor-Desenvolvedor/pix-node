import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';
import { StudantsService } from './students/students.service';

@Controller()
export class AppController {

  constructor(private readonly StudentsService: StudantsService,){

  
 }
}
