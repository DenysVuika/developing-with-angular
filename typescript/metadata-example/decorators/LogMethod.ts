export function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}