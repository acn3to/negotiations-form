export function inspect() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`Method: ${propertyKey}`);
            console.log(`Arguments: ${JSON.stringify(args)}`);
            const result = originalMethod.apply(this, args);
            console.log(`Result: ${JSON.stringify(result)}`);
            return result;
        };
        return descriptor;
    };
}
