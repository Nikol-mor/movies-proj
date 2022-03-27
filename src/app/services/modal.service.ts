import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}

  modalListChange: Subject<any> = new Subject<any>();
  isListOpen = false;

  changeIsListOpen(isOpen: boolean) {
    this.modalListChange.next(isOpen);
  }
}
