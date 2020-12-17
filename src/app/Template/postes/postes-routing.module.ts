import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostesPage } from './postes.page';

const routes: Routes = [
  {
    path: '',
    component: PostesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostesPageRoutingModule {}
