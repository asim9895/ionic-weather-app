import { ExploreContainerComponentModule } from './../explore-container/explore-container.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule,
    ExploreContainerComponentModule,
  ],
  declarations: [AboutPage],
})
export class AboutPageModule {}
