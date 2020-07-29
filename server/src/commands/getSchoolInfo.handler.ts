import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { GetSchoolInfo } from './getSchoolInfo.command';

@CommandHandler(GetSchoolInfo)
export class GetSchoolInfoHandler implements ICommandHandler<GetSchoolInfo> {
  constructor(
  ) {}

  async execute(command: GetSchoolInfo) {
    console.log(clc.greenBright('get school info handler excuting...'));
  }
}
