export function logRuntime() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const t1 = performance.now();
      const ret = originalMethod.apply(this, args);
      const t2 = performance.now();
      console.log(`${propertyKey}, runtime: ${(t2 - t1) / 1000} seconds`);
      ret;
    };

    return descriptor;
  };
}
