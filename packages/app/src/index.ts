import { timeout } from '@monorepo-boilerplate/utils';

class App {
  public start() {
    timeout(1000).then(() => this.hello());
  }

  private hello() {
    console.log('hello world!');
  }
}

export { App };
