/**
 * FormsPageLocators
 *
 * Dynamic XPath locators for elements on the Forms Page.
 * Each locator is a function that returns a selector string
 * based on the provided parameter.
 */
export const FormsPageLocators = {

  /**
   * Locator for the file upload input.
   *
   * Usage:
   *   const locator = FormsPageLocators.uploadFileInputLocator();
   *   await page.setInputFiles(locator, "path/to/file.png");
   *
   * @returns {string} XPath locator for the file upload input element.
   */
  uploadFileInputLocator: (): string => `//input[@id="uploadPicture"]`,

  /**
   * Locator for dropdown containers by name.
   *
   * Usage:
   *   const locator = FormsPageLocators.dropDownLocator("state");
   *   await page.click(locator);
   *
   * @param {string} dropDownName - The name (or label) of the dropdown.
   * @returns {string} XPath locator for the specified dropdown container.
   */
  dropDownLocator: (dropDownName: string): string =>
    `//div[contains(@class, "container")][contains(@id, "${dropDownName.toLowerCase()}")]`,
};
