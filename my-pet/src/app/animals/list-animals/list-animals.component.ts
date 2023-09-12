import { AnimalsService } from './../animals.service';
import { Component, OnInit } from '@angular/core';
import { Ianimals } from '../ianimal';
import { UserService } from 'src/app/authentication/user/user.service';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.css'],
})
export class ListAnimalsComponent implements OnInit {
  allAnimals$!: Observable<Ianimals>;
  myPosts$!: Observable<Ianimals>;
  isVisible: boolean = true;
  constructor(
    private userService: UserService,
    private animalsService: AnimalsService
  ) {}

  ngOnInit(): void {
    // this.userService.returnUser().subscribe((user)=>{
    //   const userName = user.name ?? '';
    //   this.animalsService.userList(userName).subscribe((animals)=>{
    //     this.animals = animals;
    //   })
    // })
    // this.animals$ = this.userService.returnUser().pipe(
    //   switchMap((user) => {
    //     const userName = user.name ?? '';
    //     return this.animalsService.userList(userName);
    //   })
    // );

    //AO LOGAR APARECE TODOS
    // this.allAnimals$ =  this.animalsService.listAllAnimals()
  }

  myPetsPosted() {
    console.log('meus');
    this.isVisible = false;
    this.myPosts$ = this.userService.returnUser().pipe(
      switchMap((user) => {
        const userName = user.name ?? '';
        return this.animalsService.userList(userName);
      })
    );
  }
  allPets() {
    console.log('todos');
    this.isVisible = true;
    this.allAnimals$ = this.animalsService.listAllAnimals();
  }
}
