import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DialogDescriptionService {
  description = '';

  descriptionHandle(value: string) {
    this.description = value;
  }
}
