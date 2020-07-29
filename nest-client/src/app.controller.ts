import { Controller, Get } from '@nestjs/common';
import { IGrpcService } from './grpc.interface';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { microserviceOptions } from './grpc.options';

@Controller()
export class AppController {

  @Client(microserviceOptions)
  private client: ClientGrpc;
  private grpcService: IGrpcService;

  onModuleInit() {
    this.grpcService = this.client.getService<IGrpcService>('AppController'); 
  }   

  @Get()
  getHello() {
    console.log("in");

    return this.grpcService.getHello({id: "123"});
  }
}
