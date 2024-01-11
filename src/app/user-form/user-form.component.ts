import {Component, Injectable, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {NativeDateAdapter} from "@angular/material/core";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserFormComponent {
  userForm: UntypedFormGroup;

  selectedValue: string = 'option1'; // Initialize with a default value

  qualificationList: string[] = ['Кардиолог', 'Хирург', 'УЗИст', 'Кардиохирург'];

  constructor(private formBuilder: UntypedFormBuilder) {
    this.createUserForm();
  }

  createUserForm() {
    this.userForm = this.formBuilder.group({
      fio: [''], // Default value can be set here
      gender: [''],
      qualification: [''],
    });
  }

  onSubmit() {
    console.log('form', this.userForm.value)
  }
}

export class CustomDateAdapter extends NativeDateAdapter {
  override getFirstDayOfWeek(): number {
    return 1;
  }
}
