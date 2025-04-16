class CommandPalette
{
  commandPalette='.cmd-box';
  searchInput="input[id=':r4:']";
  downloadReports='.sc-kOHUsU.eMRmvE.link-download-reports';
  suggestionOption="div[data-value='Suggestions'] div[role='group'] div ";
  vmsOption="div[role='presentation']  div[role='group'] div";//"div[data-value='VMS'] div[aria-labelledby=':rg:'] div";
  arrowleftBtn="span[aria-label='arrow-left']";
  activitiesOption="div[role='presentation'] div[role='group'] div";
  invitesOption="div[role='presentation'] div[role='group'] div";
  bookingOption="div[data-value='Booking']> div[aria-labelledby=':rl:']> div";
  downloadsOptions="div[data-value='Downloads'] > div[aria-labelledby=':rq:'] >div";
  memberBooksOptions="div[data-value='Member book'] >div[aria-labelledby=':ru:'] >div";
  membersOptions='div[data-value="Members"] >div[aria-labelledby=":r1b:"]>div';
  settingsOptions="div[data-value='Settings'] div[role='group'] div";
  accountOptions="div[role='presentation']  div[role='group'] div";
  visitorsOptions="div[role='presentation']  div[role='group'] div";
  searchInput='input[type="text"]';
 

  getCommandPalette()
  {
    return cy.get(this.commandPalette,{ timeout: 60000 })
  }

  getCommandPaletteSearchInput()
  {
    return cy.get(this.searchInput)
  }
  getDownloadReports()
  {
    return cy.get(this.downloadReports)
  }

  getSuggestionOption()
  {
    return cy.get(this.suggestionOption)
  }
  getVmsOption()
  {
    return cy.get(this.vmsOption)
  }
  getActivitiesOption()
  {
    return cy.get(this.activitiesOption,{ timeout: 40000 })
  }
  getClickOnBackBtn()
  {
    return cy.get(this.arrowleftBtn)
  }
 getInvitesOption()
 {
    return cy.get(this.invitesOption)
 }
 getBookingOption()
 {
  return cy.get(this.bookingOption)
 }

 getDownloadsOption()
 {
  return cy.get(this.downloadsOptions)
 }
 getMemberBooksOptions()
 {
  return cy.get(this.memberBooksOptions)
 }
 getMembersOptions()
 {
  return cy.get(this.membersOptions,{ timeout: 40000 })
 }
 
 getSettingsOption()
 {
  return cy.get(this.settingsOptions)
 }
 getAccountoptions()
 {
  return cy.get(this.accountOptions)
 }
 getVisitorsOptions()
 {
  return cy.get(this.visitorsOptions)
 }
 
 getClickOnCloseBtnOfSendFeedBack()
 {
  return cy.get(this.closeBtnOfSendFeedback)
 }
 getSearchInput()
 {
  return cy.get(this.searchInput)
 }
  



}
export default CommandPalette;