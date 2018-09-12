import { QuestionBase } from './question-base';

// 下拉列表框
export class DropdownQuestion extends QuestionBase<string> {
    controlType = 'dropdown';
    options: { key: string, value: string }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}
