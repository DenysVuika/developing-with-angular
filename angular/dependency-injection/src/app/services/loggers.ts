import { LogPlugin } from './composite-log.service';

export class ErrorLogPlugin implements LogPlugin {

    name = 'Error Log Plugin';
    level = 'error';

    log(message: string) {
      console.error(message);
    }
}

export class WarningLogPlugin implements LogPlugin {
  name = 'Warning Log Plugin';
  level = 'warn';

  log(message: string) {
    console.warn(message);
  }
}


