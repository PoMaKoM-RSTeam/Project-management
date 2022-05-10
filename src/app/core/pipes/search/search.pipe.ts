import { Pipe, PipeTransform } from '@angular/core';
import { ISearchObject } from '../../interfaces/search-object.interface';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform<T>(elemets: Array<T>, searchLine: string, arrayKey: string[]): Array<T> {
    return searchLine
      ? elemets.filter((elemet) =>
          arrayKey.some((key) => String((elemet as unknown as ISearchObject)[key]).includes(searchLine)),
        )
      : elemets;
  }
}
