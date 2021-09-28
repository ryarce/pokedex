import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EvolutionChain } from 'src/app/interfaces/evolutionchain';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonList } from 'src/app/interfaces/pokemonlist';
import { Results } from 'src/app/interfaces/results';
import { Species } from 'src/app/interfaces/species';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  urlAPi: string = 'https://pokeapi.co/api/v2/pokemon/';
  urlAPiSpecies: string = 'https://pokeapi.co/api/v2/pokemon-species/';
  urlAPiEvolutionChain: string = 'https://pokeapi.co/api/v2/pokemon-species/';

  constructor(private http: HttpClient) { }

  getPokemonsByLimit(limit: number, offset: number){
    const limitParameter: string = `?limit=${limit}&offset=${offset}`;
    return this.http.get<PokemonList>(`${this.urlAPi}${limitParameter}`);
  }

  getPokemonsById(id: number){
    return this.http.get<Pokemon>(`${this.urlAPi}${id}`);
  }

  getPokemonsSpecies(id: number){
    return this.http.get<Species>(`${this.urlAPiSpecies}${id}`);
  }

  getPokemonEvolutionChain(chain: string){
    return this.http.get<any>(chain);
  }
}
