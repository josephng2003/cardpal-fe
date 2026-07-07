import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import * as Sentry from '@sentry/astro'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function logger(level: 'info' | 'error' | 'debug', msg: string, attr?: Sentry.Log['attributes']) {
  switch (level) {
    case 'debug':
      Sentry.logger.debug(msg, attr)
      break
    case 'error':
      Sentry.logger.error(msg, attr)
      break
    case 'info':
      Sentry.logger.info(msg, attr)
  }
}
