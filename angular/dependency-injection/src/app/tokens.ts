import { InjectionToken } from '@angular/core';
import { LogPlugin } from './services/composite-log.service';

export const REST_API_URL = new InjectionToken<string>('rest.api.url');
export const LOGGER_PLUGIN = new InjectionToken<LogPlugin>('logger.plugin');
