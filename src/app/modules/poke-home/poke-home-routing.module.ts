import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeHomeComponent } from './components/poke-home/poke-home.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: PokeHomeComponent
  }
  ,
  {
    path: ':name',
    component: PokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokeHomeRoutingModule { }
