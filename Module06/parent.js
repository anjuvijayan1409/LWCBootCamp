import { api,LightningElement } from 'lwc';

export default class Parent extends LightningElement {

    childOneStatus ='Child One: Deselected';
    childTwoStatus ='Child Two: Deselected';
    childThreeStatus ='Child Three: Deselected';
    
    handleOnNotify(event) {

        const textVal = event.detail.childNum;
        if(textVal == 'Child One')
            this.childOneStatus = textVal +': '+ event.detail.statusMsg;
        else if(textVal == 'Child Two')
            this.childTwoStatus = textVal +': '+ event.detail.statusMsg;
        else if(textVal == 'Child Three')
            this.childThreeStatus = textVal +': '+ event.detail.statusMsg;

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