import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostesPageRoutingModule } from './postes-routing.module';

import { PostesPage } from './postes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostesPageRoutingModule
  ],
  declarations: [PostesPage]
})
export class PostesPageModule {}
