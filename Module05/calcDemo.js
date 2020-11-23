import { LightningElement } from 'lwc';

export default class CalcDemo extends LightningElement {
    operators = ["+","-","/","*","="];
    calcExpression = '';
    calcResult = 0;
    currentOperator ='';
    currentInputOperand  ='';
    currentItemOperator = false;
    isInvalid = false;

    handleClick(event) {

        let targetValue = event.target.label;
        
        if(this.currentOperator == '=') {
            
            this.clearValues();
        }
          
        if(this.operators.includes(targetValue)) {
            
            this.calcExpression = this.calcExpression+targetValue;  
            if(this.currentItemOperator == true) {
                
                this.calcResult = 0;
                this.isInvalid = true;
                this.currentOperator = '';
                this.currentInputOperand ='';
                
            } 
            else if ( this.calcResult != 0) {

                this.currentOperator = targetValue;
                this.currentItemOperator = true;
                this.currentInputOperand = ''; 
                
            }
            
        }
        else {

            this.calcExpression = this.calcExpression+targetValue;  
            this.currentItemOperator = false;
            let currentOperand = this.currentInputOperand != '' ? parseInt(this.currentInputOperand) : '';
            let currentInput = currentOperand != '' ? parseInt(this.currentInputOperand+targetValue): parseInt(targetValue);
            
            if(this.calcResult != 0 && this.currentOperator !='') {

                if(this.currentOperator == '+') {

                    this.calcResult = currentOperand != '' ? (this.calcResult - currentOperand)+ currentInput :this.calcResult+ currentInput;
                }
                if(this.currentOperator == '-') {

                    this.calcResult = currentOperand != '' ? (this.calcResult + currentOperand) - currentInput :this.calcResult - currentInput;
                }
                if(this.currentOperator == '*') {

                    this.calcResult = currentOperand != '' ? (this.calcResult / currentOperand) * currentInput : (this.calcResult * currentInput);
                }
                if(this.currentOperator == '/') {

                    this.calcResult = currentOperand != '' ? (this.calcResult * currentOperand) / currentInput: this.calcResult/currentInput;
                }
                
                this.currentInputOperand =   this.currentInputOperand != '' ?this.currentInputOperand+ targetValue: targetValue;
            }
            else if(this.calcResult != 0 &&  this.currentOperator =='') {

                this.currentInputOperand =  this.currentInputOperand != '' ?this.currentInputOperand+ targetValue: targetValue;
                this.calcResult =  parseInt( this.currentInputOperand);
            }
            else if(this.calcResult == 0) {
        
            
                this.calcResult =  currentInput;
                this.currentInputOperand = targetValue;
            }
            
        }
            
        
    }
   
    clearValues() {

        this.calcResult = 0;
        this.calcExpression ='';
        this.currentOperator = '';
        this.currentInputOperand = '';
        this.currentItemOperator = false;
        this.isInvalid = false;

    }
 
}