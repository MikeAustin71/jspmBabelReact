
# JSPM SystemJs Babel React JSX Quick Setup
### Simple React Demo
---

This is a working setup configuration for the latest versions of jspm, systemjs react, JSX and babel-6.

__For the specific project setup steps, see Section 'Quick Setup/Install Procedures' below.__

The setup includes a work-around for the jspm conflict related to the
babel-runtime (see Item 3-b). Essentially, the conflict means that babel cannot
be configured and executed locally. Therefore, this work-around requires babel
components to be installed globally, instead of locally.

__Word is that the jspm/babel conflict will be resolved in the 0.17.0 jspm release due out in December, 2015.__

In the meantime, this workaround supports development with the latest version
of React.


---


## Setup Package Versions

```
jspm version 0.16.15
react version 0.14.3
babel-cli version 6.2.0
babel-core version 6.2.1
babel-runtime 6.2.0
```

## Browsers
Works in all the following browsers. In IE, the 'bundled' versions seems to
work best.
* Chrome
* FireFox
* Edge
* IE

---

## Quick Setup/Install Procedures

### 1. Create sub-directories
* a. create sub-directory ./src
* b. create sub-directory ./build
* c. create sub-directory ./prod

### 2. Copy and Modify configuration files.
* a. Copy the pre-configured files to your project directory:
    * (1) package.json
    * (2) config.js
    * (3) .babelrc
    * (4) index.html
* b. Modify package.json
    * (1) Modify name and other description elements
    * (2) Modify other descriptive elements as necessary
* c. config.js file
    * (1) If you want an alternate storage directory modify 'paths'. __Note: The default packages folder is "jspm_packages"__

        ```
            paths: {
               "github:*": "lib/github/*",
               "npm:*": "lib/npm/*"
             },
        ```
    * (2) Remainder of the config.js file does not require modification.

### 3. Install Babel Globally
**[Babel Info](https://babeljs.io/)**

#### 3-a Install babel-cli

```
npm install --global babel-cli
```

#### 3-b Work-around for Babel 6 JSPM conflict - Run these npm global installations
* a. npm install -g babel-preset-react
* b. npm install -g babel-preset-es2015
* c. npm install -g babel-preset-stage-0
* d. npm install -g babel-plugin-transform-react-jsx
* e. npm install -g babel-plugin-transform-es2015-modules-commonjs
* f. npm install -g babel-plugin-transform-es2015-modules-amd
* g. npm install -g babel-plugin-transform-es2015-modules-systemjs

### 4. Install JSPM Globally

```
npm install -g jspm
```


### 5. Run npm install from base project directory
```
npm install
```

### 6. Set jspm timeout (This is optional - you may not need it.)

```
jspm config registries.npm.timeouts.lookup 120
```


### 7. Run jspm install from
```
jspm install
```

__Disregard warning messages "babel-runtime@6.2.0 is unsupported for this version of jspm. Use jspm dl-loader --latest to update."__

### 8. Code source jsx files. (./src)

### 9. Transpile JSX to Js Using Babel - Choose a Transpile Option
**Note: 'babel' transpile options are controlled in the '.babelrc' file.

#### 9-a Manual Transpile to 'build' Directory

```
babel src --out-dir build --source-maps true
```
__babel will take options from '.babelrc' file__


#### 9-b OR!! Set Watch On JSX Directory

```
babel src --watch --out-dir build --source-maps true
```

--- 

### 10. Set Up A Server And Run The Application
Choose a server.

#### 10-a jspm-server
 * make sure jspm-server is installed globally.
__jspm install -g jspm-server__

 * To display index.html in the Browser->
Run: __jspm-server__<ENTER>

 * __The jspm-server automatically refreshes to display changes.__

#### 10-b http-server
 * To display index.html in the Browser npm install -g http-server
 * (if port 8080 it taken, pick any port that is free)
 * Run: __http-server -p 8080__<ENTER>

#### 10-c OR - Any of a half-dozen other servers

---
### 11. Bundling - Choose a bundling option
#### 11-a. Create the sfx bundle and output to 'prod' directory
* Create index2.html and link to app.js
* [Sfx](https://github.com/systemjs/systemjs/blob/master/docs/production-workflows.md)

```
jspm bundle-sfx build/main.js prod/app.js  --minify
```

#### 11-b Create a DepCache
* No change required for index.html
* [DepCache](https://github.com/systemjs/systemjs/blob/master/docs/production-workflows.md)


```
jspm  depcache build/main.js
```

---

# Resources

### npm
[npm-cli](https://github.com/npm/npm-cli)


### npm jsx loader
[npm jsx](https://www.npmjs.com/package/npm-loader-jsx)


### React Docs
[React Docs](https://facebook.github.io/react/docs/getting-started.html)

### JSPM Info
[jspm Info](http://jspm.io/)


### JSPM Docs
[jspm docs](https://github.com/jspm/jspm-cli)


### JSPM Bundling
[jspm bundles](https://github.com/jspm/jspm-cli/blob/master/docs/production-workflows.md)

### Systemjs
[Systemjs](https://github.com/systemjs/systemjs)

### Systemjs Config
[Systemjs Config](https://github.com/systemjs/systemjs/blob/master/docs/config-api.md)

### plugin-css Systemjs
[plugin-css](https://github.com/geelen/jspm-loader-css)

### React
[react-docs](http://facebook.github.io/react/docs/getting-started.html)