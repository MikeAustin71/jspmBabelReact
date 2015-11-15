# JSPM Babel React JSX Setup
### Simple Component Hello World Demo
---

This is a working setup configuration for the latest versions of jspm, React,
JSX and babel-6.

The setup includes a work-around for the jspm conflict related to the
babel-runtime (see Item 2-b). Essentially, the conflict means that babel cannot
be configured and executed locally. Therefore, this work-around requires babel
components to be installed globally, instead of locally.

Hopefully, this issue will be addressed in the next release of jspm or babel.
In the meantime, this workaround supports development with the latest version
of React.

**Feel free to make improvements...**

---


## Setup Package Versions

```
jspm version 0.16.14
React version 0.14.2
Babel CLI version 6.1.18
Babel Core version 6.1.19
```

## Browsers
Works in all the following browsers. In IE, the 'bundled' versions seems to
work best.
* Chrome
* FireFox
* Edge
* IE


### 1. Setup initial package.json
```
    npm init
```

### 2. Install Babel Globally
**[Babel Info](https://babeljs.io/)**

##### 2-a Install babel-cli
```
npm install --global babel-cli

```
##### 2-b Due to a jspm version 0.16.14 conflict with babel-6, these presets and plugins will need to be installed globally.


* This will allow for local control and configuration of babel transpiler options.


---

###### 2-b-1 Reference JSPM Warning
The following local installation attempt led to the conflict:
```
jspm install npm:babel-runtime
```

__Result:
"warn babel-runtime@6.1.18 is unsupported for this version of jspm. Use jspm dl-loader --latest to update"__

---
##### 2-b-2 Work-around - Run these npm global installations
* npm install -g babel-preset-react
* npm install -g babel-preset-es2015
* npm install -g babel-preset-stage-0
* npm install -g babel-plugin-transform-react-jsx
* npm install -g babel-plugin-transform-es2015-modules-commonjs
* Note: if you want to use amd loading instead of commonjs run
    * jspm install npm:babel-plugin-transform-es2015-modules-amd

##### See the notes on .babelrc file setup
---



### 3. Install JSPM Globally
```
npm install -g jspm

```

### 4. Install JSPM Locally
```
npm install jspm
```

### 5. Initialize JSPM
```
jspm init
```
* Take Transpiler Option 'Babel'
* Take alternate file storage location if desired (Example: lib instead of jspm_packages directory)
* Take All Other Defaults


### 6. Install Babel Locally
**(If you run [CmdrX](./CmdrXReadMe.md) skip to step 8)**
Note: Due to JSPM conflict sited in Item 2-b above,
we cannot run jspm install npm:babel-runtime with JSPM Version 0.16.14


  * a.  jspm dl-loader --latest
  * b.  jspm dl-loader babel
  * c.  jspm install npm:babel-loader
  * d.  jspm install npm:babel-core
  * e.  jspm install npm:babel-preset-react
  * f.  jspm install npm:babel-preset-es2015
  * g.  jspm install npm:babel-plugin-transform-es2015-modules-commonjs
  * h.  jspm install npm:babel-plugin-transform-react-jsx
  * i.  jspm install npm:babel-polyfill
  * j.  jspm install npm:babel-preset-stage-0


### 7. Install React and other components

  * a. jspm install npm:react
  * b. jspm install npm:react-dom
  * c. jspm install jquery
  * d. jspm install npm:lodash


### 8. Configurations

##### 8-a CREATE '.babelrc' file
**Note: Contains 'babel' transpiler options**

```

{
  "presets": [
      "es2015",
      "react",
      "stage-0"
  ],
  "plugins": [
      "transform-es2015-modules-commonjs",
      "transform-react-jsx"
  ]

}

```

##### 8-b Create 'src' directory
* Locate jsx files here


##### 8-c Create 'build' directory
* Compiled js files deployed here


##### 8-d Create 'prod' directory
* Bundles to be deployed here


### 9. Transpile JSX to Js Using Babel
**Note: 'babel' transpile options are controlled in the '.babelrc' file.

##### 9-a Manual Transpile to 'build' Directory

```
babel src --out-dir build --source-maps true
```
__ babel will take options from '.babelrc' file__


##### 9-b OR!! Set Watch On JSX Directory
```
babel src --watch --out-dir build
```

### 10. Set Up A Server And Run The Application
Choose a server.

##### 10-a jspm-server
 * make sure jspm-server is installed globally.
__jspm install -g jspm-server__

 * To display index.html in the Browser->
Run: __jspm-server__<ENTER>

##### 10-b http-server
 * To display index.html in the Browser npm install -g http-server
 * (if port 8080 it taken, pick any port that is free)
 * Run: __http-server -p 8080__<ENTER>

##### 10-c OR - Any of a half-dozen other servers

### 11. Create Self-Executing Bundle
* a. Create the sfx bundle and output to 'prod' directory
```
jspm bundle-sfx build/main.js prod/app.js  --minify

```

* b. See index2.html for execution example


### 12. To Clone This Repo And Run The Demo App
  * a. Clone the repo to local directory
  * b. cd local Directory
  * c. Run the global npm and jspm installs (Items 1 through 3, above)
  * d. Run: npm install
  * e. Run: jspm install
  * f. See the Item 10 Above: **Set Up A Server And Run The Application**


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
