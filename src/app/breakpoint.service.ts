import { Injectable } from '@angular/core';

export interface Breakpoint {
  min?: number;
  max?: number;
}

export interface BreakpointConfig {
  [key: string]: Breakpoint;
}

@Injectable()
export class BreakpointService {

  private static defaultBreakpoints: BreakpointConfig = {
    mobile: { max: 767 },
    mobileAbove: { min: 768 }
  }

  private breakpoints: BreakpointConfig;

  constructor() { }

  public setBreakpoints (breakpoints: BreakpointConfig) {
    this.breakpoints = breakpoints;
  }

}
