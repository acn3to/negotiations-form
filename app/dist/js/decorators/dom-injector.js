export function domInjector(selector) {
    return function (target, propertyKey) {
        const getter = function () {
            const element = document.querySelector(selector);
            console.log(`Searching DOM element with selector ${selector} to inject into property ${propertyKey}`);
            return element;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
