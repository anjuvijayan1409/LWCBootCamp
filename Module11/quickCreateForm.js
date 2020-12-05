import { LightningElement,api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class QuickCreateForm extends NavigationMixin(LightningElement) {

    @api objectName ='Account';
    @api fieldNames ='Name';
    @api sizeColm ='12';
    iconName ='standard:account';
    buttonLabel ='Show All Account Fields';
    title = 'Account Quick Create';
    fields = [];

    connectedCallback() {

        this.buttonLabel ='New ' +this.objectName;
        this.iconName = 'standard:' +this.objectName.toLowerCase();
        this.title = this.objectName +' Quick Create';
        this.fields = this.fieldNames.split(',');
    }

    handleClick() {

        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: this.objectName,
                actionName: 'new',
            },
        });
      
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