import { Pipe, PipeTransform } from '@angular/core';
import { ICollapse } from '../../interfaces/collapse.interface';
import { ISearchObject } from '../../interfaces/search-object.interface';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(elemets: Array<ICollapse>, searchLine: string, arrayKey: string[]): Array<ICollapse> {
    const lowerSearchLine = searchLine.toLowerCase();
    return searchLine
      ? elemets.filter((elemet) =>
          arrayKey.some((key) =>
            String((elemet as unknown as ISearchObject)[key])
              .toLowerCase()
              .includes(lowerSearchLine),
          ),
        )
      : elemets;
  }
}
