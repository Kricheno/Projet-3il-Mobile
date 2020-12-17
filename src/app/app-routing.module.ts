import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Template/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path : 'salles',
    loadChildren: () => import('./Template/salle/salle.module').then(m => m.SallePageModule)
  },
  {
    path : 'salle/:id',
    loadChildren: () => import('./Template/postes/postes.module').then(m => m.PostesPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./Template/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'materiel',
    loadChildren: () => import('./Template/materiel/materiel.module').then( m => m.MaterielPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
