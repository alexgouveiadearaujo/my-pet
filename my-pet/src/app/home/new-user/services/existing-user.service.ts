import { Injectable } from '@angular/core';
import { NewUserService } from './new-user.service';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExistingUserService {
  constructor(private newUserService: NewUserService) {}

  isExistingUser() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((userName) =>
          this.newUserService.checkExistingUser(userName)
        ),
        map((existingUser) => (existingUser ? { userExists: true } : null)),
        first()
      );
    };
  }
}
