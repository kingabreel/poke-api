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
      this.pokemons = data.results;
    })
  }  
}
