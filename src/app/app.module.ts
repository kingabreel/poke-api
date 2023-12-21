import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ChoosePokemonComponent } from './components/choose-pokemon/choose-pokemon.component';
import { MapScreenComponent } from './components/map-screen/map-screen.component';
import { BattleScreenComponent } from './components/battle-screen/battle-screen.component'

@NgModule({
  declarations: [
    AppComponent,
    ChoosePokemonComponent,
    MapScreenComponent,
    BattleScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
