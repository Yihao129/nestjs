import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { GetSchoolInfoQuery } from '../impl';

@QueryHandler(GetSchoolInfoQuery)
export class GetSchoolInfoQueryHandler implements IQueryHandler<GetSchoolInfoQuery> {

  async execute(query: GetSchoolInfoQuery) {
    console.log(clc.yellowBright('Query excuted...'));

    return "School 1";
  }
}
