export function LogMethodWithParams(message: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log(`${propertyKey}: ${message}`);
    };
}