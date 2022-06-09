export function inspect() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`Method: ${propertyKey}`);
      console.log(`Arguments: ${JSON.stringify(args)}`);
      const result = originalMethod.apply(this, args);
      console.log(`Result: ${JSON.stringify(result)}`);
      return result;
    };
    return descriptor;
  };
}
