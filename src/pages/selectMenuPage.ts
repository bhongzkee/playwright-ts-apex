import { test, Page } from '@playwright/test';
import { SelectMenuPageLocators } from '../locators/selectMenuPageLocators';

export class SelectMenuPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }


/**
 * Selects a single dropdown option by visible text and verifies the selection.
 *
 * @param dropdownLabel - Dropdown label to identify the dropdown
 * @param optionText - The visible text of the option to select
 */
async selectAndVerifyDropdownOption(dropdownLabel: string, optionText: string): Promise<void> {
  const dropdown = this.page.locator(SelectMenuPageLocators.dropdownOldLocator(dropdownLabel));
  await test.step(`Select and verify option "${optionText}"`, async () => {
    console.log(`Selecting option: "${optionText}"...`);

    await dropdown.selectOption({ label: optionText });
    await this.page.waitForTimeout(200);

    // Verify selected option by text
    const selectedText = await dropdown.evaluate((el) => {
      const select = el as HTMLSelectElement;
      return select.selectedOptions[0]?.textContent?.trim() || '';
    });

    if (selectedText !== optionText) {
      console.error(`Verification failed: Expected "${optionText}", but got "${selectedText}".`);
      throw new Error(`Option "${optionText}" was not properly selected.`);
    } else {
      console.log(`Verified selected option: "${selectedText}"`);
    }
  });
}



/**
 * Selects and verifies each option in the "Old Style Select Menu"
 * using the option's visible text instead of value.
 *
 * Example:
 *   await commonUserAction.selectAndVerifyAllDropdownOptionsOldStyle("Old Style Select Menu");
 */
async selectAndVerifyAllDropdownOptionsOldStyle(dropdownLabel: string): Promise<void> {
  await test.step(`Select and verify each option by text from "${dropdownLabel}"`, async () => {
    // Locate dropdown by label
    const dropdown = this.page.locator(SelectMenuPageLocators.dropdownOldLocator(dropdownLabel));
    const optionsLocator = dropdown.locator('option');

    try {
      await test.step('Wait for dropdown to be visible', async () => {
        await dropdown.waitFor({ state: 'visible', timeout: 5000 });
        console.log('Old Style Select Menu is visible.');
      });

      // Extract option texts instead of values
      const optionTexts = await test.step('Extract all option texts', async () => {
        const texts = await optionsLocator.evaluateAll((elements) =>
          elements
            .map((el) => el.textContent?.trim() || '')
            .filter((t) => t && t.length > 0)
        );

        if (texts.length === 0) {
          throw new Error('No valid option texts found in the Old Style Select Menu.');
        }

        console.log(`Found ${texts.length} option texts: ${texts.join(', ')}`);
        return texts;
      });

      // Loop through each option text
      for (const optionText of optionTexts) {
        await test.step(`Select and verify option "${optionText}"`, async () => {
          console.log(`Selecting option: "${optionText}"...`);
          await  this.selectAndVerifyDropdownOption(dropdownLabel, optionText);
        });
      }

      console.log('Completed selecting & verifying all options by text.');
    } catch (error: any) {
      throw new Error(
        `Failed to select or verify Old Style Select Menu options by text. Details: ${error.message || error}`
      );
    }
  });
}





/**
 * Get all and select options from a custom dropdown (React-based) on the DemoQA Select Menu page.
 *
 * @param dropdownLabel - The visible label of the dropdown (e.g., "Select Value")
 * @returns Promise<void>
 */

async selectAndVerifyAllDropdownOptionsReactBased(dropdownLabel: string): Promise<void> {
  let dropdown = this.page.locator(SelectMenuPageLocators.dropdownReactLocator(dropdownLabel));
  await test.step(`Locate the dropdown labeled "${dropdownLabel}"`, async () => {
    // Locate the dropdown container by its label
    await dropdown.waitFor({ state: 'visible', timeout: 5000 });
  });

  await test.step(`Click to open dropdown "${dropdownLabel}"`, async () => {
    await dropdown.click();
    await this.page.waitForTimeout(500); // Small wait to allow options to render
  });

  const optionsLocator = this.page.locator(SelectMenuPageLocators.dropdownReactOptionsLocator());
  await test.step(`Wait for dropdown options to appear`, async () => {
    await optionsLocator.first().waitFor({ state: 'visible', timeout: 5000 });
  });

  const count = await optionsLocator.count();
  const options: string[] = [];
  await test.step(`Select each option one by one from "${dropdownLabel}"`, async () => {
    for (let i = 0; i < count; i++) {
      let optionText = (await optionsLocator.nth(i).innerText()).trim();
      options.push(optionText);

      await test.step(`Select option: ${optionText}`, async () => {
        await optionsLocator.nth(i).click();
        console.log(`Selected option: ${optionText}`);
        await this.page.waitForTimeout(500);
      });

      // Verify the selected option text appears as the current value
      await test.step(`Verify the selected option: ${optionText}`, async () => {
        const selectedDisplay = this.page.locator(SelectMenuPageLocators.reactSelectedOptionLocator(dropdownLabel));
        const displayedValue = await selectedDisplay.innerText();
        if (displayedValue.trim() !== optionText) {
          console.error(`Verification failed for "${optionText}". Displayed: "${displayedValue}".`);
          throw new Error(`Option "${optionText}" not correctly selected in dropdown "${dropdownLabel}".`);
        } else {
          console.log(`Verified selected: "${optionText}"`);
        }
      });

      // Re-open dropdown to select the next option
      if (i < count - 1) await dropdown.click();

    }
  });

  await test.step(`Log all selected options for "${dropdownLabel}"`, async () => {
    console.log(`Dropdown "${dropdownLabel}" options:`, options);
  });
}






/**
 * Selects a specific option from a React-based Multi-Select dropdown and verifies that it appears as selected.
 *
 * ### Example Usage:
 * ```ts
 * await selectMenuPage.selectAndVerifyMultiselectOptions('Multiselect drop down', 'Green');
 * ```
 *
 * @param dropdownLabel - The label text above the dropdown (e.g., "Multiselect drop down").
 * @param option - The visible text of the option to select (e.g., "Green").
 *
 * @throws {Error} Throws an error if the selected option tag is not visible after clicking.
 */
async selectAndVerifyMultiselectOptions(dropdownLabel: string, option: string): Promise<void> {
  await test.step(`Open dropdown labeled "${dropdownLabel}"`, async () => {
    const dropdown = this.page.locator(SelectMenuPageLocators.dropdownMultiSelectLocator(dropdownLabel));
    await dropdown.waitFor({ state: 'visible' });
    await dropdown.click();
    console.log(`Opened dropdown labeled: "${dropdownLabel}"`);
    await this.page.waitForTimeout(1000); // Wait for options to render
  });

  await test.step(`Select option "${option}" from "${dropdownLabel}"`, async () => {
    const optionLocator = this.page.locator(SelectMenuPageLocators.reactOptionsLocator(option));
    await optionLocator.waitFor({ state: 'visible', timeout: 5000 });
    await optionLocator.click();
    console.log(`Selected option by text: "${option}"`);
    await this.page.waitForTimeout(1000);
  });

  await test.step(`Verify selected option "${option}" is displayed in "${dropdownLabel}"`, async () => {
    const dropdown = this.page.locator(SelectMenuPageLocators.dropdownMultiSelectLocator(dropdownLabel));
    const selectedTag = dropdown.locator(SelectMenuPageLocators.reactTagOptionLocator(option));

    await selectedTag.waitFor({ state: 'visible', timeout: 3000 });

    if (await selectedTag.isVisible()) {
      console.log(`Verified: "${option}" is displayed as selected`);
    } else {
      throw new Error(`Option "${option}" was not found in the selected list!`);
    }

    await this.page.waitForTimeout(1000);
  });
}






/**
 * Selects **all available options** from a React-based Multi-Select dropdown
 * (e.g., "Multiselect drop down") and verifies that each selected option tag is visible.
 *
 * ### Usage Example:
 * ```ts
 * await selectMenuPage.selectAndVerifyAllMultiselectOptionsByText('Multiselect drop down');
 * ```
 *
 * @param dropdownLabel - The label text above the dropdown (e.g., "Multiselect drop down")
 *
 * @throws {Error} Throws an error if any selected option does not appear in the selected tags list.
 */
async selectAndVerifyAllMultiselectOptionsByText(dropdownLabel: string): Promise<void> {
  await test.step(`Open dropdown labeled "${dropdownLabel}"`, async () => {
    const dropdown = this.page.locator(SelectMenuPageLocators.dropdownMultiSelectLocator(dropdownLabel));
    await dropdown.waitFor({ state: 'visible' });
    await dropdown.click();
    console.log(`Opened dropdown labeled: "${dropdownLabel}"`);
    await this.page.waitForTimeout(1000); // Wait for options to render
  });

  let optionTexts: string[] = [];

  await test.step(`Retrieve all available options from "${dropdownLabel}"`, async () => {
    const optionsLocator = this.page.locator(SelectMenuPageLocators.dropdownReactOptionsLocator());
    await optionsLocator.first().waitFor({ state: 'visible', timeout: 5000 });

    const optionCount = await optionsLocator.count();
    console.log(`Found ${optionCount} options in "${dropdownLabel}".`);

    for (let i = 0; i < optionCount; i++) {
      const text = (await optionsLocator.nth(i).innerText()).trim();
      optionTexts.push(text);
    }

    console.log(`All available options: [${optionTexts.join(', ')}]`);
  });

  await test.step(`Select and verify each option in "${dropdownLabel}"`, async () => {
    const dropdown = this.page.locator(SelectMenuPageLocators.dropdownMultiSelectLocator(dropdownLabel));

    for (const option of optionTexts) {
      console.log(`Selecting option by text: "${option}"`);
      await this.page.locator(SelectMenuPageLocators.reactOptionsLocator(option)).click();
      await this.page.waitForTimeout(500);

      const selectedTag = dropdown.locator(SelectMenuPageLocators.reactTagOptionLocator(option));
      await selectedTag.waitFor({ state: 'visible', timeout: 3000 });

      if (await selectedTag.isVisible()) {
        console.log(`Verified: "${option}" is displayed as selected`);
      } else {
        throw new Error(`Option "${option}" was not found in the selected list!`);
      }
    }

    console.log(`Completed selecting all options for "${dropdownLabel}".`);
  });
}





/**
 * Selects a single option from a standard multi-select dropdown and verifies it.
 *
 * @param dropdownLabel - label text above the dropdown (e.g., "Standard multi select")
 * @param optionText - The visible text of the option to select
 */
async selectAndVerifySingleOption(dropdownLabel: string, optionText: string): Promise<void> {
  const dropdown = this.page.locator(SelectMenuPageLocators.dropdownStandardLocator(dropdownLabel));
  await test.step(`Select and verify option "${optionText}"`, async () => {
    console.log(`Selecting option "${optionText}"...`);
    await dropdown.selectOption({ label: optionText });
    await this.page.waitForTimeout(300);

    const isSelected = await dropdown.evaluate(
      (el, value) => {
        const select = el as HTMLSelectElement;
        return Array.from(select.selectedOptions).some(
          (opt) => opt.textContent?.trim() === value
        );
      },
      optionText
    );

    if (isSelected) {
      console.log(`Option "${optionText}" is selected.`);
    } else {
      throw new Error(`Option "${optionText}" was not selected.`);
    }

    await this.page.waitForTimeout(300);
  });
}





/**
 * Selects and verifies all options in the "Standard multi select" dropdown
 *
 * Example:
 *   await selectMenuPage.selectAndVerifyAllStandardMultiSelectOptions();
 */
async selectAndVerifyAllStandardMultiSelectOptions(dropdownLabel: string): Promise<void> {
  const dropdown = this.page.locator(SelectMenuPageLocators.dropdownStandardLocator(dropdownLabel));
  const optionsLocator = dropdown.locator('option');

  await test.step(`Verify "${dropdownLabel}" dropdown is visible`, async () => {
    await dropdown.waitFor({ state: 'visible', timeout: 5000 });
    console.log(`"${dropdownLabel}" dropdown is visible.`);
  });

  const optionTexts = await test.step('Extract all option texts', async () => {
    const texts = await optionsLocator.evaluateAll((elements) =>
      elements.map((el) => el.textContent?.trim() || '').filter((t) => t.length > 0)
    );

    if (texts.length === 0) throw new Error(`No valid options found in "${dropdownLabel}" dropdown.`);
    console.log(`Found ${texts.length} options: ${texts.join(', ')}`);
    return texts;
  });

  for (const optionText of optionTexts) {
    await this.selectAndVerifySingleOption(dropdownLabel, optionText);
  }

  await test.step('Select all options at once', async () => {
    await dropdown.selectOption(optionTexts.map((text) => ({ label: text })));
    await this.page.waitForTimeout(200);
  });

  await test.step('Verify all options are selected', async () => {
    const selectedOptions = await dropdown.evaluate((el) =>
      Array.from((el as HTMLSelectElement).selectedOptions).map((opt) => opt.textContent?.trim())
    );

    const missing = optionTexts.filter((opt) => !selectedOptions.includes(opt));
    if (missing.length > 0) {
      console.error(`Not all options selected. Missing: ${missing.join(', ')}`);
      throw new Error(`Failed to select all options in "${dropdownLabel}"`);
    }

    console.log(`All options successfully selected: ${selectedOptions.join(', ')}`);
  });
}





}
