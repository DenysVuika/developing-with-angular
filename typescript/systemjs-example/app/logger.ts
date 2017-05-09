export class Logger {

    output: any;

    constructor(outputId: string) {
        this.output = document.getElementById(outputId);
    }

    info(message: string) {
       this.output.innerText = `INFO: ${message}`;
    }
}