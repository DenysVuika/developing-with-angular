import { Injectable, Inject, Optional } from '@angular/core';
import { LOGGER_PLUGIN } from './../tokens';

export interface LogPlugin {
  name: string;
  level: string;
  log(message: string);
}

@Injectable()
export class CompositeLogService {

  constructor(@Optional() @Inject(LOGGER_PLUGIN) private plugins: LogPlugin[]) {
    if (plugins && plugins.length > 0) {
      for (const plugin of plugins) {
        console.log(`Loading plugin: ${plugin.name} (level: ${plugin.level})`);
      }
      this.log('warn', 'All plugins loaded');
    } else {
      console.log('No logger plugins found.');
    }
  }

  log(level: string, message: string) {
    const logger = this.plugins.find(p => p.level === level);
    if (logger) {
      logger.log(message);
    }
  }

}
