# Notes App with React Native

This project is created to test my skills with React Native, a component
library, state management and navigation.

## Description

This is a notes app. The behaviour and looking was inspired by "Google Keep
Notes", but it is pretty much a notes CRUD app, so you can create,
visualize/list, update and delete notes. Also there is a little "profile"
section in which you can set you personal info (first and last names).

**Note**: The app is called "YANA" (Yet Another Notes App).

## Characteristics

- React Native
- App icons
- Launch/splash screen
- Native Base (component library)
- Redux with redux toolkit
- Navigation to different screens.
- Async storage
- Persistance with redux-persist library (the app state is restore after reopen
  it so you don't loose your info/notes)
- Loading component/screen to wait for redux-persist to restore the state
- Material design
- Responsive design
- You can filter/search notes (looks for matches in the title and content of the
  notes). It is also case insensitive
- Long press a note from the list to show the "delete menu"
- Validations:
  - Empty note title and content discards the note
  - First name field in profile section is required (not empty)

## Requirements

- Node JS version: 14.18.1
- npm version: 6.14.15
- OpenJDK (Java) version: openjdk 11.0.11 2021-04-20
- Android SDK platform version: 29 (Android 10.0 **Q**)
- Android SDK Build-Tools version: 29.0.2
- Emulator image: Google APIs Intel x86 Atom System Image
- watchman version: 4.9.0
- OS type/version: Ubuntu 20.04.3 LTS

**Notes**:

- These versions/technologies may not be mandatory, but were used to developt
  the app so I can confirm that at least this setup will work.
- The complete documentation setup was taken from [React Native
  environment setup](https://reactnative.dev/docs/environment-setup) (documentation
  version **0.66** -> "React Native CLI Quickstart" -> "Linux" -> "Android")
- It is tested only in Android. Thus, I'm pretty sure that it won't work in iOS.
  To make it work with iOS, you may need the proper configuration for the npm
  packages used in the project and their respective configurations in the "ios"
  project directory.

## Setup

**Note**: All the commands should be executed in the root directory of the
project.

1. Install the dependencies:

```bash
npm install
```

2. Start your Android emulator or connect your physical Android device and make
   sure that it is in debug mode. You can run `adb devices` and either your
   emulator or physical Android device (or both) should show up.

3. Start Metro (the React Native bundler):

```bash
npm run start
```

4. "Build" the app into the emulator/device (open another terminal to execute
   the following command):

```bash
npm run android
```

Now the development environment should be ready and the device listening for
file changes.
