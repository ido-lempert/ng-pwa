import {ChangeDetectionStrategy, Component, NgZone, OnInit, ViewEncapsulation} from "@angular/core";
import {animate, animateChild, query, style, transition, trigger} from "@angular/animations";
import { AnimationOptions } from 'ngx-lottie';
import {AnimationItem} from "lottie-web";

@Component({
  selector: 'nx15-splash',
  templateUrl: './splash.component.html',
  // animations: [
  //   trigger('fadeOut', [
  //     transition(':leave', [
  //       query(':leave', animateChild(), { optional: true }),
  //       animate(300, style({ opacity: 0 }))
  //     ])
  //   ])
  // ],
  styleUrls: ['./splash.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplashComponent implements OnInit {
  show = true;
  poalimLoader: AnimationOptions = { path: '/assets/lottie/paolim-loader.json', autoplay: true };
  animationItems: AnimationItem[] = [];
  constructor(
      // private pwaService: PwaService,
      // private cdr: ChangeDetectorRef,
      // private appRef: ApplicationRef
  ) {
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItems.push(animationItem);
  }

  loopComplete(e: any){
    console.log(e);
    NgZone.assertNotInAngularZone();
    // console.log(NgZone.isInAngularZone());
  }

  ngOnInit(): void {
    // this.pwaService.checkForUpdate()
    //     .subscribe(result => {
    //       this.show = result;
    //       this.cdr.detectChanges();
    //     });
  }

}