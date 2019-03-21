# React Material Web Components + UXPin Merge
Integration of [RMWC library](https://jamesmfriedman.github.io/rmwc/) with UXPin Merge Technology.

![alt text](https://github.com/uxpin-merge/rmwc-merge/blob/master/img/header.png "RMWC in UXPin")

## About RMWC

RMWC is a collection of React Wrappers for official Google's material-components library. Created and maintained by James Friedman 🙌.
To support RMWC please consider donation: https://opencollective.com/rmwc

## About UXPin Merge

Merge is a revolutionary technology that lets users import (and keep in sync) coded React.js components from GIT repositories to UXPin editor.
The imported components are 100% identical to components used by developers during the development process.
It means that components are going to look and, function (interactions, data) identical to the real product experienced by the users.

[UXPin](http://uxpin.com) is a leading code–based design platform.

## How to use Merge integration with RMWC?

Merge is currently only available to selected beta users.

1. Fork this repository and clone it to your computer.
2. Install dependencies with `npm install`
3. Log in to your UXPin beta account (approved for alpha and beta tests by UXPin Inc.)
4. Start Merge dev environment with `npm start`

If you wish to push RMWC components to your UXPin account or set-up a continues integration with a CI server - contact UXPin on Merge alpha Slack community.

## Supported components

| Component     | RMWC url      | Status|
| ------------- |:-------------:| :-----|
| Button        | [RMWC Buttons](https://jamesmfriedman.github.io/rmwc/buttons) | ✅ Full Support |
| Fab      | [RMWC Fabs](https://jamesmfriedman.github.io/rmwc/fabs)      | ✅ Full Support |
| Icon Button | [RMWC Icon Button](https://jamesmfriedman.github.io/rmwc/icon-buttons)     | ✅ Full Support |
| Card | [RMWC Card](https://jamesmfriedman.github.io/rmwc/cards)     | ✅ Full Support |
| Chips | [RMWC Chips](https://jamesmfriedman.github.io/rmwc/chips) | ✅ Full Support |
| Data Tables | [RMWC Data Tables](https://jamesmfriedman.github.io/rmwc/data-tables) | 🔶 Partial Support. Sorting doesn't work.|
| Dialogs | [RMWC Dialogs](https://jamesmfriedman.github.io/rmwc/dialogs) | 🔻 Not Supported. Issues with absolutely positioned elements. |
| Drawers | [RMWC Drawers](https://jamesmfriedman.github.io/rmwc/drawers) | 🔶 Partial Support. Full support, except absolutely positoned full page drawer. |
| Elevation | [RMWC Elevation](https://jamesmfriedman.github.io/rmwc/elevation) | ✅ Full Support |
| Grid Lists | [RMWC Grid Lists](https://jamesmfriedman.github.io/rmwc/grid-lists) | 🔶 Partial Support. TileContent are logging unknown errors. |
| Image Lists | [RMWC Image Lists](https://jamesmfriedman.github.io/rmwc/image-lists) | ✅ Full Support |
| Checkbox | [RMWC Checkbox](https://jamesmfriedman.github.io/rmwc/checkboxes) | ✅ Full Support |
| Radio | [RMWC Radio](https://jamesmfriedman.github.io/rmwc/radio-buttons) | ✅ Full Support |
| Select Menus | [RMWC Select Menus](https://jamesmfriedman.github.io/rmwc/select-menus) | ✅ Full Support |
| Sliders | [RMWC Select Menus](https://jamesmfriedman.github.io/rmwc/sliders) | ✅ Full Support |
| Switches | [RMWC Switches](https://jamesmfriedman.github.io/rmwc/switches) | ✅ Full Support |
| Text Fields | [RMWC Switches](https://jamesmfriedman.github.io/rmwc/switches) | ✅ Full Support. 🐜 Known small CSS bugs in outlined version. |
| Layout Grid | [RMWC Switches](https://jamesmfriedman.github.io/rmwc/layout-grid) | ✅ Full Support |
| Linear Progress | [RMWC Switches](https://jamesmfriedman.github.io/rmwc/progress) | ✅ Full Support |
| Circular Progress | [RMWC Switches](https://jamesmfriedman.github.io/rmwc/progress) | ✅ Full Support |
| Lists | [RMWC Switches](https://jamesmfriedman.github.io/rmwc/lists) | ✅ Full Support |
| Menus | [RMWC Switches](https://jamesmfriedman.github.io/rmwc/menus) | 🔶 Partial Support. Only simple menu supported. Due to the state management requirement of full version. |
| Ripples | [RMWC Switches](https://jamesmfriedman.github.io/rmwc/menus) | ✅ Full Support |
| Snackbars | [RMWC Switches](https://jamesmfriedman.github.io/rmwc/snackbards) | 🔻 Not Supported. Issues with absolutely positioned elements.|
| Tabs | [RMWC Switches](https://jamesmfriedman.github.io/rmwc/snackbards) | ✅ Full Support |
| TopAppBar | [RMWC Toolbars](https://jamesmfriedman.github.io/rmwc/top-app-bar) | ✅ Full Support |
| Toolbars | [RMWC Toolbars](https://jamesmfriedman.github.io/rmwc/toolbars) | ✅ Full Support |
| Typography | [RMWC Toolbars](https://jamesmfriedman.github.io/rmwc/typography) | ✅ Full Support |
| Icons | [RMWC Toolbars](https://jamesmfriedman.github.io/rmwc/icons) | ✅ Full Support |

## Theming

To change the theme - modify `theme.css` file located in the `./src/Wrapper/` directory. ThemeProvider was unfortunately causing bugs with some of the components. The functionality is identical in both approaches.

## Video


![alt text](https://github.com/uxpin-merge/rmwc-merge/blob/master/img/rmwc.gif "RMWC in UXPin")


