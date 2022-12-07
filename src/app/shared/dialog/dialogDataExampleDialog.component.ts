import {Component, Inject, Input} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ExampleInfor } from 'src/app/Examples/domain/entities/exampleInfor';

interface DialogData {
  message: string;
}

@Component({ 
    selector: 'dialog-data-example-dialog',
    templateUrl: 'dialog-data-example-dialog.html',
  })
  export class DialogDataExampleDialog  {
    constructor(@Inject(MAT_DIALOG_DATA) public data: ExampleInfor) {}

  }