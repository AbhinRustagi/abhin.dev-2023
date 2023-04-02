import { join, kebabCase } from 'lodash'

export function makeKey(...args: Array<string>) {
  if (args.length > 0) {
    const joinedArray = join(args).toLowerCase()
    return kebabCase(joinedArray)
  } else {
    return ''
  }
}

export * from './analytics'
