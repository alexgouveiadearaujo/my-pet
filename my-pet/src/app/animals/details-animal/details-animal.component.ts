import { AnimalsService } from './../animals.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ianimal } from '../ianimal';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-animal',
  templateUrl: './details-animal.component.html',
  styleUrls: ['./details-animal.component.css'],
})
export class DetailsAnimalComponent implements OnInit {
  animalId!: number;
  animal$!: Observable<Ianimal>;

  constructor(
    private animalsService: AnimalsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params?.['animalId'];
    this.animal$ = this.animalsService.searchById(this.animalId);
  }

  like() {
    this.animalsService.like(this.animalId).subscribe((like) => {
      if (like) {
        this.animal$ = this.animalsService.searchById(this.animalId);
      }
    });
  }

  remove() { console.log('first')
    this.animalsService.deleteAnimal(this.animalId).subscribe(
      () => {
        this.router.navigate(['/animals/']);
      },
      (error) => console.log(error)
    );
  }
  // remove() {
  //   this.animalsService.deleteAnimal(this.animalId).subscribe(
  //     {
  //       next: this.router.navigate(['/animals/']),
  //       error: (error) => console.log(error)
  //     }
  //   );
  // }
}
