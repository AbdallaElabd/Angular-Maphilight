import {
  Component,
  Input,
  AfterContentInit, AfterViewInit,
  ElementRef,
  DoCheck, KeyValueDiffers, KeyValueDiffer,
} from '@angular/core';
import { Subject } from 'rxjs/Subject';

declare global {
  interface Window {
    jQuery: any;
  }
  interface JQuery {
    maphilight(options?: any): any;
  }
}

@Component({
  selector: 'maphilight',
  templateUrl: './maphilight.component.html',
  styleUrls: ['./maphilight.component.css']
})
export class MaphilightComponent implements AfterViewInit {
  @Input() config: any;
  configDiffer: KeyValueDiffer<any, any>;
  el:  HTMLElement;
  img: HTMLElement;
  map: HTMLElement;
  events = {
    imgLoaded: new Subject<undefined>(),
    updateMaphilight: new Subject<any>(),
  }

  constructor(
    private elRef: ElementRef,
    differs: KeyValueDiffers
  ) {
    this.el = this.elRef.nativeElement;
    this.configDiffer = differs.find({}).create();
  }

  ngAfterViewInit() {
    this.img = this.el.querySelector('img');
    this.map = this.el.querySelector('map');
    const id = this.el.getAttribute('id')
    this.img.setAttribute('usemap', '#' + id + ".map");
    this.map.setAttribute('id',           id + ".map");
    this.map.setAttribute('name',         id + ".map");

    // Wait until image is loaded. Otherwise the $(img).height() in maphilight.js may return 0,
    // which causes mouseover effect to break.
    // See also  https://stackoverflow.com/questions/16084374/jquery-width-and-height-return-0-for-img-element
    this.img.onload = () => {
      console.log('img onload')
      this.events.imgLoaded.next()
      this.updateMaphilight();
    }
  }

  updateMaphilight() {
    if (!this.img) return;
    this.events.updateMaphilight.next()
    window.jQuery(this.img).maphilight(this.configToApply());
  };

  ngDoCheck() {
    const changes = this.configDiffer.diff(this.config)
    if (changes) {
      this.updateMaphilight()
    }
  }

  private configToApply() {
    const config = Object.assign({}, this.config)
    if (config.strokeColor && config.strokeColor[0] == '#')
      config.strokeColor = config.strokeColor.substr(1)
    if (config.fillColor && config.fillColor[0] == '#')
      config.fillColor = config.fillColor.substr(1)
    if (config.shadowColor && config.shadowColor[0] == '#')
      config.shadowColor = config.shadowColor.substr(1)
    return config
  }
}

