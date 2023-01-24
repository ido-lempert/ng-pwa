import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  private beforeinstallpromptEvent:any;

  constructor() {
    window.addEventListener("beforeinstallprompt", this.onBeforeinstallprompt);
  }
  private onBeforeinstallprompt(e?:any) {
    e.preventDefault();
    console.log('onBeforeinstallprompt', e);
    this.beforeinstallpromptEvent = e;
  }

  promptInstall() {
    if (this.beforeinstallpromptEvent) {
      this.beforeinstallpromptEvent.prompt();
    }
  }
}
