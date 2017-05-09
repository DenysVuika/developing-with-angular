import { LogClass } from './decorators/LogClass';
import { LogClassWithParams } from './decorators/LogClassWithParams';
import { LogMethod } from './decorators/LogMethod';
import { LogMethodWithParams } from './decorators/LogMethodWithParams';
import { LogAccessor } from './decorators/LogAccessor';
import { LogAccessorWithParams } from './decorators/LogAccessorWithParams';
import { LogProperty } from './decorators/LogProperty';
import { LogParameter } from './decorators/LogParameter';

/*
class TextWidget {

    render(@LogParameter positionX: number, @LogParameter positionY: number) {
        console.log('rendering');
    }

}
*/

@LogClass
@LogClassWithParams('BEGIN:', ':END')
@LogClassWithParams('[', ']')
class TextWidget {
    private _text: string;

    @LogProperty
    id: string;

    @LogAccessor
    @LogAccessorWithParams('hello')
    @LogAccessorWithParams('world')    
    get text(): string {
        return this._text;
    }
    
    set text(value: string) {
        this._text = value;
    }

    constructor(text: string = 'default text') {
        this._text = text;
    }

    @LogMethod
    @LogMethodWithParams('hello')
    @LogMethodWithParams('world')
    render() {
        console.log(`Rendering text: ${this.text}`);
    }
}

let widget = new TextWidget();
widget.render();