import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonList } from 'src/app/interfaces/pokemonlist';
import { PokeapiService } from 'src/app/modules/core/services/pokeapi/pokeapi.service';

@Component({
  selector: 'app-poke-home',
  templateUrl: './poke-home.component.html',
  styleUrls: ['./poke-home.component.scss']
})
export class PokeHomeComponent implements OnInit {

  pokemonList: PokemonList[] | any;
  pokemon: Pokemon | any;
  totalPerPage: number = 10;
  indexPage: number =0;
  offset: number =0;
  // MatPaginator Inputs
  length = 500;
  pageSize = this.totalPerPage;
  constructor(private pokeapiService: PokeapiService) { }

  // MatPaginator Output
  pageEvent: PageEvent | any;
 
  ngOnInit(): void {
    this.fetchPokemon(0);
  }

  fetchPokemon(page: number){
    this.offset = page * this.totalPerPage;
    this.pokeapiService.getPokemonsByLimit(this.totalPerPage,this.offset).subscribe(pokemonList => {
      this.pokemonList = pokemonList;
    });
  }
}
