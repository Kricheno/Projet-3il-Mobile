import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'first',
        loadChildren: '../salle/salle.module#SallePageModule'
      },
      {
        path: 'second',
        loadChildren: '../postes/postes.module#PostesPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/first'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
