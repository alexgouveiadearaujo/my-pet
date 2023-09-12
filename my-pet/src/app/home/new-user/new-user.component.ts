import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUserService } from './services/new-user.service';
import { InewUser } from './inew-user';
import { lowerCaseValidator } from './validators/lowerCase.validator';
import { ExistingUserService } from './services/existing-user.service';
import { passwordValidator } from './validators/password.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService,
    private existingUserService: ExistingUserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: [
          '',
          [lowerCaseValidator],
          [this.existingUserService.isExistingUser()],
        ],
        password: [''],
      },
      {
        validators: [passwordValidator],
      }
    );
  }

  register() {
    if (this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as InewUser;
      this.newUserService.registerNewUser(newUser).subscribe(
        () => {
          this.router.navigate(['']);
        },
        (error) => {
          console.log('ERROR: ', error);
        }
      );
    }
  }
}
