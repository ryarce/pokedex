import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Pipe({
  name: 'groupProducts'
})
export class GroupProductsPipe implements PipeTransform {

  transform(objects: any[] | Product[] | null, id: string): any {

    const countedObjects: any[] = [];
    if (objects) {
        for (const objeto of objects) {
        const countObject: any = countedObjects.find(obj => obj[id] === objeto[id]);
        if (countObject) {
          countObject.count++;
        }else{
          countedObjects.push({...objeto, count: 1});
        }
      }
      console.log(countedObjects);
    }    
    return countedObjects;
  }

}

