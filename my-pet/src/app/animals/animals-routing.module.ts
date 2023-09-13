import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { DetailsAnimalComponent } from './details-animal/details-animal.component';
import { NewAnimalComponent } from './new-animal/new-animal.component';

const routes: Routes = [{
  path:'',
  component:ListAnimalsComponent
},
{
  path:'new',
  component:NewAnimalComponent
},
{
  path:':animalId',
  component:DetailsAnimalComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule { }
