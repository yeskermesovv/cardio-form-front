import {Component, Injectable, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {NativeDateAdapter} from "@angular/material/core";
import {CardioService} from "../../service/cardio.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserFormComponent {
  userForm: UntypedFormGroup;

  qualificationList: string[] = ['Кардиолог', 'Хирург', 'УЗИст', 'Кардиохирург'];

  constructor(private formBuilder: UntypedFormBuilder,
              private cardioService: CardioService,
              private router: Router) {
    this.createUserForm();
  }

  createUserForm() {
    this.userForm = this.formBuilder.group({
      fio: [''], // Default value can be set here
      gender: [''],
      birthDate: [''],
      qualification: [''],
      jobExperience: [''],
      passedYearsSinceGraduation: [''],
      weeklyEchocardiogramCount: [''],
    });
  }

  onSubmit() {
    let date = new Date(this.userForm.get('birthDate').value);
    date.setDate(date.getDate() + 1)
    this.userForm.get('birthDate').setValue(date);

    console.log('form', this.userForm.value);
    this.cardioService.saveDoctor(this.userForm.value).subscribe(res => {
      console.log('ress', res);
      localStorage.setItem("user", JSON.stringify(res));
      this.router.navigate(['questionnaire']);
    })
  }
}

export class CustomDateAdapter extends NativeDateAdapter {
  override getFirstDayOfWeek(): number {
    return 1;
  }
}
