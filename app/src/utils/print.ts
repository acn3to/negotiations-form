export function print(...objects: any[]) {
  for (let object of objects) {
    console.log(object.toText());
  }
}
