

### Project Description
This project is an **end-to-end test automation framework** built using [Microsoft Playwright](https://playwright.dev/).  
It follows the **Page Object Model (POM)** design pattern for maintainability.

The framework is designed to:
- Automate user actions and assertions across web pages with meaningful error message
- Separate test logic from UI interactions
- Run on multiple browsers (Chromium, Firefox, WebKit)
- Ready Allure reporting setup (to be enable on config file)

---

### Framework Setup and Dependencies

#### Prerequisites
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)
- A GitHub account with repository access

#### Dependencies
The project uses:
- **Playwright** – Test automation framework
- **@playwright/test** – Playwright’s built-in test runner

You can find them in `package.json`.

Install all dependencies with:
```bash
npm install



How to Clone and Execute Tests
Clone the repository
git clone https://github.com/bhongzkee/playwright-ts-project-apex.git
cd playwright-ts-project-apex

Install dependencies
npm install
npx playwright install


Run a specific test file
npx playwright test SubmitStudentFormMultiDataSetTest.spec.ts

Run all tests
npx playwright test


Expected Test Outputs
bhong@Herminios-MacBook-Pro playwright-ts-apex % npx playwright test                    

Running 15 tests using 4 workers

      1 …tests/ui/FormsTests/SubmitStudentFormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - NoHobbies Test › Input On Text Field: Mobile with Text: 1234567890
      2 [Chromium Browser] › src/tests/ui/FormsTests/SubmitStudentFormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - NoSubject Test
      3 …rc/tests/ui/FormsTests/SubmitStudentFormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - John Test › Select Date "16 Oct 2025" for field "Date of Birth"
      4 …src/tests/ui/FormsTests/SubmitStudentFormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - Jane Doe › Select Date "10 Jan 1995" for field "Date of Birth"
The field "First Name" filled with text: John
The field "First Name" filled with text: Jane
The field "First Name" filled with text: NoHobbies
The field "Last Name" filled with text: Test
The field "Last Name" filled with text: Test
The field "Email" filled with text: Email@Test.com
The field "Last Name" filled with text: Doe
The field "Email" filled with text: Jane@Test.com
The field "Email" filled with text: NoHobbies@Test.com
The radio button for "Male" selected
The radio button for "Female" selected
The radio button for "Female" selected
The field "Mobile" filled with text: 9876543210
The field "Mobile" filled with text: 1234567890
The field "Mobile" filled with text: 1234567890
      1 …ormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - NoHobbies Test › Select State: "Uttar Pradesh" › Select option "Uttar Pradesh" from dropdown "State"
Date "10 Jan 1995" entered in field "Date of Birth"
      4 …rc/tests/ui/FormsTests/SubmitStudentFormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - Jane Doe › Select hobbies: Music › Select on checkbox for Music
Date "16 Oct 2025" entered in field "Date of Birth"
Date "16 Oct 2025" entered in field "Date of Birth"
      3 …tudentFormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - John Test › Select State: "NCR" and City: "Delhi" › Select option "NCR" from dropdown "State"
Completed input for Subjects with values: Math,English
Completed input for Subjects with values: Math,English
Skipping hobbies selection — no valid hobbies provided.
The checkbox for "Sports" selected
File uploaded successfully: src/testFiles/testFileUpload.jpg
The checkbox for "Reading" selected
Selected hobbies: Sports, Reading
No file provided for optional upload. Skipping.
The field "Current Address" filled with text: 
The field "Current Address" filled with text: 123 Test Address
Completed input for Subjects with values: Chemistry,Physics
Selected "Uttar Pradesh" from dropdown "State"
  ✓   1 [Chromium Browser] › src/tests/ui/FormsTests/SubmitStudentFormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - NoHobbies Test (12.7s)
Successfully selected State "Uttar Pradesh"
The checkbox for "Music" selected
      4 …r] › src/tests/ui/FormsTests/SubmitStudentFormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - Jane Doe › Select State: "Uttar Pradesh" and City: "Agra"
Selected hobbies: Music
The button "Submit" clicked
Selected "NCR" from dropdown "State"
  ✓   3 [Chromium Browser] › src/tests/ui/FormsTests/SubmitStudentFormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - John Test (13.5s)
Form submission success message is visible.
File uploaded successfully: src/testFiles/testFileUpload.jpg
The field "Current Address" filled with text: 456 Sample St
      5 [Chromium Browser] › src/tests/ui/WebTableTests/UpdateWebTablesTests.spec.ts:36:7 › Web Table Tests - Update Table Cell Values › Table Cell First Name Should Be Updated
Selected "Uttar Pradesh" from dropdown "State"
      2 …sts/ui/FormsTests/SubmitStudentFormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - NoSubject Test › Select Date "16 Oct 2025" for field "Date of Birth"
Selected "Delhi" from dropdown "City"
Successfully selected State "NCR" and City "Delhi"
The button "Submit" clicked
Form submission success message is visible.
The field "First Name" filled with text: NoSubject
Selected "Agra" from dropdown "City"
Successfully selected State "Uttar Pradesh" and City "Agra"
  ✓   4 [Chromium Browser] › src/tests/ui/FormsTests/SubmitStudentFormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - Jane Doe (13.8s)
      6 [Chromium Browser] › src/tests/ui/WebTableTests/UpdateWebTablesTests.spec.ts:43:7 › Web Table Tests - Update Table Cell Values › Table Cell Last Name Should Be Updated
The button "Submit" clicked
Form submission success message is visible.
The field "Last Name" filled with text: Test
The field "Email" filled with text: NoSubject@Test.com
      7 [Chromium Browser] › src/tests/ui/WebTableTests/UpdateWebTablesTests.spec.ts:50:7 › Web Table Tests - Update Table Cell Values › Table Cell Email Should Be Updated
The radio button for "Male" selected
The field "Mobile" filled with text: 1234567890
Date "16 Oct 2025" entered in field "Date of Birth"
  ✓   2 [Chromium Browser] › src/tests/ui/FormsTests/SubmitStudentFormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - NoSubject Test (15.7s)
Skipping Subjects — no valid values provided.
The checkbox for "Sports" selected
The checkbox for "Reading" selected
Selected hobbies: Sports, Reading
File uploaded successfully: src/testFiles/testFileUpload.jpg
The field "Current Address" filled with text: 123 Test Address
Selected "NCR" from dropdown "State"
Selected "Delhi" from dropdown "City"
Successfully selected State "NCR" and City "Delhi"
The button "Submit" clicked
Form submission success message is visible.
      8 [Chromium Browser] › src/tests/ui/WebTableTests/UpdateWebTablesTests.spec.ts:58:7 › Web Table Tests - Update Table Cell Values › Table Cell Department Should Be Updated
  ✓   6 [Chromium Browser] › src/tests/ui/WebTableTests/UpdateWebTablesTests.spec.ts:43:7 › Web Table Tests - Update Table Cell Values › Table Cell Last Name Should Be Updated (5.9s)
Available Table Rows: [ 'Cierra', 'Alden', 'Kierra' ]
Randomly Selected Row: "Kierra"
The icon edit button for "Kierra" clicked
The field "Last Name" filled with text: Test-qfgek
  ✓   5 [Chromium Browser] › src/tests/ui/WebTableTests/UpdateWebTablesTests.spec.ts:36:7 › Web Table Tests - Update Table Cell Values › Table Cell First Name Should Be Updated (7.3s)
The button "Submit" clicked
Available Table Rows: [ 'Cierra', 'Alden', 'Kierra' ]
Randomly Selected Row: "Alden"
Verify Expected Cell Value - Row: "Kierra", Column: "Last Name", Expected: "Test-qfgek"
      9 [Chromium Browser] › src/tests/ui/WebTableTests/UpdateWebTablesTests.spec.ts:65:7 › Web Table Tests - Update Table Cell Values › Table Cell Age Should Be Updated
The icon edit button for "Alden" clicked
The field "First Name" filled with text: Test-86nvp
The button "Submit" clicked
Verify Expected Cell Value - Row: "Test-86nvp", Column: "First Name", Expected: "Test-86nvp"
     10 [Chromium Browser] › src/tests/ui/WebTableTests/UpdateWebTablesTests.spec.ts:72:7 › Web Table Tests - Update Table Cell Values › Table Cell Salary Should Be Updated
  ✓   7 [Chromium Browser] › src/tests/ui/WebTableTests/UpdateWebTablesTests.spec.ts:50:7 › Web Table Tests - Update Table Cell Values › Table Cell Email Should Be Updated (7.2s)
Available Table Rows: [ 'Cierra', 'Alden', 'Kierra' ]
Randomly Selected Row: "Cierra"
The icon edit button for "Cierra" clicked
The field "Email" filled with text: TestAuto-17rlkh@example.com
The button "Submit" clicked
Verify Expected Cell Value - Row: "Cierra", Column: "Email", Expected: "TestAuto-17rlkh@example.com"
Available Table Rows: [ 'Cierra', 'Alden', 'Kierra' ]
Randomly Selected Row: "Cierra"
     11 …tsTests/SelectMenuTest.spec.ts:33:9 › Select All Available Menu Dropdown Options Test › Select Value › Select each option one by one from "Select Value" › Select option: Group 1, option 1
  ✓   8 [Chromium Browser] › src/tests/ui/WebTableTests/UpdateWebTablesTests.spec.ts:58:7 › Web Table Tests - Update Table Cell Values › Table Cell Department Should Be Updated (6.3s)
Available Table Rows: [ 'Cierra', 'Alden', 'Kierra' ]
Randomly Selected Row: "Alden"
The icon edit button for "Alden" clicked
The field "Department" filled with text: Test-nghuj
The button "Submit" clicked
Verify Expected Cell Value - Row: "Alden", Column: "Department", Expected: "Test-nghuj"
     12 [Chromium Browser] › src/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:37:9 › Select All Available Menu Dropdown Options Test › Select One › Click to open dropdown "Select One"
  ✓  10 [Chromium Browser] › src/tests/ui/WebTableTests/UpdateWebTablesTests.spec.ts:72:7 › Web Table Tests - Update Table Cell Values › Table Cell Salary Should Be Updated (6.4s)
Available Table Rows: [ 'Cierra', 'Alden', 'Kierra' ]
Randomly Selected Row: "Alden"
The icon edit button for "Alden" clicked
The field "Salary" filled with text: 470690
The button "Submit" clicked
Verify Expected Cell Value - Row: "Alden", Column: "Salary", Expected: "470690"
     13 [Chromium Browser] › src/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:41:9 › Select All Available Menu Dropdown Options Test › Old Style Select Menu
Selected option: Group 1, option 1
     11 …tsTests/SelectMenuTest.spec.ts:33:9 › Select All Available Menu Dropdown Options Test › Select Value › Select each option one by one from "Select Value" › Select option: Group 2, option 2
Verified selected: "Group 1, option 1"
Selected option: Group 1, option 2
  ✓   9 [Chromium Browser] › src/tests/ui/WebTableTests/UpdateWebTablesTests.spec.ts:65:7 › Web Table Tests - Update Table Cell Values › Table Cell Age Should Be Updated (9.2s)
Available Table Rows: [ 'Cierra', 'Alden', 'Kierra' ]
Randomly Selected Row: "Alden"
Verified selected: "Group 1, option 2"
Selected option: Group 2, option 1
     12 …idgetsTests/SelectMenuTest.spec.ts:37:9 › Select All Available Menu Dropdown Options Test › Select One › Select each option one by one from "Select One" › Verify the selected option: Mrs.
Selected option: Dr.
The icon edit button for "Alden" clicked
The field "Age" filled with text: 57
Verified selected: "Group 2, option 1"
The button "Submit" clicked
Verify Expected Cell Value - Row: "Alden", Column: "Age", Expected: "57"
Verified selected: "Dr."
Selected option: Group 2, option 2
Selected option: Mr.
     14 [Chromium Browser] › src/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:45:9 › Select All Available Menu Dropdown Options Test › Multi Select DropDown
     11 [Chromium Browser] › src/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:33:9 › Select All Available Menu Dropdown Options Test › Select Value › Log all selected options for "Select Value"
Verified selected: "Group 2, option 2"
Verified selected: "Mr."
Selected option: A root option
Selected option: Mrs.
Verified selected: "A root option"
Verified selected: "Mrs."
     12 …c/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:37:9 › Select All Available Menu Dropdown Options Test › Select One › Select each option one by one from "Select One" › Select option: Other
Selected option: Another root option
Selected option: Ms.
Verified selected: "Another root option"
Dropdown "Select Value" options: [
  'Group 1, option 1',
  'Group 1, option 2',
  'Group 2, option 1',
  'Group 2, option 2',
  'A root option',
  'Another root option'
]
  ✓  11 [Chromium Browser] › src/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:33:9 › Select All Available Menu Dropdown Options Test › Select Value (9.4s)
Verified selected: "Ms."
     15 [Chromium Browser] › src/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:49:9 › Select All Available Menu Dropdown Options Test › Standard multi select
Selected option: Prof.
Verified selected: "Prof."
Selected option: Other
  ✓  12 [Chromium Browser] › src/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:37:9 › Select All Available Menu Dropdown Options Test › Select One (9.8s)
Verified selected: "Other"
Dropdown "Select One" options: [ 'Dr.', 'Mr.', 'Mrs.', 'Ms.', 'Prof.', 'Other' ]
     13 … Dropdown Options Test › Old Style Select Menu › Select and verify each option by text from "Old Style Select Menu" › Select and verify option "Purple" › Select and verify option "Purple"
Old Style Select Menu is visible.
Found 11 option texts: Red, Blue, Green, Yellow, Purple, Black, White, Voilet, Indigo, Magenta, Aqua
Selecting option: "Red"...
Selecting option: "Red"...
Verified selected option: "Red"
Selecting option: "Blue"...
Selecting option: "Blue"...
Verified selected option: "Blue"
Selecting option: "Green"...
Selecting option: "Green"...
Verified selected option: "Green"
Selecting option: "Yellow"...
Selecting option: "Yellow"...
Verified selected option: "Yellow"
Selecting option: "Purple"...
Selecting option: "Purple"...
Verified selected option: "Purple"
     13 …ropdown Options Test › Old Style Select Menu › Select and verify each option by text from "Old Style Select Menu" › Select and verify option "Magenta" › Select and verify option "Magenta"
Selecting option: "Black"...
Selecting option: "Black"...
Verified selected option: "Black"
Selecting option: "White"...
Selecting option: "White"...
     14 …c/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:45:9 › Select All Available Menu Dropdown Options Test › Multi Select DropDown › Retrieve all available options from "Multiselect drop down"
Verified selected option: "White"
Selecting option: "Voilet"...
Selecting option: "Voilet"...
Opened dropdown labeled: "Multiselect drop down"
Verified selected option: "Voilet"
Selecting option: "Indigo"...
Selecting option: "Indigo"...
Verified selected option: "Indigo"
Selecting option: "Magenta"...
Selecting option: "Magenta"...
Verified selected option: "Magenta"
  ✓  13 [Chromium Browser] › src/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:41:9 › Select All Available Menu Dropdown Options Test › Old Style Select Menu (10.0s)
Selecting option: "Aqua"...
Selecting option: "Aqua"...
Verified selected option: "Aqua"
Completed selecting & verifying all options by text.
Found 4 options in "Multiselect drop down".
All available options: [Green, Blue, Black, Red]
     14 … src/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:45:9 › Select All Available Menu Dropdown Options Test › Multi Select DropDown › Select and verify each option in "Multiselect drop down"
Selecting option by text: "Green"
Verified: "Green" is displayed as selected
Selecting option by text: "Blue"
     15 [Chromium Browser] › src/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:49:9 › Select All Available Menu Dropdown Options Test › Standard multi select › Select and verify option "Audi"
"Standard multi select" dropdown is visible.
Found 4 options: Volvo, Saab, Opel, Audi
Selecting option "Volvo"...
Option "Volvo" is selected.
Verified: "Blue" is displayed as selected
Selecting option by text: "Black"
Selecting option "Saab"...
Option "Saab" is selected.
Verified: "Black" is displayed as selected
Selecting option by text: "Red"
Selecting option "Opel"...
Verified: "Red" is displayed as selected
Completed selecting all options for "Multiselect drop down".
  ✓  14 [Chromium Browser] › src/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:45:9 › Select All Available Menu Dropdown Options Test › Multi Select DropDown (10.1s)
Option "Opel" is selected.
Selecting option "Audi"...
Option "Audi" is selected.
  ✓  15 [Chromium Browser] › src/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:49:9 › Select All Available Menu Dropdown Options Test › Standard multi select (9.5s)
All options successfully selected: Volvo, Saab, Opel, Audi

  15 passed (41.0s)

To open last HTML report run:

  npx playwright show-report

bhong@Herminios-MacBook-Pro playwright-ts-apex % npx playwright show-report

  Serving HTML report at http://localhost:9323. Press Ctrl+C to quit.
^C
bhong@Herminios-MacBook-Pro playwright-ts-apex % pwd
/Users/bhong/Documents/playwright-ts-apex
bhong@Herminios-MacBook-Pro playwright-ts-apex % npx playwright test       

Running 15 tests using 4 workers

      1 …tests/ui/FormsTests/SubmitStudentFormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - NoHobbies Test › Input On Text Field: Mobile with Text: 1234567890
      2 [Chromium Browser] › src/tests/ui/FormsTests/SubmitStudentFormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - NoSubject Test
      3 …romium Browser] › src/tests/ui/FormsTests/SubmitStudentFormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - Jane Doe › Select on radio button for Female
      4 [Chromium Browser] › src/tests/ui/FormsTests/SubmitStudentFormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - John Test › Input Multiple Subjects
The field "First Name" filled with text: John
The field "Last Name" filled with text: Test
The field "Email" filled with text: Email@Test.com
The radio button for "Male" selected
The field "Mobile" filled with text: 1234567890
The field "First Name" filled with text: NoHobbies
Date "16 Oct 2025" entered in field "Date of Birth"
The field "Last Name" filled with text: Test
The field "First Name" filled with text: Jane
The field "Email" filled with text: NoHobbies@Test.com
The radio button for "Female" selected
The field "Last Name" filled with text: Doe
The field "Email" filled with text: Jane@Test.com
The field "Mobile" filled with text: 1234567890
      1 [Chromium Browser] › src/tests/ui/FormsTests/SubmitStudentFormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - NoHobbies Test › Input Multiple Subjects
Date "16 Oct 2025" entered in field "Date of Birth"
The radio button for "Female" selected
      3 [Chromium Browser] › src/tests/ui/FormsTests/SubmitStudentFormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - Jane Doe › Input Multiple Subjects
The field "Mobile" filled with text: 9876543210
Date "10 Jan 1995" entered in field "Date of Birth"
      2 …Tests/SubmitStudentFormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - NoSubject Test › Select hobbies: Sports,Reading › Select on checkbox for Reading
The field "First Name" filled with text: NoSubject
The field "Last Name" filled with text: Test
The field "Email" filled with text: NoSubject@Test.com
The radio button for "Male" selected
Completed input for Subjects with values: Math,English
      4 …m Browser] › src/tests/ui/FormsTests/SubmitStudentFormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - John Test › Select State: "NCR" and City: "Delhi"
The checkbox for "Sports" selected
The field "Mobile" filled with text: 1234567890
The checkbox for "Reading" selected
Selected hobbies: Sports, Reading
No file provided for optional upload. Skipping.
The field "Current Address" filled with text: 123 Test Address
Date "16 Oct 2025" entered in field "Date of Birth"
Skipping Subjects — no valid values provided.
The checkbox for "Sports" selected
Selected "NCR" from dropdown "State"
The checkbox for "Reading" selected
      2 …wser] › src/tests/ui/FormsTests/SubmitStudentFormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - NoSubject Test › Select State: "NCR" and City: "Delhi"
Selected hobbies: Sports, Reading
File uploaded successfully: src/testFiles/testFileUpload.jpg
The field "Current Address" filled with text: 123 Test Address
Selected "NCR" from dropdown "State"
Completed input for Subjects with values: Math,English
  ✓   1 [Chromium Browser] › src/tests/ui/FormsTests/SubmitStudentFormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - NoHobbies Test (11.9s)
Skipping hobbies selection — no valid hobbies provided.
File uploaded successfully: src/testFiles/testFileUpload.jpg
The field "Current Address" filled with text: 
  ✓   4 [Chromium Browser] › src/tests/ui/FormsTests/SubmitStudentFormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - John Test (11.9s)
Selected "Uttar Pradesh" from dropdown "State"
Successfully selected State "Uttar Pradesh"
Selected "Delhi" from dropdown "City"
Successfully selected State "NCR" and City "Delhi"
The button "Submit" clicked
Form submission success message is visible.
The button "Submit" clicked
Form submission success message is visible.
  ✓   2 [Chromium Browser] › src/tests/ui/FormsTests/SubmitStudentFormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - NoSubject Test (12.0s)
      5 [Chromium Browser] › src/tests/ui/WebTableTests/UpdateWebTablesTests.spec.ts:36:7 › Web Table Tests - Update Table Cell Values › Table Cell First Name Should Be Updated
      6 [Chromium Browser] › src/tests/ui/WebTableTests/UpdateWebTablesTests.spec.ts:43:7 › Web Table Tests - Update Table Cell Values › Table Cell Last Name Should Be Updated
Selected "Delhi" from dropdown "City"
Successfully selected State "NCR" and City "Delhi"
The button "Submit" clicked
Form submission success message is visible.
      7 …hromium Browser] › src/tests/ui/WebTableTests/UpdateWebTablesTests.spec.ts:50:7 › Web Table Tests - Update Table Cell Values › Table Cell Email Should Be Updated › Click On Button: Submit
Completed input for Subjects with values: Chemistry,Physics
  ✓   3 [Chromium Browser] › src/tests/ui/FormsTests/SubmitStudentFormMultiDataSetTest.spec.ts:24:9 › Forms Tests - Data from CSV › Submit Student Form - Jane Doe (13.3s)
The checkbox for "Music" selected
Selected hobbies: Music
File uploaded successfully: src/testFiles/testFileUpload.jpg
The field "Current Address" filled with text: 456 Sample St
Selected "Uttar Pradesh" from dropdown "State"
Selected "Agra" from dropdown "City"
Successfully selected State "Uttar Pradesh" and City "Agra"
The button "Submit" clicked
Form submission success message is visible.
      8 [Chromium Browser] › src/tests/ui/WebTableTests/UpdateWebTablesTests.spec.ts:58:7 › Web Table Tests - Update Table Cell Values › Table Cell Department Should Be Updated
Available Table Rows: [ 'Cierra', 'Alden', 'Kierra' ]
Randomly Selected Row: "Alden"
The icon edit button for "Alden" clicked
The field "Email" filled with text: TestAuto-lucfaf@example.com
The button "Submit" clicked
  ✓   7 [Chromium Browser] › src/tests/ui/WebTableTests/UpdateWebTablesTests.spec.ts:50:7 › Web Table Tests - Update Table Cell Values › Table Cell Email Should Be Updated (5.3s)
Verify Expected Cell Value - Row: "Alden", Column: "Email", Expected: "TestAuto-lucfaf@example.com"
Available Table Rows: [ 'Cierra', 'Alden', 'Kierra' ]
Randomly Selected Row: "Kierra"
      9 [Chromium Browser] › src/tests/ui/WebTableTests/UpdateWebTablesTests.spec.ts:65:7 › Web Table Tests - Update Table Cell Values › Table Cell Age Should Be Updated
  ✓   5 [Chromium Browser] › src/tests/ui/WebTableTests/UpdateWebTablesTests.spec.ts:36:7 › Web Table Tests - Update Table Cell Values › Table Cell First Name Should Be Updated (7.8s)
Available Table Rows: [ 'Cierra', 'Alden', 'Kierra' ]
Randomly Selected Row: "Cierra"
The icon edit button for "Cierra" clicked
  ✓   6 [Chromium Browser] › src/tests/ui/WebTableTests/UpdateWebTablesTests.spec.ts:43:7 › Web Table Tests - Update Table Cell Values › Table Cell Last Name Should Be Updated (7.9s)
The field "First Name" filled with text: Test-pdz03
Available Table Rows: [ 'Cierra', 'Alden', 'Kierra' ]
Randomly Selected Row: "Kierra"
The icon edit button for "Kierra" clicked
The field "Last Name" filled with text: Test-3gint
The button "Submit" clicked
Verify Expected Cell Value - Row: "Test-pdz03", Column: "First Name", Expected: "Test-pdz03"
The button "Submit" clicked
Verify Expected Cell Value - Row: "Kierra", Column: "Last Name", Expected: "Test-3gint"
     10 [Chromium Browser] › src/tests/ui/WebTableTests/UpdateWebTablesTests.spec.ts:72:7 › Web Table Tests - Update Table Cell Values › Table Cell Salary Should Be Updated
     11 [Chromium Browser] › src/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:33:9 › Select All Available Menu Dropdown Options Test › Select Value
  ✓   8 [Chromium Browser] › src/tests/ui/WebTableTests/UpdateWebTablesTests.spec.ts:58:7 › Web Table Tests - Update Table Cell Values › Table Cell Department Should Be Updated (9.0s)
Available Table Rows: [ 'Cierra', 'Alden', 'Kierra' ]
Randomly Selected Row: "Cierra"
The icon edit button for "Cierra" clicked
The field "Department" filled with text: Test-xtu6r
The button "Submit" clicked
Verify Expected Cell Value - Row: "Cierra", Column: "Department", Expected: "Test-xtu6r"
     12 [Chromium Browser] › src/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:37:9 › Select All Available Menu Dropdown Options Test › Select One
  ✓   9 [Chromium Browser] › src/tests/ui/WebTableTests/UpdateWebTablesTests.spec.ts:65:7 › Web Table Tests - Update Table Cell Values › Table Cell Age Should Be Updated (6.5s)
Available Table Rows: [ 'Cierra', 'Alden', 'Kierra' ]
Randomly Selected Row: "Cierra"
The icon edit button for "Cierra" clicked
The field "Age" filled with text: 33
The button "Submit" clicked
Verify Expected Cell Value - Row: "Cierra", Column: "Age", Expected: "33"
     13 [Chromium Browser] › src/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:41:9 › Select All Available Menu Dropdown Options Test › Old Style Select Menu
  ✓  10 [Chromium Browser] › src/tests/ui/WebTableTests/UpdateWebTablesTests.spec.ts:72:7 › Web Table Tests - Update Table Cell Values › Table Cell Salary Should Be Updated (5.6s)
Available Table Rows: [ 'Cierra', 'Alden', 'Kierra' ]
Randomly Selected Row: "Kierra"
The icon edit button for "Kierra" clicked
The field "Salary" filled with text: 488685
The button "Submit" clicked
Verify Expected Cell Value - Row: "Kierra", Column: "Salary", Expected: "488685"
     14 [Chromium Browser] › src/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:45:9 › Select All Available Menu Dropdown Options Test › Multi Select DropDown
     11 …idgetsTests/SelectMenuTest.spec.ts:33:9 › Select All Available Menu Dropdown Options Test › Select Value › Select each option one by one from "Select Value" › Select option: A root option
     12 …WidgetsTests/SelectMenuTest.spec.ts:37:9 › Select All Available Menu Dropdown Options Test › Select One › Select each option one by one from "Select One" › Verify the selected option: Ms.
Selected option: Group 1, option 1
Verified selected: "Group 1, option 1"
Selected option: Group 1, option 2
Selected option: Dr.
Verified selected: "Group 1, option 2"
Verified selected: "Dr."
Selected option: Group 2, option 1
Selected option: Mr.
Verified selected: "Group 2, option 1"
Verified selected: "Mr."
Selected option: Mrs.
Selected option: Group 2, option 2
Verified selected: "Mrs."
Verified selected: "Group 2, option 2"
Selected option: Ms.
Selected option: A root option
Verified selected: "Ms."
     12 …c/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:37:9 › Select All Available Menu Dropdown Options Test › Select One › Select each option one by one from "Select One" › Select option: Other
     11 [Chromium Browser] › src/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:33:9 › Select All Available Menu Dropdown Options Test › Select Value › Log all selected options for "Select Value"
Verified selected: "A root option"
Selected option: Prof.
Selected option: Another root option
     14 … Browser] › src/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:45:9 › Select All Available Menu Dropdown Options Test › Multi Select DropDown › Open dropdown labeled "Multiselect drop down"
Opened dropdown labeled: "Multiselect drop down"
     13 …ec.ts:41:9 › Select All Available Menu Dropdown Options Test › Old Style Select Menu › Select and verify each option by text from "Old Style Select Menu" › Select and verify option "Blue"
Old Style Select Menu is visible.
Found 11 option texts: Red, Blue, Green, Yellow, Purple, Black, White, Voilet, Indigo, Magenta, Aqua
Selecting option: "Red"...
Selecting option: "Red"...
Verified selected: "Prof."
Verified selected: "Another root option"
Dropdown "Select Value" options: [
  'Group 1, option 1',
  'Group 1, option 2',
  'Group 2, option 1',
  'Group 2, option 2',
  'A root option',
  'Another root option'
]
  ✓  11 [Chromium Browser] › src/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:33:9 › Select All Available Menu Dropdown Options Test › Select Value (11.0s)
Verified selected option: "Red"
Selecting option: "Blue"...
     13 … Dropdown Options Test › Old Style Select Menu › Select and verify each option by text from "Old Style Select Menu" › Select and verify option "Yellow" › Select and verify option "Yellow"
Selecting option: "Blue"...
     15 [Chromium Browser] › src/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:49:9 › Select All Available Menu Dropdown Options Test › Standard multi select
Selected option: Other
Verified selected option: "Blue"
Selecting option: "Green"...
Selecting option: "Green"...
Verified selected option: "Green"
Selecting option: "Yellow"...
Selecting option: "Yellow"...
  ✓  12 [Chromium Browser] › src/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:37:9 › Select All Available Menu Dropdown Options Test › Select One (9.1s)
Verified selected: "Other"
Dropdown "Select One" options: [ 'Dr.', 'Mr.', 'Mrs.', 'Ms.', 'Prof.', 'Other' ]
     14 … src/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:45:9 › Select All Available Menu Dropdown Options Test › Multi Select DropDown › Select and verify each option in "Multiselect drop down"
Found 4 options in "Multiselect drop down".
All available options: [Green, Blue, Black, Red]
Selecting option by text: "Green"
Verified selected option: "Yellow"
     13 … Dropdown Options Test › Old Style Select Menu › Select and verify each option by text from "Old Style Select Menu" › Select and verify option "Indigo" › Select and verify option "Indigo"
Selecting option: "Purple"...
Selecting option: "Purple"...
Verified selected option: "Purple"
Selecting option: "Black"...
Selecting option: "Black"...
Verified selected option: "Black"
Selecting option: "White"...
Selecting option: "White"...
Verified: "Green" is displayed as selected
Selecting option by text: "Blue"
Verified selected option: "White"
Selecting option: "Voilet"...
Selecting option: "Voilet"...
Verified selected option: "Voilet"
Selecting option: "Indigo"...
Selecting option: "Indigo"...
Verified: "Blue" is displayed as selected
Selecting option by text: "Black"
Verified selected option: "Indigo"
  ✓  13 [Chromium Browser] › src/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:41:9 › Select All Available Menu Dropdown Options Test › Old Style Select Menu (9.2s)
Selecting option: "Magenta"...
Selecting option: "Magenta"...
Verified selected option: "Magenta"
Selecting option: "Aqua"...
Selecting option: "Aqua"...
Verified: "Black" is displayed as selected
Selecting option by text: "Red"
Verified selected option: "Aqua"
Completed selecting & verifying all options by text.
Verified: "Red" is displayed as selected
Completed selecting all options for "Multiselect drop down".
  ✓  14 [Chromium Browser] › src/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:45:9 › Select All Available Menu Dropdown Options Test › Multi Select DropDown (8.3s)
  ✓  15 [Chromium Browser] › src/tests/ui/WidgetsTests/SelectMenuTest.spec.ts:49:9 › Select All Available Menu Dropdown Options Test › Standard multi select (7.5s)
"Standard multi select" dropdown is visible.
Found 4 options: Volvo, Saab, Opel, Audi
Selecting option "Volvo"...
Option "Volvo" is selected.
Selecting option "Saab"...
Option "Saab" is selected.
Selecting option "Opel"...
Option "Opel" is selected.
Selecting option "Audi"...
Option "Audi" is selected.
All options successfully selected: Volvo, Saab, Opel, Audi

  15 passed (39.1s)

To open last HTML report run:

  npx playwright show-report







