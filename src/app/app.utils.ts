import { OnceEveryControl } from './app.d';

/**
 * Calls the passed callback only if not already been called within
 * the given delay timeout
 *
 * @export
 * @param {() => any} callback
 * @param {number} delay
 * @returns {() => OnceEveryControl}
 */
export function onceEvery(callback: (...callbackParams: any[]) => any, delay: number): (...callbackParams: any[]) => OnceEveryControl {
  let wasCalled = false;

  const reset = (): void => {
    wasCalled = false;
  };

  return function (...callbackParams: any[]): OnceEveryControl {
    if (!wasCalled) {
      wasCalled = true;

      callback(...callbackParams);

      setTimeout(reset, delay);
    }

    const returnControl: OnceEveryControl = {
      reset
    };

    return returnControl;
  };
}
