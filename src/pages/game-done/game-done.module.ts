import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameDonePage } from './game-done';

@NgModule({
  declarations: [
    GameDonePage,
  ],
  imports: [
    IonicPageModule.forChild(GameDonePage),
  ],
})
export class GameDonePageModule {}
