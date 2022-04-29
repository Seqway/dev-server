import boxen from 'boxen';
import { blueBright, greenBright, grey, redBright, yellow } from 'chalk';
import { table, TableUserConfig } from 'table';

export class Logger {
  constructor(private readonly verbose: boolean) {}

  public error(message: string): void {
    console.log(redBright(message));
  }

  public warn(message: string): void {
    console.log(yellow(message));
  }

  public notice(message: string): void {
    console.log(blueBright(message));
  }

  public info(message: string): void {
    console.log(message);
  }

  public debug(message: string): void {
    console.log(grey(message));
  }

  public trace(message: string): void {
    if (this.verbose) {
      console.log(grey(message));
    }
  }

  public box(message: string): void {
    console.log(
      boxen(greenBright(message), {
        padding: 1,
        borderStyle: 'round',
      }),
    );
  }

  public table(items: unknown[][], userConfig?: TableUserConfig): void {
    console.log(table(items, userConfig));
  }
}
