import { Injectable } from '@angular/core';
import { from, map, Observable, of, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ExampleGateway } from '../../domain/gateway/example-gateway';
import { ExampleInfor } from '../../domain/entities/exampleInfor';
import { BaseResponse } from '../../domain/entities/base-response';

@Injectable()
export class ExampleApiService extends ExampleGateway {

  constructor() { super(); }

  postExampleInfo(data: ExampleInfor): Observable<BaseResponse> {
    const ExampleInfo = [
      {message:'Se almacenaron correctamente los datos registrados', result:0}
    ]
    const result = from(ExampleInfo);
    localStorage.setItem('itemsArray', JSON.stringify(data));
    return result;
  }

}
