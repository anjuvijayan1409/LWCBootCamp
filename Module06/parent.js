import { api,LightningElement } from 'lwc';

export default class Parent extends LightningElement {

    childOneStatus ='Child One: Deselected';
    childTwoStatus ='Child Two: Deselected';
    childThreeStatus ='Child Three: Deselected';
    
    handleOnNotify(event) {

        const textVal =  event.detail.statusMsg;
        if(textVal.includes('Child One'))
            this.childOneStatus = textVal;
        else if(textVal.includes('Child Two'))
            this.childTwoStatus =  textVal;
        else if(textVal.includes('Child Three'))
            this.childThreeStatus = textVal;
            console.log('inner');
        const cus =  new CustomEvent('notifyparent', { detail: {statusMsg:textVal}});
        this.dispatchEvent(cus);
    }

    @api resetAllParent() {

        this.childOneStatus ='Child One: Deselected';
        this.childTwoStatus ='Child Two: Deselected';
        this.childThreeStatus ='Child Three: Deselected';
       
        this.template.querySelectorAll("c-child").forEach((element)=>{
           element.selected = false;
        });
    }
  
}