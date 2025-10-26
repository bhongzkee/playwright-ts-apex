/**
 * SelectMenuPageLocators
 *
 * Dynamic XPath locators for elements on the Select Menu Page.
 * Each locator is a function that returns a selector string
 * based on the provided parameter.
 */

export const SelectMenuPageLocators = {
    
    dropdownOldLocator: (dropdownLabel: string): string => `//div[div[contains(text(), "${dropdownLabel}")]]/following-sibling::div[1]//select`,

    dropdownReactLocator: (dropdownLabel: string): string => `//div[div[contains(text(), "${dropdownLabel}")]]/following-sibling::div[1]/div/div`,

    dropdownMultiSelectLocator: (dropdownLabel: string): string => `//p[b[contains(text(), "${dropdownLabel}")]]/following-sibling::div[contains(@class, "container")]`,
    
    dropdownReactOptionsLocator: (): string => `//div[contains(@id,"react-select") and contains(@class,"option")]`,

    reactOptionsLocator: (option: string): string => `//div[contains(@id,"react-select") and contains(@class,"option")][normalize-space(.)="${option}"]`,
    
    reactTagOptionLocator: (option: string): string => `.css-1rhbuit-multiValue >> text=${option}`,

    reactSelectedOptionLocator: (dropdownLabel: string): string => `//div[div[contains(text(), "${dropdownLabel}")]]/following-sibling::div[1]//div[contains(@class, "singleValue")]`,

    dropdownStandardLocator: (dropdownLabel: string): string => `//div[p[b[contains(text(), "${dropdownLabel}")]]]/select`,
    
    






















    
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