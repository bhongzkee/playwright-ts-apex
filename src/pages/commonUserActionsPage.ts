import { test, Page, expect } from '@playwright/test';
import { CommonLocators } from '../locators/commonLocators';

export class CommonUserActionsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }



  
  /**
   * Click on button method that can cover any page.
   * Usage:
   *   await userAction.clickOnButton("Add to Cart");
   */
  async clickOnButton(buttonName: string): Promise<void> {
    await test.step(`Click On Button: ${buttonName}`, async () => {
      const locatorElement = this.page.locator(CommonLocators.buttonLocator(buttonName));
      try {
        await locatorElement.first().waitFor({ state: 'visible', timeout: 60000 });
      } catch (error: any) {
        throw new Error(
          `The button "${buttonName}" to be clicked is NOT visible: ->> ${error.message || error}`
        );
      }
      await locatorElement.first().click();
      console.log(`The button "${buttonName}" clicked`);
    });
  }





  /**
   * Input on text field method that can cover any page.
   * Usage:
   *   await userAction.inputOnTextField("Email", "test@example.com");
   */
  async inputOnTextField(fieldName: string, text: string): Promise<void> {
    await test.step(`Input On Text Field: ${fieldName} with Text: ${text}`, async () => {
      const locatorElement = this.page.locator(CommonLocators.inputFieldLocator(fieldName));
      try {
        await locatorElement.waitFor({ state: 'visible', timeout: 20000 });
      } catch (error: any) {
        throw new Error(
          `The field "${fieldName}" is NOT visible: ->> ${error.message || error}`
        );
      }
      await locatorElement.fill(text);
      await locatorElement.press('Tab'); // To trigger any onBlur events
      console.log(`The field "${fieldName}" filled with text: ${text}`);
    });
  }



async inputMultiValues(fieldName: string, values: string[]) {
    await test.step(`Input On Text Field: ${fieldName} with Text: ${values}`, async () => {
      // Guard clause — stop immediately if empty or invalid
      if (!values || values.length === 0 || values.every(v => !v.trim())) {
        throw new Error(
          `No valid values provided for "${fieldName}". Expected at least one value, e.g. ['Maths', 'English']`
        );
      }

      const locatorElement = this.page.locator(CommonLocators.inputFieldLocator(fieldName));
      try {
        await locatorElement.waitFor({ state: 'visible', timeout: 20000 });
      } catch (error: any) {
        throw new Error(
          `The field "${fieldName}" is NOT visible: ->> ${error.message || error}`
        );
      }

      for (const value of values) {
        await locatorElement.type(value);
        // await expect(page.locator('text=Maths').first()).toBeVisible();
        await this.page.waitForTimeout(500); // Small delay to allow suggestions to appear
        await this.page.keyboard.press('Enter');
      }

      console.log(`The field "${fieldName}" filled with text: ${values}`);
    });

}





  /**
   * Select Checknoxn.
   * Usage:
   *   await userAction.selectCheckbox("I agree to the Terms and Conditions");
   */
  async selectCheckbox(labelName: string): Promise<void> {
    await test.step(`Select on checkbox for ${labelName}`, async () => {
      const locatorElement = this.page.locator(CommonLocators.checkBoxLocator(labelName));
      // For meamingful error message
      try {
        await locatorElement.waitFor({ state: 'visible', timeout: 60000 });
      } catch (error: any) {
        throw new Error(
          `The checkbox for "${labelName}" NOT found: ->> ${error.message || error}`
        );
      }
      await locatorElement.click();
      console.log(`The checkbox for "${labelName}" selected`);
    });
  }



  /**
   * Select Checknoxn.
   * Usage:
   *   await userAction.selectCheckbox("I agree to the Terms and Conditions");
   */
  async selectRadioButton(labelName: string): Promise<void> {
    await test.step(`Select on radio button for ${labelName}`, async () => {
      const locatorElement = this.page.locator(CommonLocators.radioButtonLocator(labelName));
      // For meamingful error message
      try {
        await locatorElement.waitFor({ state: 'visible', timeout: 60000 });
      } catch (error: any) {
        throw new Error(
          `The checkbox for "${labelName}" NOT found: ->> ${error.message || error}`
        );
      }
      await locatorElement.click();
      console.log(`The radio button for "${labelName}" selected`);
    });
  }

  

async selectDate(fieldLabel: string, date: string): Promise<void> {
  await test.step(`Select Date "${date}" for field "${fieldLabel}"`, async () => {
    const input = this.page.locator(CommonLocators.datePickerLocator(fieldLabel));

    try {
      await input.waitFor({ state: 'visible', timeout: 5000 });
    } catch (error: any) {
      throw new Error(`Date input field "${fieldLabel}" not visible. Details: ${error instanceof Error ? error.message : error}`);
    }

    await input.click();
    await input.fill(date);
    await input.press('Enter');
    console.log(`Date "${date}" entered in field "${fieldLabel}"`);
  });
}






















}
