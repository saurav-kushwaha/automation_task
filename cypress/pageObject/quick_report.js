class QuickReport { 
    constructor() {
        this.downloadOptionsButtonAllvisitors = "button[id='download-report-All Visitors']";
        this.quickReport = ':nth-child(1) > .sc-kOHUsU';
        this.allEmployeesBtnOfEmployeeAccessList = "button[id='download-report-All Employees']";
        this.allKiosksBtn = "button[id='download-report-All Kiosks']";
        this.downloadCenter =".download-center"
        this.titleText ="table>tbody>tr.ant-table-row-level-0>td:nth-child(1)>span>div";
        this.datePicker='table> tbody> tr> td:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)';
        this.selectThisWeek= "div[class='ant-picker-presets'] li:nth-child(2)";
        this.selectLastWeek= "div[class='ant-picker-presets'] li:nth-child(3)";
        this.selectThisMonth= "div[class='ant-picker-presets'] li:nth-child(4)";
        this.selectLastMonth= "div[class='ant-picker-presets'] li:nth-child(5)";
        this.selectToday ="div>div.ant-picker-footer>ul>li";
        this.downloadForBtn =' table> tbody > tr> td:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)';
    }
    
    getClickOnDownloadCenter() {
        return cy.get(this.downloadCenter).click();
    }
    getClickOnAllVisitorBtn() {
       return cy.get(this.downloadOptionsButtonAllvisitors).click();
    }
    
    getClickOnQuickReport() {
        return cy.get(this.quickReport).click();
    }

    getClickOnAllEmployeeBtn() {
        return cy.get(this.allEmployeesBtnOfEmployeeAccessList).eq(2).click();
    }
    
    
    getClickOnAllKiosksBtn() {
        return cy.get(this.allKiosksBtn).click();
    }
    verifyTitleText() {
        return cy.get(this.titleText)
    }

    getClickOnDatePicker() {
        return cy.get(this.datePicker)
    }
    getClickOnThisWeek() {
        return cy.get(this.selectThisWeek).click();
    }
    getClickOnLastWeek() {
        return cy.get(this.selectLastWeek).click();
    }
    getClickOnThisMonth() {
        return cy.get(this.selectThisMonth).click();
    }
    getClickOnLastMonth() {
        return cy.get(this.selectLastMonth).click();
    }
    getClickOnToday() {
        return cy.get(this.selectToday).click();
    }
    getClickOnDownloadForBtn() {
        return cy.get(this.downloadForBtn)
    }
    
    verifySuccessMessage(){
        return cy.contains('Requested Report should be available shortly in the download center').should('be.visible');
    }
    
}
export default QuickReport;