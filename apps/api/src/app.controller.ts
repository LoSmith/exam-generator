import { Controller, Get } from "@nestjs/common";

import { Message } from "@exam-generator/api-interfaces";

import { AppService } from "./app.service";

@Controller('root')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("")
  getData(): Message {
    return this.appService.root();
  }
}
