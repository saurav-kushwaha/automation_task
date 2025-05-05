class Booking{
    statusDropDown="div[name='status'] div[class='ant-select-selector']";
    statusAvailable ='.ant-select-tree-list-holder-inner>.ant-select-tree-treenode>span[title="Available"]';
    viewResourcesMapBtn = '[style="width: 100%; display: flex; align-items: center; justify-content: space-between; padding-bottom: 20px;"] > [style="display: flex; align-items: center;"] > :nth-child(1)';
    viewResourcesListBtn = ":nth-child(2)>:nth-child(2)>svg#Layer_1";
    bookNowBtn="tr[data-row-key='9562']>td[style='position: sticky; right: 0px;']>button";
    bookNowbtnForRooms='tr[data-row-key="9696"]>td.ant-table-cell-fix-right-first>button';
    confirmBookingBtn="div[style='position: absolute; bottom: 40px; right: 0px;']>button";
    confirmBookingBtnForRooms="button:nth-child(2).ant-btn-variant-solid";
    cancelBookingBtn='.float-right>.ant-flex>.ant-btn-background-ghost';
    threeDotsBtn="svg:nth-child(11) > path";//'body > div:nth-child(2) > div:nth-child(10) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > svg:nth-child(11)';
    modifyBookingBtn='.float-right>.ant-flex>button.ant-btn.css-h31w2p.ant-btn-default.ant-btn-color-default >span';
    endDateOfBooking='div.date_range >.ant-picker-input> input[date-range="end"]';
    selectMinuteForBooking='.ant-picker-content >ul[data-type="minute"]>li[data-value="34"]';
    extendSaveBtn='div[style="position: absolute; right: 24px; bottom: 24px;"]>[type="button"]';
    goToMyBookingBtn='[style="width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px;"]>[type="button"]';
    eventScrollersbar='.ant-col.eventsScrollbar';
    checkInBtn='.float-right>.ant-flex>[varinat="primary"]';
    extendbtn='.float-right>.ant-flex >.ant-btn.ant-dropdown-trigger';
    clickOnDropDownMinutes=':nth-child(1)>.ant-dropdown-menu-title-content>div';
    checkOutBtn='div.float-right>.ant-flex.ant-flex-gap-middle.ant-flex-vertical>button:nth-child(1)';
    DailyRadioBtn="input[value='daily']";
    weeklyRadioBtn="input[value='weekly']";
    closeCreateBookingPage="button[aria-label='Close']";
    cancelAllBtn=".mt-2 > .ant-btn";
    BookForGuest="body > div:nth-child(16) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
    guestNameInput="input[placeholder='Enter guest name']";
    guestEmailInput="input[placeholder='Enter guest email']";
    bookingSpace="body > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)";
    multipleDays='body div p:nth-child(2)';
    guestName="body > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1)";
    guestEmail="body > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1)";
    bookNowBtnForInviteUser='[data-row-key="7820"] > .ant-table-cell-fix-right > .ant-btn > span';
    automationTowerVms="#0-floor > .ant-col-24 > .ant-row-space-between";
    recurringAutomationTower=':nth-child(8)>.ant-flex>.sc-gDpztx';
    defaultStarIcon=' div.ant-col.ant-col-1.css-augzy' ;
    repeatInputField='.ant-col > .sc-jtQUzJ > .sc-cEzcPc > .ant-select > .ant-select-selector > .ant-select-selection-item';
    repeatDropDownDaily="div[title='Daily']>div[class='ant-select-item-option-content']";
    repeatDropDownWeekly="div[title='Weekly']>div[class='ant-select-item-option-content']";
    defaultListView='tr.ant-table-row.ant-table-row-level-0';
    automationTowerVms=':nth-child(2) > .ant-flex > .sc-ghWlax';
    automationTowerVmsFloor1StarIcon="#0-floor > .ant-col-24 > .ant-row-space-between >.ant-col-1>.MuiSvgIcon-root> path ";
    automationTowerVmsFloor1="#0-floor > .ant-col-24 > .ant-row-space-between";
    automationTowerVmsFloor2="#1-floor > .ant-col-24 > .ant-row-space-between";
    editDetailsForBehalfBooking='div[title="Edit Details"]';
    editDetailsInput=".rounded-xl.p-2";
    editDetailsBehalfRoomBooking='.ant-col.ant-col-8.css-h31w2p>p';
    threeDotsOfRoom='div[style="display: flex;"]>svg'; 
    editResourceStatus='.ant-col.ant-col-2.css-h31w2p>svg';
    inactiveResourceStatus='#inactive';
    inputBoxForDisablingRoomAndDesk="input[type='text']";
    correctBtn='[style="display: flex; flex-direction: row; align-items: center; min-width: 80px; justify-content: center; padding: 5px 0px 0px;"]>._Green_xbc36_49';
    recurringDateInput="div[class='ant-col ant-col-24 css-h31w2p'] div[class='ant-row css-h31w2p'] div[class='ant-col ant-col-24 css-h31w2p'] div div div div div div[class='ant-picker ant-picker-outlined css-h31w2p sc-hJRrWL cBwhAF']";
    recurringTextOnBookingCard="div[id='mainBookingCardsContainer'] div:nth-child(2) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(2) div:nth-child(2) div:nth-child(2) div:nth-child(1) p:nth-child(1) span:nth-child(1)";
    singleDayDateInput="input[placeholder='Select date']";
    singleDayStartTime=':nth-child(1) > .sc-kEfuZE';
    singleDayEndTime=':nth-child(2) > .ant-row > :nth-child(2)';
    resourceInput="div[name='resourceType'] div[class='ant-select-selector']";
    resourceRooms="span[title='Rooms'] >span[class='ant-select-tree-title']";
    resourceDesks='.ant-select-tree-treenode-switcher-close>[title="Desks"]';
    recurringAutomationFloor=".expandable-sidebar-data>.ant-col-24";



    
    
    getClickOnResorceDropDown()
    {
        return cy.get(this.resourceInput).click()
    }

    getClickOnResourceOptionRooms()
    {
        return cy.get(this.resourceRooms).click()
    }
    getClickOnResourceOptionDesks()
    {
        return cy.get(this.resourceDesks).click()
    }
    getSingleDayDateInput()
    {
      return cy.get(this.singleDayDateInput)
    }

    getSingleDayStartTime()
    {
      return cy.get(this.singleDayStartTime)
    }

    getSingleDayEndTime()
    {
      return cy.get(this.singleDayEndTime)
    }
    
    getRecurringTextOnBookingCard()
    {
      return cy.get(this.recurringTextOnBookingCard)
    }
    getRecurringDateInput()
    {
      return cy.get(this.recurringDateInput)
    }
    clickOnTickBtn()
    {
       return cy.get(this.correctBtn)
    }
    getInputBoxAftetInactiveStatus()
    {
      return cy.get(this.inputBoxForDisablingRoomAndDesk)
    }
    getInactiveStatus()
    {
      return cy.get(this.inactiveResourceStatus)
    }
    clickOnEditResourceStatus()
    {
      return cy.get(this.editResourceStatus)
    }
    getClickOnRoomThreeDot()
    {
        return cy.get(this.threeDotsOfRoom).eq(1).click()
    }
    getEditDetailOfOrganiser()
    {
        return cy.get(this.editDetailsBehalfRoomBooking).click()
    }
    getEditDetailInput()
    {
        return cy.get(this.editDetailsInput)
    }
    getEditDetailsBtn()
    {
        return cy.get(this.editDetailsForBehalfBooking).click()
    }
    
    clickOnDefaultStarIcon()
    {
        return cy.get(this.defaultStarIcon).click()
    }
    getRecurringAutomationTower()
    {
        return cy.get(this.recurringAutomationTower).click()
    }
    getClickOnRecurringAutomationFloor()
    {
        return cy.get(this.recurringAutomationFloor).click()
    }

    getDefaultListView()
    {
        return cy.get(this.defaultListView)
    }
    getClickOnRepeatWeeklyOption()
    {
        return cy.get(this.repeatDropDownWeekly,{timeout: 10000}).click()
    }
    
    
    getRepeatInputFieldDropDown()
    {
        return cy.get(this.repeatInputField).click()
    }
    
    getClickOnRepeatDailyOption()
    {
        return cy.get(this.repeatDropDownDaily,{timeout: 10000}).should('be.visible').click()
    }


   
   getClickOnBookingOptionOfMoreApps()
   {
     return cy.contains('Booking',{timeout: 10000}).should('be.visible').click();
   }

  getClickOnStatusDropDown()
  {
    return cy.get(this.statusDropDown).click();
  }

  selectStatus()
  {
    return  cy.get(this.statusAvailable).click();
  }

  clickOnViewResourcesBtn()
  {
    return cy.get(this.viewResourcesMapBtn).click();
  }
  
  clickOnViewResourcesListBtn()
  {
     return cy.get(this.viewResourcesListBtn).click();
  }

  getClickOnBookNowBtn()
   {
      return cy.get(this.bookNowBtn,{timeout:10000}).click();
   }

  getClickOnConfirmBookingBtn()
   {
      return cy.get(this.confirmBookingBtn).click();
   }
   getClickOnBookNowBtnForRooms()
   {
      return cy.get(this.bookNowbtnForRooms,{timeout:10000}).click();
   }
   getClickOnConfirmBookingBtnOfRooms()
    {
        return cy.get(this.confirmBookingBtnForRooms).click();
    }

   getClickOnCheckInBtn()
   {
      return cy.get(this.checkInBtn,{timeout:6000}).click();
   }

   getClickOnExtendBtn()
   {
      return cy.get(this.extendbtn).click();
   }

   getClickOnMinuteOptions()
   {
      return cy.get(this.clickOnDropDownMinutes).click();
   }

   getClickOnCheckOutBtn()
    {
      return cy.get(this.checkOutBtn).click();
    }

   getClickOnDailyRadioBtn()
    {
      return cy.get(this.DailyRadioBtn)     
    }

   getClickONWeeklyRadioBtn()
   {
    return cy.get(this.weeklyRadioBtn)
   }

   getClickOnThreeDotsBtn()
   {
    return cy.get(this.threeDotsBtn).eq(1).click();
   }

   getClickOnDeleteAllBoking()
   {
    return cy.get(this.cancelAllBtn).click();
  }


   // works before check-in
   getModifyBookingBtn()
  {
    return cy.get(this.modifyBookingBtn).click();
   }

 clickOnEndDateOfBooking()
 {
 return cy.get(this.endDateOfBooking).click();
 
 }
 selectExtendMinute()
 {
    cy.get(this.selectMinuteForBooking).click();
 }
 
clickOnExtendSaveBtn()
{
    return cy.get(this.extendSaveBtn).click();
}

clickOnGoToMyBookingBtn()
{
    return cy.get(this.goToMyBookingBtn).click();
}

clickOnCancelBooking()
{
    return cy.get(this.cancelBookingBtn).click();
}

clickOnConfirmCancelBtn()
{
    return cy.contains('Confirm').should('be.visible').click();
}
clickOnScrollBarDiv()
{
    return cy.get(this.eventScrollersbar).click({force:true});
}

clickOnBookForGuest()
{
    return cy.get(this.BookForGuest)
    .should('be.visible')
    .and('have.text','Book for a guest')
    .click();
}

getGuestNameInput(){
    return cy.get(this.guestNameInput)
}

   getGuestEmailInput()
   {
    return cy.get(this.guestEmailInput)
   }


  getClosePageBtn()
   {
    return cy.get(this.closeCreateBookingPage).click();
   }

   clickOnBookingSpace()
   {
     return cy.get(this.bookingSpace).click();
   }

   getMultipledays()
   {
     return cy.get(this.multipleDays)
     .should('be.visible')
     .and('contain.text','Multiple Days').click();
   }


   verifyGuestName()
   {
     return cy.get(this.guestName)
   }
   verifyGuestEmail()
   {
     return cy.get(this.guestEmail)
   }



}
export default Booking;