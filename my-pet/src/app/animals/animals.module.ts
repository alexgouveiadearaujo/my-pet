import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { AnimalComponent } from './animal/animal.component';
import { AnimalPhotoGridComponent } from './animal-photo-grid/animal-photo-grid.component';
import { CardModule } from '../componets/card/card.module';
import { DetailsAnimalComponent } from './details-animal/details-animal.component';
import { CommentsComponent } from './details-animal/comments/comments.component';
import { SharedModule } from '../shared/shared.module';
import { NewAnimalComponent } from './new-animal/new-animal.component';


@NgModule({
  declarations: [
    ListAnimalsComponent,
    AnimalComponent,
    AnimalPhotoGridComponent,
    DetailsAnimalComponent,
    CommentsComponent,
    NewAnimalComponent
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    CardModule,
    SharedModule
  ]
})
export class AnimalsModule { }
