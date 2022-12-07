import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from '../ui/view-models/example/example.component';


export const routes: Routes = [
  {
    path: 'ExampleInformation',
    data: {
      title: 'Información Example',
    },
    component: ExampleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepsRoutingModule { }
