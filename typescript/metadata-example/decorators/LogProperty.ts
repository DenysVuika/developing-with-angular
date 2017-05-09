export function LogProperty(target: any, propertyKey: string) {
    console.log('LogProperty decorator called');
    console.log(target);
    console.log(propertyKey);
}