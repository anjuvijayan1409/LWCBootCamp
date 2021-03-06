import { api,LightningElement } from 'lwc';

export default class Child extends LightningElement {

    @api childNumber;
    selected =false;
    handleChildClick(event) {

       this.selected = !this.selected;
       const statusMessage = this.childNumber +': '+event.target.label+'ed';
       const cus =  new CustomEvent('notify', { detail: statusMessage});
       this.dispatchEvent(cus);
    
    }
    @api
    clearSelected() {

        this.selected = false;
    }
}
