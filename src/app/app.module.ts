import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SobrePage } from '../pages/sobre/sobre';
import { PreleitoresPage } from '../pages/preleitores/preleitores';
import { InscricoesPage } from '../pages/inscricoes/inscricoes';
import { VideosPage } from '../pages/videos/videos';
import { ProgramacaoPage } from '../pages/programacao/programacao';
import { LocalPage } from '../pages/local/local';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SobrePage,
    PreleitoresPage,
    InscricoesPage,
    VideosPage,
    ProgramacaoPage,
    LocalPage
    //ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SobrePage,
    PreleitoresPage,
    InscricoesPage,
    VideosPage,
    ProgramacaoPage,
    LocalPage
    //ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
