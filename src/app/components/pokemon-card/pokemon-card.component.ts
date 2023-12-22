import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() name: string = '';
  @Input() abilities: string[] = [];
  @Input() sprite: {
    front_default: string;
    back_default: string;
  } = {
    front_default: '',
    back_default: ''
  };
  @Input() stats: { slot: number; base_stat: number; stat: { name: string; url: string} }[] = [];
  @Input() type: { slot: number; type: { name: string; url: string } }[] = [];

  pokeColor: string = '';

  constructor (){}

  ngOnInit(): void {
    this.setColor();
    
  }
  setColor(){
    console.log(this.type)
    console.log(this.stats)
    for(let i = 0; i < this.type.length; i++){
      if (this.type[i].type.name === 'grass' || this.type[i].type.name === 'poison') {
        this.pokeColor = 'green';
        break;
      } else if (this.type[i].type.name === 'fire' || this.type[i].type.name === 'flame') {
        this.pokeColor = 'red';
        break;
      } else if (this.type[i].type.name === 'water' || this.type[i].type.name === 'ice') {
        this.pokeColor = 'blue';
        break;
      } else if (this.type[i].type.name === 'rock' || this.type[i].type.name === 'ground') {
        this.pokeColor = 'brown';
        break;
      } else if (this.type[i].type.name === 'psychic' || this.type[i].type.name === 'dark') {
        this.pokeColor = 'purple';
        break;
      } else {
        this.pokeColor = 'gray';
      }
    }  
  }
}
