export function LogClassWithParams(prefix: string, suffix: string) {
    return (constructor: Function) => {
        console.log(`
            ${prefix} 
            LogClassWithParams decorator called for: 
            ${constructor}
            ${suffix}
        `);
    };
}