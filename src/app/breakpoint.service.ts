import { WindowDimensions } from './breakpoint.service';
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

export interface Breakpoint {
  min?: number;
  max?: number;
  onEnter?: (windowDimensions: WindowDimensions) => any;
  onLeave?: (windowDimensions: WindowDimensions) => any;
}

export interface BreakpointConfig {
  [key: string]: Breakpoint;
}

export interface WindowDimensions {
  width: number;
  height: number;
}

@Injectable()
export class BreakpointService {

  private resizeObservable: Observable<WindowDimensions>;

  constructor () {
    this.resizeObservable = Observable
      .fromEvent(window, 'resize')
      .map(this.getWindowSize)
      .debounceTime(300)
      .distinctUntilChanged();
  }

  private getWindowSize (): WindowDimensions {
    const {
      innerWidth,
      innerHeight
    } = window;

    return {
      width: innerWidth,
      height: innerHeight
    };
  }

  public subscribe (onResize: (WindowDimensions) => any): Subscription {
    return this.resizeObservable.subscribe(onResize);
  }

}
