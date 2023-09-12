import { Component, Input, OnInit } from '@angular/core';
import { Ianimals } from '../ianimal';

@Component({
  selector: 'app-animal-photo-grid',
  templateUrl: './animal-photo-grid.component.html',
  styleUrls: ['./animal-photo-grid.component.css']
})
export class AnimalPhotoGridComponent implements OnInit {
  @Input() animals!: Ianimals;

  constructor() { }

  ngOnInit(): void {
  }

}
