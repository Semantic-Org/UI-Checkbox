### Version 2.2.14 - Jan 29, 2018

- **Form** - Fixes issue where radio checkbox would not return correct value from `get values` **Thanks @tincdev** [#5713](https://github.com/Semantic-Org/Semantic-UI/issues/5713) [#6043](https://github.com/Semantic-Org/Semantic-UI/issues/6043)
- **Checkbox** - Fixes issue where `toggle checkbox` box shadow was missing **Thanks @banandrew** [#5096](https://github.com/Semantic-Org/Semantic-UI/issues/5096)

#### Dropdown

- **Dropdown/Search/Checkbox** - Removes use of deprecated `dispatchEvent` DOM APIs for generating simulated events

### Version 2.2.5 - October, 27, 2016

- **Checkbox** - Adds additional variables for styling toggle checkbox on/off state

### Version 2.2.0 - June 26, 2016

- **Checkbox** - Fixed issue where docs refer to `onEnable` and `onDisable` with checkbox but callback was called `onEnabled` and `onDisabled`, both callbacks will now be valid until 3.0 [#3761](https://github.com/Semantic-Org/Semantic-UI/issues/3761) [#3763](https://github.com/Semantic-Org/Semantic-UI/issues/3763)
- **Checkbox** - Radio buttons received `indeterminate` styles when user has not yet interacted with the page in Chrome

### Version 2.1.6 - Nov 6, 2015

- **Checkbox/Dropdown/Search** - Fixed issue where dropdown/checkbox `change` events were not bubbling. (Dispatched events were swapped to use native `document.creatEvent` in `2.1.5` unfortunately the flag to bubble events was mistakenly off.)

### Version 2.1.5 - Nov 1, 2015

- **Checkbox/Dropdown/Search** - Fixed issue where using `.trigger('change')` would not fire native `change` event. Only triggering event handlers attached with jQuery [#3108](https://github.com/Semantic-Org/Semantic-UI/issues/3108)

#### Features

- **Checkbox** - Added 4 new callbacks `beforeChecked`, `beforeUnchecked`, `beforeDeterminate`, `beforeIndeterminate`. You can now cancel a state change by returning false from these callbacks.

#### Bugs

- **Checkbox** - Clicking a link inside an initialized checkbox `label` will now work correctly, and will not toggle the checkbox. [#2804](https://github.com/Semantic-Org/Semantic-UI/issues/2804)
- **Form** - `disabled field(s)` now remove `pointer-events` allowing it to disable checkbox and dropdown functionality  [#555](https://github.com/Semantic-Org/Semantic-UI/issues/#555)
- **Form Validation** - Fixed issue with `get value(s)` where unchecked checkboxes would not correctly retrieve values

### Version 2.0.7 - July 23, 2015

- **Checkbox** - Fix checkbox "check" appearing italicized when included inside italicized text

### Version 2.0.5 - July 20, 2015

- **Checkbox** - Fix issue with `onChange` not firing when space key is used. Checkbox keyboard shortcuts now occur on `keydown` but cancel events correctly on `keyup` [#2676](https://github.com/Semantic-Org/Semantic-UI/issues/2676)
- **Radio Checkbox** - Fixed regression causing radio checkboxes to all appear selected in chrome due to `:indeterminate` selector [#2505](https://github.com/Semantic-Org/Semantic-UI/issues/2505)

### Version 2.0.4 - July 17, 2015

- **Checkbox** - Checkbox now focuses after click, allowing for tab navigation from current position [#2610](https://github.com/Semantic-Org/Semantic-UI/issues/2610)
- **Checkbox** - Fixed checkbox not using javascript having incorrect colors on focus [#2607](https://github.com/Semantic-Org/Semantic-UI/issues/2607)
- **Checkbox** - Fixed `space` shortcut causing checkbox to trigger twice
- **Checkbox** - Updated `colored` theme to add new focus color variables.
- Updated example in theme guide to include checkbox focus colors

### Version 2.0.3 - July 8, 2015

- **Checkbox** - Checkbox initialized with JS and with `for/id` matching would cause toggle to occur twice on click (making it seem as if nothing was updated) **thanks @malacalypse** [#2572](https://github.com/Semantic-Org/Semantic-UI/issues/2572)

### Version 2.0.1 - July 6, 2015

- **Checkbox** - Fixed issue in chrome where radio checkbox would appear incorrectly when no default value was selected [#2505](https://github.com/Semantic-Org/Semantic-UI/issues/2505)
- **Checkbox** - Fixed issue where radio checkbox were not properly receiving `checked` class [#2506](https://github.com/Semantic-Org/Semantic-UI/issues/2506)

### Version 2.0.0 - June 30, 2015

- **Checkbox** - Checkbox `fireOnInit` now defaults to false. Checkboxes now also *do not require javascript* to function.
- **Checkbox** - Checkbox no longer require javascript to function.
- **Checkbox** - Added support for `indeterminate` checkboxes, along with new stylings.
- **Checkbox** - Now includes separate behaviors for triggering state changes without invoking callbacks `set checked` vs `checked`
- **Checkbox** - Checkbox will now gracefully correct behaviors invoked on the child input element instead of the `ui checkbox`.
- **Checkbox** - Reduced kb size of icon font
- **Checkbox** - Fix `disabled checkbox` sometimes displaying hand cursor
- **Checkbox** - Fixes nested `dropdown` inside `checkbox` causing issues
- **Checkbox** - Fix `:focus` styles only applying if checkbox is unchecked
- **Form Validation** - Fixed `clear` and `reset` causing validation error to appear on checkbox if empty rule was set on checkbox.
- **Checkbox** - Toggle now uses `@primaryColor`

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