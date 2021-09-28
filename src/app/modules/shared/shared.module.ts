import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { PokemonTypesPipe } from './pipes/pokemon-types.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PokemonTypesPipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PokemonTypesPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
