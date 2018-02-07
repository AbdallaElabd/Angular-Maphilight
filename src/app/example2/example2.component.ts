import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { MaphilightComponent } from '../maphilight/maphilight.component';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component {
  @ViewChild(MaphilightComponent) maphilightComponent: MaphilightComponent;
  hidden = false
  config = {
    fade: true,
    alwaysOn: false,
    neverOn: false,

    // fill
    fill: true,
    fillColor: '#ffffff',
    fillOpacity: 0.4,

    // stroke
    stroke: true,
    strokeColor: '#4d0ec0',
    strokeOpacity: 1,
    strokeWidth: 1,

    // shadow:
    shadow: true,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 10
  }

  constructor() { }

  ngAfterViewInit() {
    // Make sure image is initially visible while maphilight.js loads (and *then* hide it).
    // Otherwise the $(img).height() in maphilight.js may return 0, which causes mouseover effect to break.
    // See also:
    // - https://stackoverflow.com/questions/1472303/jquery-get-width-of-element-when-not-visible-display-none
    // - https://stackoverflow.com/questions/2345784/jquery-get-height-of-hidden-element-in-jquery
    this.maphilightComponent.events.imgLoaded.subscribe(() => {
      console.log("this.img.height=", this.maphilightComponent.img.height,
                  "window.jQuery(this.img).height()=", window.jQuery(this.maphilightComponent.img).height())
      this.hidden = true
    })
    this.maphilightComponent.events.updateMaphilight.subscribe(() => {
      console.log('updateMaphilight')
    }
  }

}
