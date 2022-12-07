import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExampleGateway } from '../gateway/example-gateway';
import { ExampleInfor } from '../entities/exampleInfor';
import { BaseResponse } from '../entities/base-response';

@Injectable()
export class ExampleUseCases {
  constructor( private _exampleGateWay: ExampleGateway) {}

  PostExampleInfo(data: ExampleInfor): Observable<BaseResponse> {
    return this._exampleGateWay.postExampleInfo(data);
  }

}
