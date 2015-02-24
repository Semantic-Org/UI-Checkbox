### Version 1.10.0 - February 23, 2015

- **Form Validation** - Validation messages no longer increase field height on `inline fields` like checkboxes after error appears

### UI Changes

- **Form Validation** - Dropdown and checkbox will now validate after interaction with `on: 'blur'`

### Version 1.8.0 - January 23, 2015

- **Checkbox** - Checkbox now only modifies `input[type="radio"]` and `input[type="checkbox"]` ignoring any other inputs

### Version 1.7.0 - January 14, 2015

- **Checkbox** - Checkbox now toggles on spacebar when focused (previously only toggled on enter key).

### Version 1.5.0 - December 30, 2014

- **Checkbox** - Checkboxes now can handle labels with multiple lines of text

### Version 1.2.0 - December 08, 2014

- **Checkbox** - JS Checkbox now handles several variations of html. Labels can be before inputs, after, or not included at all. This should work better with server side form generation.
- **Form** - Fixes required checkbox asterisks formatting incorrect

### Version 1.0.0 - November 24, 2014

- **Checkbox** - Checkbox "enable" and "disable" have been replaced with "check" and "uncheck"
- **Checkbox** - Now correctly handles read-only and disabled, has read-only and disabled states
- **Checkbox** - All styles have been redone. Standard checkboxes are now based around PX and not EM making sure there are no unusual circles or rounding issues. Checkboxes also now use a custom font for glyphs instead of CSS tricks.
- **Checkbox** - Checkbox now have a ``fireOnInit`` setting for firing callbacks on page load
- **Checkbox** - Checkbox now receive a ``checked`` class when checked, making it easier to write css selectors on checked checkboxes, for example when using sibling selectors ``.ui.checked.checkbox + .content { // style }``

### Version 0.16.0 - April 22, 2014

- **Checkbox** - Fixes issue where checkboxes with multiple line labels were appearing formatted incorrectly.

### Version 0.15.5 - April 11, 2014

- **Checkbox** - Fixes ``ui checkbox`` to obey ``disabled`` property of input

### Version 0.15.3 - April 04, 2014

- Adds more examples for static checkbox/radio boxes with HTML only

### Version 0.15.0 - Mar 14, 2014

- **Checkbox** - Checkboxes can now have multiple inputs inside, for use with .NET and other languages that insert their own hidden inputs

### Version 0.13.1 - Feb 28, 2014

- **Checkbox** - Fixes checkbox appearance inside inverted forms

### Version 0.13.0 - Feb 20, 2014

- **Checkbox** - Checkboxes now also trigger DOM ``change`` event

### Version 0.5.1 - Oct 11, 2013

- Fixes vertical alignment of checkboxes

### Version 0.4.0 - Oct 8, 2013

- Updated some checkbox stylings
- Checkboxes markup now more semantic with default markup including only one label tag that can be inside ui checkbox

### Version 0.3.5 - Oct 2, 2013

- Fixes radio checkboxes (again)

### Version 0.3.3 - Oct 2, 2013

- Fixes selector for checkbox to fix radio boxes Issue #154

### Version 0.2.5 - Sep 28, 2013

- Fixes checkbox  selector issue with multiple inputs inside a checkbox

### Version 0.1.0 - Sep 25, 2013