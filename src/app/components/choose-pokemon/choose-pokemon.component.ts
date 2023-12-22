import { Component } from '@angular/core';
import { PokeClientService } from 'src/app/poke-client.service';

@Component({
  selector: 'app-choose-pokemon',
  templateUrl: './choose-pokemon.component.html',
  styleUrls: ['./choose-pokemon.component.css']
})
export class ChoosePokemonComponent {
  pokemons: any[] = []

  constructor(private pokeClient: PokeClientService){ }

  ngOnInit(): void {
    this.pokeClient.getData().subscribe(data => {
      let pokemonsUrl = data.results;
      this.getPokeInfo(pokemonsUrl);
    })
  }

  getPokeInfo(poke: any[]){
    
    for(let i = 1; i <= poke.length; i++){
      this.pokeClient.getSpecificPokemon(i).subscribe(data => {
        this.pokemons.push(data);
      })
    }
    console.log(this.pokemons)
  }
}
