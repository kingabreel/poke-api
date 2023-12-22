import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ChoosePokemonComponent } from './components/choose-pokemon/choose-pokemon.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component'

@NgModule({
  declarations: [
    AppComponent,
    ChoosePokemonComponent,
    PokemonCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
