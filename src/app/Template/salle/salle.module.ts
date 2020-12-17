import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SallePage } from './salle.page';

import { SallePageRoutingModule } from './salle-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SallePageRoutingModule
  ],
  declarations: [SallePage]
})
export class SallePageModule {}
