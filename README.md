## React Native - Currency Converter

### React Native Basics: Build a Currency Converter
Go through this course: https://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter/
- Setup RN Development environment
- Setup RN Debugger (react dev tools, Chrome developer tools, redux logger)
- Implement User Interface using RN flexbox (Home Screen , Currency List Screen, Options Screen, Themes Screen)
- Implement Multiple themes
- Implement Navigation using RN Navigation
- Setup Redux (Actions, Reducers Store)
- Work with Remote API using Redux Saga


### Add Multiple Quote Currencies
-  User should be able to add multiple quote currencies for conversion into base currency

### Project Structure and Organization
- Each folder has a main index.js file
- File names are in kebab-case which is hyphenated-like-this
- index.js files must be used in each dir for shorter imports
- index.js will first import all child files / concerns, and then export them from that one file.
- If a file / concern spans on multiple files, create a separate dir for it
- Always specify prop-types for each component
- Order of prop-type definitions should be that the non-primitives first and primitives second.
- The action-types must follow the noun first convention
- Maintain order of imports 
- Use the object shorthand form of mapDispatchToProps, unless you have a specific reason to customize the dispatching behavior.
- Remove default export
- Prefer single quotes in JSX

### Styling with Styled Components
- Implement styling via styled components
- Handle theme and multiple themes via styled Components' Theme Provider
- Sort all CSS properties by alphabetical order.
- Prefix styled components with 'Styled'

### State Persistence on App Closing
- Implement (e2e) mock Login screen that takes username / password and after a timeout of 500 ms, logs-in user to app
- Default landing screen should be Login screen and when user fills the form, he is redirected to the Currencies Conversion screen
- User should have the ability to mark some currencies as favorite, i.e., show favorite currencies with correctly loaded rates when Currencies screen is rendered
- Implement state persistence, such that when user closes the app, his/her logged-in state along with favourite currencies remain saved
- Implement rehydration of persisted data, i.e., when an app is opened, the logged-in state + favorite currencies are loaded

### UI Library Development with Storybooks
- Install and setup Storybooks for development (installation)
- Configure Storybooks for RN (knobs, actions, folder/file structuring)
- Write stories for all UI components
- Setup structural testing with StoryShots

### To Run this Project
- npx react-native link (for react native icons)
- run cd ios && pod install
- run yarn ios

