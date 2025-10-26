import { test, expect, Page } from '@playwright/test';
import { WebTablePageLocators } from '../locators/webTablePageLocators';

export class WebTablePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }


  /**
   * Click on button method that can cover any page.
   * Usage:
   *   await webTablePage.clickOnTableRowEditIcon('Cierra');
   */
  async clickOnTableRowEditIcon(rowItem: string): Promise<void> {
    await test.step(`Click On Icon Edit Button for ${rowItem} table row item`, async () => {
      const locatorElement = this.page.locator(WebTablePageLocators.webTableRowEditLocator(rowItem));
      // For meamingful error message
      try {
        await locatorElement.waitFor({ state: 'visible', timeout: 60000 });
      } catch (error: any) {
        throw new Error(
          `The icon edit button for "${rowItem}" NOT found: ->> ${error.message || error}`
        );
      }
      await locatorElement.click();
      console.log(`The icon edit button for "${rowItem}" clicked`);
    });
  }



async verifyTableCellValue(rowName: string, columnName: string, expectedValue: string): Promise<void> {
  const stepName = `Verify Expected Cell Value - Row: "${rowName}", Column: "${columnName}", Expected: "${expectedValue}"`;

  await test.step(stepName, async () => {
    try {
      const actualValue = await this.getTableCellValue(rowName, columnName);

      // Custom error if values do not match
      if (actualValue !== expectedValue) {
        throw new Error(`Mismatch in table cell value Actual: "${actualValue}"`);
      }

      console.log(stepName);
    } catch (error) {
      throw new Error(`${stepName} Failed: ${error instanceof Error ? error.message : error}`);
    }
  });
}





/**
 * Get the column index (1-based) of a table column by its name.
 *
 * Example:
 *   const emailIndex = await webTablePage.getTableColumnIndexByName('Email');
 *   → 4
 *
 * @param {string} columnName - The column header text to search for.
 * @returns {Promise<number>} The column index (starting from 1).
 */
async getTableColumnIndexByName(columnName: string): Promise<number> {
  const headers = this.page.locator(WebTablePageLocators.webTableColumnHeaderLocator());
  const count = await headers.count();

  for (let i = 0; i < count; i++) {
    const headerText = (await headers.nth(i).innerText()).trim();
    if (headerText.toLowerCase() === columnName.toLowerCase()) {
      return i + 1; // 1-based index
    }
  }

  throw new Error(`Column with name "${columnName}" not found.`);
}




/**
 * Returns the cell value from the web table by matching the row text and column name.
 *
 * Example:
 *   await webTablePage.getTableCellValue('Cierra-Edited', 'Email');
 *   → "cierra.edited@gmail.com"
 *
 * @param {string} rowName - The identifying text of the target row (e.g., "Cierra").
 * @param {string} columnName - The name of the column (e.g., "Email").
 * @returns {Promise<string>} The trimmed text content of the cell.
 */
async getTableCellValue(rowName: string, columnName: string): Promise<string> {

  // Get column index dynamically
  const columnIndex = await this.getTableColumnIndexByName(columnName);

  // Build XPath that matches the target row and cell
  const cellLocator = this.page.locator(WebTablePageLocators.webTableCellLocator(rowName, columnIndex));

  // For meamingful error message
  try {
    await cellLocator.waitFor({ state: 'visible', timeout: 60000 });
  } catch (error: any) {
    throw new Error(
      `The table cell for  Row: "${rowName}" Column: ${columnName} NOT found: ->> ${error.message || error}`
    );
  }

  return (await cellLocator.innerText()).trim();
}






/**
 * Retrieves a random row name from the web table.
 *
 * Example:
 *   const randomRow = await webTablePage.getRandomRowName();
 *   → "Kierra"
 *
 * @returns {Promise<string>} A randomly selected row name.
 * @throws {Error} If no rows are found in the table.
 */
async getRandomRowName(): Promise<string> {
  return await test.step('Get a random row name from the web table', async () => {
    const rowsLocator = this.page.locator(WebTablePageLocators.webTableRowsLocator());
    const rowFirstNameLocator = this.page.locator(WebTablePageLocators.webTableRowFirstNameLocator());

    const count = await rowsLocator.count();

    if (count === 0) {
      throw new Error('No rows found in the table. Ensure the table is loaded and visible before calling this method.');
    }

    const rowNames: string[] = [];

    for (let i = 0; i < count; i++) {
      const rowFirstName = (await rowFirstNameLocator.nth(i).innerText()).trim();
      if (rowFirstName) rowNames.push(rowFirstName);
    }

    if (rowNames.length === 0) {
      throw new Error('No valid row names extracted from the table cells.');
    }

    const randomIndex = Math.floor(Math.random() * rowNames.length);
    const randomRowName = rowNames[randomIndex];

    console.log('Available Table Rows:', rowNames);
    console.log(`Randomly Selected Row: "${randomRowName}"`);

    expect(randomRowName).toBeTruthy(); // sanity check

    return randomRowName;
  });
  }




}
