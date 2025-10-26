/**
 * SelectMenuPageLocators
 *
 * Dynamic XPath locators for elements on the Select Menu Page.
 * Each locator is a function that returns a selector string
 * based on the provided parameter.
 */
export const SelectMenuPageLocators = {

  /**
   * Locator for old-style dropdowns (native <select>) by label.
   *
   * Usage:
   *   const locator = SelectMenuPageLocators.dropdownOldLocator("Color");
   *   await page.selectOption(locator, "Red");
   *
   * @param {string} dropdownLabel - The label text of the dropdown.
   * @returns {string} XPath locator for the native <select> dropdown.
   */
  dropdownOldLocator: (dropdownLabel: string): string =>
    `//div[div[contains(text(), "${dropdownLabel}")]]/following-sibling::div[1]//select`,

  /**
   * Locator for React dropdowns by label (clickable divs).
   *
   * Usage:
   *   const locator = SelectMenuPageLocators.dropdownReactLocator("Select Value");
   *   await page.click(locator);
   *
   * @param {string} dropdownLabel - The label text of the React dropdown.
   * @returns {string} XPath locator for the React dropdown container.
   */
  dropdownReactLocator: (dropdownLabel: string): string =>
    `//div[div[contains(text(), "${dropdownLabel}")]]/following-sibling::div[1]/div/div`,

  /**
   * Locator for multi-select dropdowns by label.
   *
   * Usage:
   *   const locator = SelectMenuPageLocators.dropdownMultiSelectLocator("Cars");
   *   await page.click(locator);
   *
   * @param {string} dropdownLabel - The label text of the multi-select dropdown.
   * @returns {string} XPath locator for the multi-select dropdown container.
   */
  dropdownMultiSelectLocator: (dropdownLabel: string): string =>
    `//p[b[contains(text(), "${dropdownLabel}")]]/following-sibling::div[contains(@class, "container")]`,

  /**
   * Locator for all React dropdown options.
   *
   * Usage:
   *   const options = await page.$$(SelectMenuPageLocators.dropdownReactOptionsLocator());
   *
   * @returns {string} XPath locator for all React dropdown options.
   */
  dropdownReactOptionsLocator: (): string =>
    `//div[contains(@id,"react-select") and contains(@class,"option")]`,

  /**
   * Locator for a specific React option by visible text.
   *
   * Usage:
   *   const locator = SelectMenuPageLocators.reactOptionsLocator("Green");
   *   await page.click(locator);
   *
   * @param {string} option - The visible text of the React option.
   * @returns {string} XPath locator for the specific React option.
   */
  reactOptionsLocator: (option: string): string =>
    `//div[contains(@id,"react-select") and contains(@class,"option")][normalize-space(.)="${option}"]`,

  /**
   * Locator for selected tag in a React multi-select dropdown.
   *
   * Usage:
   *   const locator = SelectMenuPageLocators.reactTagOptionLocator("Green");
   *   const tagText = await page.textContent(locator);
   *
   * @param {string} option - The visible text of the tag option.
   * @returns {string} CSS locator for the selected tag.
   */
  reactTagOptionLocator: (option: string): string =>
    `.css-1rhbuit-multiValue >> text=${option}`,

  /**
   * Locator for currently selected value in a React single-select dropdown.
   *
   * Usage:
   *   const locator = SelectMenuPageLocators.reactSelectedOptionLocator("Select Value");
   *   const value = await page.textContent(locator);
   *
   * @param {string} dropdownLabel - The label text of the React dropdown.
   * @returns {string} XPath locator for the currently selected option.
   */
  reactSelectedOptionLocator: (dropdownLabel: string): string =>
    `//div[div[contains(text(), "${dropdownLabel}")]]/following-sibling::div[1]//div[contains(@class, "singleValue")]`,

  /**
   * Locator for standard dropdowns (<select>) by label.
   *
   * Usage:
   *   const locator = SelectMenuPageLocators.dropdownStandardLocator("State");
   *   await page.selectOption(locator, "California");
   *
   * @param {string} dropdownLabel - The label text of the standard dropdown.
   * @returns {string} XPath locator for the <select> dropdown.
   */
  dropdownStandardLocator: (dropdownLabel: string): string =>
    `//div[p[b[contains(text(), "${dropdownLabel}")]]]/select`,
};
