import { test } from '../../../fixtures/baseTest';


/**
 * Select Menu Feature Tests
 *
 * Features:
 * 1. **Comprehensive coverage:** Validates all dropdown types under the Select Menu page:
 *    - React-based single dropdowns ("Select Value", "Select One")
 *    - Native HTML select element ("Old Style Select Menu")
 *    - React multi-select dropdown ("Multiselect drop down")
 *
 * 2. **Reusable Page Object Methods:** Each dropdown type is handled through dedicated
 *    and encapsulated POM methods (`selectAndVerifyAllDropdownOptionsReactBased`,
 *    `selectAndVerifyAllDropdownOptionsOldStyle`, `selectAndVerifyAllMultiselectOptionsByText`),
 *    ensuring maintainability and readability.
 *
 * 3. **Dynamic option discovery:** The tests automatically retrieve and iterate through
 *    all available options using locators instead of hard-coded values.
 *
 * 4. **Robust verification:** After each selection, the test verifies the chosen value(s)
 *    are displayed correctly within the dropdown, avoiding false positives.
 *
 * 5. **Resilient locator strategy:** Uses semantic or text-based locators instead of dynamic
 *    class names, improving stability across UI changes.
 *
 * 6. **Detailed step reporting:** Every user interaction and verification is wrapped in `test.step()`
 *    for clear, structured reporting in Playwright HTML reports.
 */


test.describe('Select All Available Menu Dropdown Options Test', () => {
    test(`Select Value`, async ({ selectMenuPage }) => {
      await selectMenuPage.selectAndVerifyAllDropdownOptionsReactBased('Select Value');
    });

    test(`Select One`, async ({ selectMenuPage }) => {
      await selectMenuPage.selectAndVerifyAllDropdownOptionsReactBased('Select One');      
    });

    test(`Old Style Select Menu`, async ({ selectMenuPage }) => {
      await selectMenuPage.selectAndVerifyAllDropdownOptionsOldStyle('Old Style Select Menu');
    });

    test(`Multi Select DropDown`, async ({ selectMenuPage }) => {
      await selectMenuPage.selectAndVerifyAllMultiselectOptionsByText('Multiselect drop down');      
    });

    test(`Standard multi select`, async ({ selectMenuPage }) => {
      await selectMenuPage.selectAndVerifyAllStandardMultiSelectOptions('Standard multi select');
    });
    


});

