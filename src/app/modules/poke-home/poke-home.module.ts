import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeHomeRoutingModule } from './poke-home-routing.module';
import { PokeHomeComponent } from './components/poke-home/poke-home.component';
import { SharedModule } from '../shared/shared.module';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    PokeHomeComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    PokeHomeRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class PokeHomeModule { }
