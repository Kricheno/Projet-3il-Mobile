import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaterielPageRoutingModule } from './materiel-routing.module';

import { MaterielPage } from './materiel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterielPageRoutingModule
  ],
  declarations: [MaterielPage]
})
export class MaterielPageModule {}
