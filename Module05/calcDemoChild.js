import { LightningElement,api } from 'lwc';

export default class CalcDemoChild extends LightningElement {

    @api
    passedLabel='';

    @api passedValue='';

    @api passedInvalid = false;
}