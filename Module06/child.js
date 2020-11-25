import { api,LightningElement } from 'lwc';

export default class Child extends LightningElement {

    @api childNumber;
    @api selected =false;
    handleChildClick(event) {

       this.selected = !this.selected;
       const statusMessage = this.childNumber +': '+event.target.label+'ed';
       const cus =  new CustomEvent('notify', { detail: {statusMsg:statusMessage} });
       this.dispatchEvent(cus);
    
    }
   
}