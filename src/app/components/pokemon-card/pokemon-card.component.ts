import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input() name: string = '';
  @Input() abilities: string[] = [];
  @Input() sprite: {
    front_default: string;
    back_default: string;
  } = {
    front_default: '',
    back_default: ''
  };
  @Input() stats: string[] = [];
  @Input() type: string[] = [];

  clicked(){
    console.log(this.sprite);
  }
}
