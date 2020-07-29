import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GrpcMethod } from '@nestjs/microservices';
import { GetSchoolInfo } from './commands/getSchoolInfo.command';
import { GetSchoolInfoQuery } from './queries/impl/get-school.query';

interface IInputParam {
  id: string;
}

interface IStringMessage {
  msg: string;
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
    ) {}

  @GrpcMethod('AppController', 'getHello')
  async getHello(inPara: IInputParam): Promise<IStringMessage> {
    console.log("in back");
    this.commandBus.execute(new GetSchoolInfo(inPara.id));
    let re = await this.queryBus.execute(new GetSchoolInfoQuery());
    console.log(re);
    return {msg: re};
  }
}


