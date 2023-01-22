import { Component } from '@angular/core';
import {PwaService} from "./pwa.service";

@Component({
  selector: 'nx15-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rb';
  constructor(private pwaService: PwaService) {

  }

  promptPWAInstall(){
    this.pwaService.promptInstall();
  }
}
