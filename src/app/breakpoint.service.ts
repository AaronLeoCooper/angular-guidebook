import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

export interface Breakpoint {
  min?: number;
  max?: number;
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

  public getSubscription (breakpoints: BreakpointConfig): Subscription {
    const $windowDimensions = new BehaviorSubject(this.getWindowSize());

    return this.resizeObservable.subscribe($windowDimensions);
  }

}
