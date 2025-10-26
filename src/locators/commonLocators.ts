/**
 * CommonLocators
 *
 * Centralized repository for reusable dynamic XPath locators.
 * Each locator is defined as a function that accepts a parameter
 * (e.g., button name, field name) and returns the corresponding XPath.
 */

export const CommonLocators = {
  
  
  /**
   * Locator for a button element.
   * - Matches button text case-insensitively.
   *
   * Example:
   *   CommonLocators.buttonLocator("Register")
   *   → //button[contains(translate(normalize-space(string()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), "add to cart")]
   */
  buttonLocator: (buttonName: string): string =>
    `//button[contains(
        translate(normalize-space(string()), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),
        "${buttonName.toLowerCase()}"
      )]`,

  
  
  
  /**
   * Locator for input fields or textareas.
   * - Matches based on placeholder, label, or name attributes.
   * - Also supports textarea inside a div with a label.
   *
   * Example:
   *   CommonLocators.inputFieldLocator("Email")
   *   → //input[@placeholder="Email" or @label="Email" or @name="Email"]
   *     | //textarea[@placeholder="Email" or @label="Email" or @name="Email"]
   *     | //div[div[label[contains(string(), "Email")]]]//textarea
   */
  inputFieldLocator: (fieldName: string): string =>
    `//input[@placeholder="${fieldName}" or @label="${fieldName}" or @name="${fieldName}"]
     | //textarea[@placeholder="${fieldName}" or @label="${fieldName}" or @name="${fieldName}"]
     | //div[div[label[contains(normalize-space(.), "${fieldName}")]]]//input`,




  /**
   * Locator for a dropdown option.
   * Example:
   *   CommonLocators.dropdownOptionLocator("Philippines")
   *   → //div[label[contains(text(), "Philippines")]]/select
   */
  dropdownOptionLocator: (optionName: string): string =>
    `//div[label[contains(text(), "${optionName}")]]/select`,




/**
 * Returns the XPath locator for a checkbox input associated with a visible label.
 *
 * Example:
 *   CommonLocators.checkBoxLocator("Sports");
 *   → //div[label[contains(normalize-space(.), "Sports")]]//input[@type="checkbox"]
 *
 * @param {string} labelName - The visible label text next to the checkbox.
 * @returns {string} XPath locator string for the checkbox input element.
 */
  checkBoxLocator: (labelName: string): string =>
    `//div[label[contains(normalize-space(.), "${labelName}")]][input[@type="checkbox"]]`,


    
/**
 * Returns the XPath locator for a radio button input associated with a visible label.
 *
 * Example:
 *   CommonLocators.radioButtonLocator("Male");
 *   → //div[label[contains(normalize-space(.), "Male")]]//input[@type="radio"]
 *
 * @param {string} labelName - The visible label text next to the radio button.
 * @returns {string} XPath locator string for the radio button input element.
 */
  radioButtonLocator: (labelName: string): string =>
    `//div[label[contains(normalize-space(.), "${labelName}")]][input[@type="radio"]]`,  


  datePickerLocator: (labelName: string): string =>
    `//div[div[label[contains(normalize-space(.), "${labelName}")]]]//input`,



 
};


