import { Printable } from './printable.js';

export function print(...objects: Printable[]) {
  for (let object of objects) {
    console.log(object.toText());
  }
}
