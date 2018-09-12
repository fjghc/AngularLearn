import { QuestionBase } from './question-base';

// 文本框类型
export class TextboxQuestion extends QuestionBase<string> {
    controlType = 'textbox';
    type: string;
    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}
