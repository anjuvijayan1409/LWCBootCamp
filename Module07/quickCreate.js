import { LightningElement } from 'lwc';
export default class QuickCreate extends LightningElement {

    accountReqFields = true;
    contactReqFields = true;
    opportunityReqFields = true;
    accountButtonLabel ="Show All Account Fields";
    contactButtonLabel ="Show All Contact Fields";
    opportunityButtonLabel = "Show All Opportunity Fields";
    handleAccountClick() {

        this.accountReqFields = !this.accountReqFields;
        this.accountButtonLabel = this.accountReqFields == true?  "Show All Account Fields":"Show Required Account Fields";

    }
    handleContactClick() {

        this.contactReqFields = !this.contactReqFields;
        this.contactButtonLabel = this.contactReqFields == true?  "Show All Contact Fields":"Show Required Contact Fields";

    }
    handleOpportunityClick() {

        this.opportunityReqFields = !this.opportunityReqFields;
        this.opportunityButtonLabel = this.opportunityReqFields == true?  "Show All Opportunity Fields":"Show Required Opportunity Fields";
    }
    
    handleResetAcc() {

        const inputFields = this.template.querySelectorAll(
            '.Acc'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
    }

    handleResetCon() {

        const inputFields = this.template.querySelectorAll(
            '.Con'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }

    }

    handleResetOpp() {

        const inputFields = this.template.querySelectorAll(
            '.Opp'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }

    }
}