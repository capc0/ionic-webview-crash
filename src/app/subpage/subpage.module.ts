import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubpagePageRoutingModule } from './subpage-routing.module';

import { SubpagePage } from './subpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubpagePageRoutingModule
  ],
  declarations: [SubpagePage]
})
export class SubpagePageModule {}
