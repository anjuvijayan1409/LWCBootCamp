import { LightningElement,api } from 'lwc';
export default class QuickCreate extends LightningElement {

    fieldNamesAccount = 'Name';
    fieldNamesContact ='Name,AccountId';
    fieldNamesOpportunity='Name,CloseDate,StageName,AccountId';
}