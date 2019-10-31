# Ledger

This project is using [oliverfindl/electron-vue-boilerplate](https://github.com/oliverfindl/electron-vue-boilerplate).

## Install

```bash
# Install all dependencies
$ npm install

# [optional] Check and update all dependencies
$ npm outdated
$ npm update
```

## Usage

Inside of `src/electron-app/main.js` edit line `11` and set your MongoDB connection url.

```bash
# [terminal 1] Launch Webpack development server with Vue app loaded
$ npm run dev

# [terminal 2] Launch Electron app connected to Webpack development server
$ npm run start

# [terminal 3] Build installers for your current platform
$ npm run dist
```

## Scripts

```bash
# Alias for watch:vue-app
$ npm run dev

# Alias for build:electron-app and start:electron-app
$ npm run start

# Launch Electron app connected to Webpack development server
$ npm run start:electron-app

# Build Electron app and Vue app
$ npm run build

# Build Electron app
$ npm run build:electron-app

# Build Vue app
$ npm run build:vue-app

# Launch Webpack development server with Vue app loaded
$ npm run watch:vue-app

# Pack Electron app (for development purposes only)
$ npm run pack

# Build installers for your current platform
$ npm run dist

# Build installers for all platforms
$ npm run dist:all

# Build installers for Windows
$ npm run dist:w

# Build installers for macOS
$ npm run dist:m

# Build installers for Linux
$ npm run dist:l

# [internal]
$ npm run postinstall
```

## App structure

```bash
.                                   # root
├── build                           # directory for built installers
├── dist                            # directory for distributables
│   ├── electron-app                # directory for Electron app distributables
│   └── vue-app                     # directory for Vue app distributables
├── src                             # directory for source code
│   ├── electron-app                # directory for Electron app source code
|   |   ├── blockchain              # directory for the Blockchain logic
|   |   |   ├── block.mjs           # blockchain's Block class
|   |   |   ├── blockchain.mjs      # blockchain
|   |   |   └── ledger.mjs          # blockchain initializer
│   │   ├── icon.png                # app icon for Electron app
│   │   └── main.js                 # main Electron app file
│   └── vue-app                     # directory for Vue app source code
│       ├── assets                  # directory for assets (images, video, audio, fonts, etc.)
│       ├── App.vue                 # main Vue component file
│       ├── index.html              # index file for Vue app
│       └── main.js                 # main Vue app file
├── package.json                    # npm configuration file 
├── webpack-electron-app.config.js  # Webpack configuration file for Electron app
└── webpack-vue-app.config.js       # Webpack configuration file for Vue app
```

---

## License

[MIT](http://opensource.org/licenses/MIT)