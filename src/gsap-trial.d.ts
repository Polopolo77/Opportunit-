declare module 'gsap-trial/SplitText' {
  export class SplitText {
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    constructor(target: string | Element | Element[], vars?: object);
    revert(): void;
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  export class ScrollSmoother {
    static create(vars?: object): ScrollSmoother;
    static refresh(safe?: boolean): void;
    scrollTop(value?: number): number;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    paused(value?: boolean): boolean;
    kill(): void;
  }
}
