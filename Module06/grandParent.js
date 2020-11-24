import { LightningElement } from 'lwc';

export default class GrandParent extends LightningElement {

   selectedNum =0;

   handleOnNotifyGrandParent(event) {

       const textVal = event.detail.statusMsg;
       this.selectedNum = textVal == 'Selected' ? this.selectedNum +1 : this.selectedNum -1;      
    
   }
   handleResetClick() {

      this.selectedNum =0; 
      this.template.querySelector("c-parent").resetAllParent();
   }

}