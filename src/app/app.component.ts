import { Component } from '@angular/core';
import { PokeClientService } from './poke-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon-rpg';

  constructor(private nomeDoServico: PokeClientService) { }

  ngOnInit(): void {
    this.nomeDoServico.getData().subscribe(data => {
      console.log(data)
    })
  }
}
