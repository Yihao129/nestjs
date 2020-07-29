import { Observable } from 'rxjs';

export interface IGrpcService {
  getHello(inPara: IInputParam): Observable<any>;
}

interface IInputParam {
  id: string;
}

interface IStringMessage {
  msg: string;
}