import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { AnimalComponent } from './animal/animal.component';
import { AnimalPhotoGridComponent } from './animal-photo-grid/animal-photo-grid.component';
import { CardModule } from '../componets/card/card.module';
import { DetailsAnimalComponent } from './details-animal/details-animal.component';
import { CommentsComponent } from './details-animal/comments/comments.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListAnimalsComponent,
    AnimalComponent,
    AnimalPhotoGridComponent,
    DetailsAnimalComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    CardModule,
    ReactiveFormsModule
  ]
})
export class AnimalsModule { }
