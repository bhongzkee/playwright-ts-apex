/**
 * WebTablePageLocators
 *
 * Dynamic XPath locators for elements on the Web Table Page.
 * Each locator is a function that returns a selector string
 * based on the provided parameter.
 */

export const FormsPageLocators = {
    
    uploadFileInputLocator: (): string => `//input[@id="uploadPicture"]`,

    dropDownLocator: (dropDownName: string): string => `//div[contains(@class, "container")][contains(@id, "${dropDownName.toLowerCase()}")]`,
    






















    
/**
 * Returns the XPath locator for the Edit icon within a specific item row
 * on the Web Table Page web table.
 *
 * Example:
 *   WebTablePageLocators.webTableRowEditLocator("First Name")
 *   → //div[@role="row"][contains(normalize-space(.), "First Name")]//span[contains(@id, "edit-record")]
 *
 * @param {string} itemRowName - The name (or partial text) of the table row to locate.
 * @returns {string} XPath locator for the edit icon in the specified row.
 */
webTableRowEditLocator: (itemRowName: string): string =>
  `//div[@role="row"][contains(normalize-space(.), "${itemRowName.replace(/"/g, '\\"')}")]//span[contains(@id, "edit-record")]`,


/**
 * Locator for all column headers
 */
webTableColumnHeaderLocator: (): string => '//div[@role="columnheader"]',



/**
 * Locator for a specific cell in a row by row name and column index
 * @param rowName - visible text in the row
 * @param columnIndex - 1-based index of the column
 */
webTableCellLocator: (rowName: string, columnIndex: number): string =>
  `//div[@role="row"][contains(normalize-space(.), "${rowName}")]//div[@role="gridcell"][${columnIndex}]`,


/**
 * Locator for all rows in the web table
 */
webTableRowsLocator: (): string => '//div[@class="rt-tr-group"][@role="rowgroup"][.//span[contains(@id, "edit-record")]]',



/**
 * Locator for all rows in the web table
 */
webTableRowFirstNameLocator: (): string => '(//div[@class="rt-tr-group"][@role="rowgroup"]/div[@role="row"][.//span[contains(@id, "edit-record")]]/div[@role="gridcell"][1])'

  
};



//div[@class="rt-tr-group"][@role="rowgroup"][.//span[contains(@id, 'edit-record')]]
// (//div[@class="rt-tr-group"][@role="rowgroup"]/div[@role="row"][.//span[contains(@id, 'edit-record')]]/div[@role="gridcell"][1])[1]