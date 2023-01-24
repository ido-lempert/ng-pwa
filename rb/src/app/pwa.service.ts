import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PwaService {

  constructor() {

  }

  promptInstall() {
    if (bnhpApp.beforeinstallprompt) {
      bnhpApp.beforeinstallprompt.prompt();
    }
  }
}
