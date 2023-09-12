import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = '';
  password = '';
  erro = false
  constructor(private authService: AuthenticationService , private router: Router) {}
  ngOnInit(): void {}

  login() {
    this.authService.authenticate(this.user, this.password).subscribe(
      ()=>{
        console.log('first')
        this.router.navigate(['animals'])
      }, (error)=>{
        this.erro = true;
        console.log(error)
      }
    )
  }
}
