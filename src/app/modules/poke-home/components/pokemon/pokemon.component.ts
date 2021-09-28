import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EvolutionChain } from 'src/app/interfaces/evolutionchain';
import { EvolvesTo } from 'src/app/interfaces/evolvesto';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokeapiService } from 'src/app/modules/core/services/pokeapi/pokeapi.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() pokemonId: number = 0;
  @Output() detailsClicked: EventEmitter<any> = new EventEmitter(); 
  pokemon: Pokemon | any;
  evolution: string = '';
  evolutionChain: EvolutionChain | any;
  evolvesTo: EvolvesTo | any;

  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit(): void {
  }

  getPokemonDatails(id: number){
    this.pokeapiService.getPokemonsById(id).subscribe(pk => {
      this.pokemon = pk;
    });
  }

  getPokemonEvolution(name: string){
    this.pokeapiService.getPokemonsSpecies(this.pokemonId).subscribe(specie => {
      if (specie) {
        this.pokeapiService.getPokemonEvolutionChain(specie.evolution_chain.url).subscribe(ch => {
          if (ch){
            let isfirts = false;
            if (ch.chain.species.name === name) {
              isfirts = true;
            }
            
            if (isfirts && ch.chain.evolves_to) {
              this.evolution = ch.chain.evolves_to[0].species.name;
            }

            if (!isfirts && ch.chain.evolves_to) {
              this.evolution = this.getEvolution(name, ch.chain.evolves_to)
            }

          }

        });
      }
    });
  }

  getEvolution(pokemonName:string, evolvesTo: EvolvesTo[]){
    let evolutionName = '';
    evolvesTo.forEach(e => {
      if (e.species.name === pokemonName) {
        if (e.evolves_to.length) {
          evolutionName = e.evolves_to[0].species.name;
        }else
        {
          evolutionName = 'This Pokemon does not have evolution'
        }
      }else
      {
        evolutionName = this.getEvolution(pokemonName, e.evolves_to)
      }
    });
    return evolutionName;
  }
}
