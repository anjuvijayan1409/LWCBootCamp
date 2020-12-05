import { LightningElement,api } from 'lwc';
export default class QuickCreateForm extends LightningElement {

    @api objectName ='Account';
    @api fieldNames ='Name';
    @api sizeColm ='12';
    iconName ='standard:account';
    reqFields = true;
    buttonLabel ='Show All Account Fields';
    title = 'Account Quick Create';
    fields = [];

    connectedCallback() {

        this.buttonLabel ='Show All ' +this.objectName+' Fields';
        this.iconName = 'standard:' +this.objectName.toLowerCase();
        this.title = this.objectName +' Quick Create';
        this.fields = this.fieldNames.split(',');
    }

    handleClick() {

        this.reqFields = !this.reqFields;
        this.buttonLabel = this.reqFields == true?  'Show All ' +this.objectName+' Fields':'Show Required '+ this.objectName+' Fields';
    }
   
    handleReset() {

        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
    }

}