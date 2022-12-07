import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsRoutingModule } from './infraestructure/example-routing.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ExampleGateway } from './domain/gateway/example-gateway';
import { MatRadioModule } from '@angular/material/radio';
import { ExampleComponent } from './ui/view-models/example/example.component';
import { ExampleApiService } from './infraestructure/example-api/example-api.service';
import { ExampleUseCases } from './domain/usecase/request-use-case';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '../shared/shared.module';
import { MatDialog } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    StepsRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,  
    MatSelectModule,
    MatRadioModule,
    SharedModule,
  ],
  exports:[ExampleComponent],
  providers:[
    FormBuilder,
    ExampleUseCases,
    {provide: ExampleGateway, useClass: ExampleApiService}
  ]
})
export class ExampleModule { }
