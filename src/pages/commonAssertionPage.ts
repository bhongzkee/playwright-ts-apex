import { Page, expect, Locator } from '@playwright/test';
import { ChallengePageLocators } from '../locators/challengePageLocators';

export class UserAssertPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Wait for a specific text to appear on the page.
   * Usage:
   *   await userAssert.waitForPageToHaveText("text to wait for");
   */
  async waitForPageToHaveText(text: string, timeout: number = 10000): Promise<void> {
    await this.page.waitForFunction(
      (expected) => document.body.innerText.includes(expected),
      text,
      { timeout }
    );
    console.log(`✅ The text "${text}" is found on the page.`);
  }

  /**
   * Assert that a specific item on the page has the expected value.
   * Usage:
   *   await userAssert.assertItemValue("Item Name", "Expected Value");
   */
  async assertItemValue(itemName: string, expectedValue: string): Promise<void> {
    const itemNameLowerNoSpaces = itemName.toLowerCase().replace(/\s+/g, '');
    const locatorElement: string = `//p[translate(@id, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz') = "${itemNameLowerNoSpaces}"]`;

    try {
      await expect(this.page.locator(locatorElement)).toHaveText(`${itemName}:${expectedValue}`);
    } catch (error: any) {
      throw new Error(
        `The item "${itemName}" with the value "${expectedValue}" not found: ->> ${error.message || error}`
      );
    }

    console.log(`The item "${itemName}" with the value "${expectedValue}" is found.`);
  }








}
