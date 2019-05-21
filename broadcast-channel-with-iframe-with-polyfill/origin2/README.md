# Webpack 4 boilerplate for ESNext and SCSS
This boilerplate will quickly set you up with:
- Webpack 4
- ESNext with source maps (plus: class-properties, es2015-modules-commonjs and object-rest-spread)
- SCSS with source maps and autoprefixer
- webpack dev server with Live Reload
- Copying images on build
- Cleaning dist folder on build
- Separate configuration for dev and prod
- CSS and JS optimisation on prod build
- Prettier-standard
- ESLint

## Installation
1) Run the following in a location of your choosing:
```
git clone git@github.com:liranh85/webpack-boilerplates.git
```
2) Copy the `esnext-scss` directory to the location you'd like your project to be in
3) Rename this directory to your project name
4) Inside your new project directory, run:
```
npm install
```

## Usage

### Development
1) Start the webpack-dev-server
```
npm start
```
2) In your browser, navigate to http://localhost:8081

Webpack will now watch your code, and when a change is detected, it will re-compile it and reload the page in your browser.

### Build
```
npm run build
```
Production code will then be available in the `dist` directory

### JS Format (using prettier-standard)
```
npm run format
```

### ESLint
```
npm run lint
```

## Dependencies
None

## Contributing
Feel free to submit issues and pull requests