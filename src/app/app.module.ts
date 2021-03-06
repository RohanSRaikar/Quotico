import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { FavouritesPage } from '../pages/favourites/favourites';
import { LibraryPage } from '../pages/library/library';
import { QuotesPage } from '../pages/quotes/quotes';
import { SettingsPage } from '../pages/settings/settings';
import { QuotePage } from '../pages/quote/quote';
import { TabsPage } from '../pages/tabs/tabs.component';
import { QuoteService } from '../services/quotes.service';
import { SettingsService } from '../services/settings.service';

@NgModule({
  declarations: [
    MyApp,   
    FavouritesPage,
    LibraryPage,
    QuotesPage,
    SettingsPage,
    QuotePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, 
    FavouritesPage,
    LibraryPage,
    QuotesPage,
    SettingsPage,
    QuotePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuoteService,
    SettingsService
  ]
})
export class AppModule {}
