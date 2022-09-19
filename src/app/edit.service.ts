import { Injectable } from '@angular/core';

@Injectable()
export class EditService {

  editLog: string[] = [];

  constructor() { }

  save(path: string, value: string | undefined) {
    this.editLog.push(`save: ${path}, ${value}`);
  }

}
