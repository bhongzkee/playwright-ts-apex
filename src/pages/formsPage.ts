import { test, expect, Page } from '@playwright/test';
import { FormsPageLocators } from '../locators/formsPageLocators';
import { CommonUserActionsPage } from './commonUserActionsPage';
import { CommonLocators } from '../locators/commonLocators';

export class FormsPage {
  private page: Page;
  private commonUserAction: CommonUserActionsPage;

  constructor(page: Page) {
    this.page = page;
    this.commonUserAction = new CommonUserActionsPage(page);
  }



/**
 * Uploads a file into the file input field.
 *
 * Example:
 *   await formsPage.uploadFile('profile.jpg');
 *
 * @param {string} fileName - The name of the file located in the test files directory.
 * @param {boolean} [required=true] - Whether the file upload is required.
 * @throws {Error} If the file input element is not visible or upload fails (and required=true).
 */
async uploadFile(fileName?: string, required: boolean = true): Promise<void> {
  if (!fileName) {
    if (required) {
      throw new Error('No file name provided for upload, but upload is required.');
    } else {
      console.warn('No file provided for optional upload. Skipping.');
      return;
    }
  }

  const filePath = `src/testFiles/${fileName}`;
  const fileInput = this.page.locator(FormsPageLocators.uploadFileInputLocator());

  await test.step(`Upload file "${fileName}"`, async () => {
    try {
      await fileInput.waitFor({ state: 'visible', timeout: 5000 });
      await fileInput.setInputFiles(filePath);
      console.log(`File uploaded successfully: ${filePath}`);
    } catch (error: any) {
      if (required) {
        throw new Error(
          `File upload failed for "${fileName}". Reason: ${error instanceof Error ? error.message : String(error)}`
        );
      } else {
        console.warn(`File upload failed for optional file "${fileName}". Reason: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
  });
}




/**
 * Selects an option from a dropdown.
 *
 * Usage:
 *   await userAction.selectFromDropdownOption("state", "NCR");
 *
 * @param {string} dropDownName - The name or identifier of the dropdown container.
 * @param {string} optionName - The visible text of the option to select.
 */
async selectFromDropdownOption(dropDownName: string, optionName: string): Promise<void> {
  await test.step(`Select option "${optionName}" from dropdown "${dropDownName}"`, async () => {
    const dropdownLocator = this.page.locator(FormsPageLocators.dropDownLocator(dropDownName));

    try {
      await dropdownLocator.waitFor({ state: 'visible', timeout: 10000 });
      await dropdownLocator.click();
      await this.page.getByText(optionName, { exact: true }).click();
      console.log(`Selected "${optionName}" from dropdown "${dropDownName}"`);
    } catch (error) {
      throw new Error(
        `Failed to select option "${optionName}" from dropdown "${dropDownName}". Reason: ${error instanceof Error ? error.message : String(error)}`);
    }
  });
}



/**
 * Selects State and optionally City from dropdowns sequentially.
 *
 * Usage:
 *   await userAction.selectDropdownStateAndCity("NCR", "Delhi");
 *   await userAction.selectDropdownStateAndCity("NCR"); // City optional
 *
 * @param {string} stateName - The state to select.
 * @param {string} [cityName] - Optional city to select (depends on state).
 */
async selectDropdownStateAndCity(stateName: string, cityName?: string): Promise<void> {
  await test.step(`Select State: "${stateName}"${cityName ? ` and City: "${cityName}"` : ''}`, async () => {
    // Select State first
    await this.selectFromDropdownOption('State', stateName);

    // Wait for city list to refresh (important for dynamic dropdowns)
    if (cityName) {
      await this.page.waitForTimeout(500); // short delay to let city dropdown reload
      // Select City next
      await this.selectFromDropdownOption('City', cityName);
    }

    console.log(`Successfully selected State "${stateName}"${cityName ? ` and City "${cityName}"` : ''}`);
  });
}




/**
 * Select multiple hobbies from checkboxes.
 *
 * Example:
 *   await formsPage.selectHobbies("Sports, Reading, Music");
 *
 * @param {string | string[]} hobbiesRaw - Comma-separated string or array of hobbies.
 */
async selectHobbies(hobbiesRaw: string | string[]): Promise<void> {
  await test.step(`Select hobbies: ${hobbiesRaw}`, async () => {
    let hobbies: string[] = [];

    // Parse comma-separated string if needed
    if (typeof hobbiesRaw === 'string') {
      hobbies = hobbiesRaw
        .split(',')
        .map((h) => h.trim())
        .filter((h) => h.length > 0);
    } else if (Array.isArray(hobbiesRaw)) {
      hobbies = hobbiesRaw.map((h) => h.trim()).filter((h) => h.length > 0);
    }

    if (hobbies.length === 0) {
      // Show skip in report
      await test.step(`Skipping hobbies selection — no valid hobbies provided`, async () => {
        console.warn(`Skipping hobbies selection — no valid hobbies provided.`);
      });
      return; // exit early
    }


    for (const hobby of hobbies) {
      await this.commonUserAction.selectCheckbox(hobby);
    }

    console.log(`Selected hobbies: ${hobbies.join(', ')}`);
  });
}





async inputSubjects(valuesRaw: string | string[]): Promise<void> {
  await test.step(`Input Multiple Subjects`, async () => {
    const locatorElement = this.page.locator(CommonLocators.inputFieldLocator('Subjects'));

    let values: string[] = [];
    // Parse input
    if (typeof valuesRaw === 'string') {
      values = valuesRaw.split(',').map((v) => v.trim()).filter((v) => v.length > 0);
    } else if (Array.isArray(valuesRaw)) {
      values = valuesRaw.map((v) => v.trim()).filter((v) => v.length > 0);
    }

    // Skip gracefully if no valid values
    if (values.length === 0) {
      // This will appear in the report console/log
      await test.step(`Skipping Subjects — no valid values provided`, async () => {
        console.warn(`Skipping Subjects — no valid values provided.`);
      });
      return;
    }


    try {
      await locatorElement.waitFor({ state: 'visible', timeout: 20000 });
    } catch (error: any) {
      throw new Error(
        `The field Subjects was not found or visible. Details: ${
          error instanceof Error ? error.message : error
        }`
      );
    }

    for (const value of values) {
      await locatorElement.type(value, { delay: 100 });
      await this.page.keyboard.press('Enter');
      await this.page.waitForTimeout(500);
    }

    console.log(`Completed input for Subjects with values: ${values}`);
  });
}




  /**
   * Verifies that the form submission was successful.
   *
   * Example:
   *   await formsPage.verifyFormSubmissionSuccess();
   *
   * @throws {Error} if the success message is not visible.
   */
  async verifyFormSubmissionSuccess(message: string): Promise<void> {
    await test.step('Verify form submission success message', async () => {
      try {
        await expect(this.page.getByText(message)).toBeVisible({ timeout: 5000 });
        console.log('Form submission success message is visible.');
      } catch (error: any) {
        throw new Error(
          `Form submission confirmation message "${message}" not visible. Details: ${error instanceof Error ? error.message : error}`
        );
      }
    });
  }






}
