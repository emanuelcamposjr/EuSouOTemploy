import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreleitoresPage } from './preleitores';

@NgModule({
  declarations: [
    PreleitoresPage,
  ],
  imports: [
    IonicPageModule.forChild(PreleitoresPage),
  ],
})
export class PreleitoresPageModule {}
