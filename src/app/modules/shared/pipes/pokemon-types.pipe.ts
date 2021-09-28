import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypes'
})
export class PokemonTypesPipe implements PipeTransform {

  transform(typesList: any[]): any {

    const types: string[] = [];
    if (typesList) {
        for (const pType of typesList) {
          if(pType){
            types.push(pType.type.name);
          }
      }
    }    
    return types.join("/");
  }

}
