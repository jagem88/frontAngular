import { Component } from '@angular/core';
/**
* ExampleComponent.ts
*
* @description: Component to form register
* @author Luis Carlos Alfonso Roa.
* @version 1.0
* @date 5-12-2022.
*
**/
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/customValidators/customValidators';
import { ExampleUseCases } from 'src/app/Examples/domain/usecase/request-use-case';
import { ExampleInfor } from 'src/app/Examples/domain/entities/exampleInfor';
import { Result } from 'src/app/Examples/domain/entities/result';
import { gender } from 'src/app/Examples/domain/entities/gender';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogDataExampleDialog } from 'src/app/shared/dialog/DialogDataExampleDialog.component';


@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {

  exampleForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private exampleUseCase: ExampleUseCases,
    private dialog: MatDialog
  ) {
  }

  masculino: boolean = false;
  genders: gender[] = [
    { value: 'Masculino', type: 'Masculino' },
    { value: 'Femenino', type: 'Femenino' },
  ];

  ngOnInit() {
    this.createExampleForm();
  }

  /**
*Create form and set validator
*/
  createExampleForm() {
    this.exampleForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.minLength(3)]],
      document: ['', [Validators.required, Validators.minLength(10), CustomValidators.MaxLength(15)]],
      email: ['', [Validators.required, CustomValidators.emailPatternValidatorSeparatedBySemicolon]],
      gender: ['', [Validators.required]],
      age: ['', [CustomValidators.Numeric, Validators.minLength(0), CustomValidators.MaxLength(2)]],
      hobby: ['', [Validators.required]]
    });
  }


  /**
  *Submit and send entities from exampleService
  */
  next() {
    if (this.exampleForm.valid) {

      const ExampleInfo: ExampleInfor = {
        name: this.exampleForm.get('name')?.value,
        lastName: this.exampleForm.get('lastName')?.value,
        document: this.exampleForm.get('document')?.value,
        email: this.exampleForm.get('email')?.value,
        gender: this.exampleForm.get('gender')?.value,
        age: this.exampleForm.get('age')?.value,
        hobby: this.exampleForm.get('hobby')?.value
      };

      this.exampleUseCase.PostExampleInfo(ExampleInfo).subscribe(response => {
        if (response.result === Result.Success) {
          this.openDialog(ExampleInfo);
          this.createExampleForm();
        }
      })
    }
  }

  /**
* get controls form search
*/
  getControls(field: string) {
    return this.exampleForm.get(field) as FormControl;
  }

  /**
* change gender selected form
*/
  changeGender() {
    if (this.exampleForm.get('gender')?.value === 'Masculino') {
      this.masculino = true
    } else {
      this.masculino = false
    }
  }

  /**
  * Open DialogComponente shared 
  */
  openDialog(input: ExampleInfor) {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        name: input.name,
        lastName: input.lastName,
        document: input.document,
        email: input.email,
        gender: input.gender,
        age: input.age,
        hobby: input.hobby
      },
    });
  }

}