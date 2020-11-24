import { api,LightningElement } from 'lwc';

export default class Child extends LightningElement {

    @api childNumber;
    @api selected =false;
    handleChildClick(event) {

       this.selected = !this.selected;
       const statusMessage = event.target.label+'ed';
       const cus =  new CustomEvent('notify', { detail: {childNum:this.childNumber, statusMsg:statusMessage} ,bubbles: true , composed: true });
       this.dispatchEvent(cus);
       
    }
   
}