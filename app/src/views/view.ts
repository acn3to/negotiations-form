import { inspect } from '../decorators/inspect.js';
import { logRuntime } from '../decorators/log-runtime.js';

export abstract class View<T> {
  protected element: HTMLElement;
  private scape = false;

  constructor(selector: string, scape?: boolean) {
    const element = document.querySelector(selector);
    if (element) {
      this.element = element as HTMLElement;
    } else {
      throw Error(`Selector ${selector} does not exist in the DOM. Check it.`);
    }
    if (scape) {
      this.scape = scape;
    }
  }

  @logRuntime(true)
  @inspect()
  public update(model: T): void {
    let template = this.template(model);
    if (this.scape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }
    this.element.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
