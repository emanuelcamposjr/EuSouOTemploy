import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SobrePage } from '../pages/sobre/sobre';
import { PreleitoresPage } from '../pages/preleitores/preleitores';
import { InscricoesPage } from '../pages/inscricoes/inscricoes';
import { VideosPage } from '../pages/videos/videos';
import { ProgramacaoPage } from '../pages/programacao/programacao';
import { LocalPage } from '../pages/local/local';
//import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Início', component: HomePage },
      { title: 'Sobre', component: SobrePage },
      { title: 'Preleitores', component: PreleitoresPage },
      { title: 'Inscrição', component: InscricoesPage },
      { title: 'Videos', component: VideosPage },
      { title: 'Programação', component: ProgramacaoPage },
      { title: 'Local', component: LocalPage }
      //{ title: 'List', component: ListPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
