import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterielPage } from './materiel.page';

const routes: Routes = [
  {
    path: '',
    component: MaterielPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterielPageRoutingModule {}
