import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogDataExampleDialog } from './dialog/DialogDataExampleDialog.component';



@NgModule({
  declarations: [
    DialogDataExampleDialog,
  ],
  imports: [
    MatDialogModule
  ],
  exports:[DialogDataExampleDialog],
  providers:[
  ]
})
export class SharedModule { }
