export function LogParameter(target: any, parameterName: string, parameterIndex: number) {
    console.log('LogParameter decorator called');
    console.log(target);
    console.log(parameterName);
    console.log(parameterIndex);
}