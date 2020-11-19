import { LightningElement } from 'lwc';
import lwcBootCamp from '@salesforce/resourceUrl/LWCBootCamp';

export default class IfElseDemo extends LightningElement {
    isTom = true;
    buttonLabel = 'Show Jerry';
    tomImage = lwcBootCamp + '/images/Tom_Cat.png';
    jerryImage = lwcBootCamp + '/images/Jerry_Mouse.png';
   
    toggleImage(event) {
        this.isTom = !this.isTom;
        this.buttonLabel =  this.isTom ? 'Show Jerry' : 'Show Tom';
    }

}