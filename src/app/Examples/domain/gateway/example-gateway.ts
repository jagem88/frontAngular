import { Observable } from 'rxjs';
import { BaseResponse } from '../entities/base-response';
import { ExampleInfor } from '../entities/exampleInfor';


export abstract class ExampleGateway {

    abstract postExampleInfo(data: ExampleInfor): Observable<BaseResponse>;

}


