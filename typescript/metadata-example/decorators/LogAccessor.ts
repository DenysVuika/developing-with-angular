export function LogAccessor(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('LogAccessor decorator called');
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}