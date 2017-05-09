export function LogClass(constructor: Function) {
    console.log('LogClass decorator called for constructor:');
    console.log(constructor);
}