import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeapiService } from './services/pokeapi/pokeapi.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PokeapiService
  ]
})
export class CoreModule { }
