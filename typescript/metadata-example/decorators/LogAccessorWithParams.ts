export function LogAccessorWithParams(message: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log(`Message from decorator: ${message}`);
    }
}