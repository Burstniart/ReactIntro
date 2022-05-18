# Introduction to React
This is my playbook for React JS

### Project structure

- Src dir with all the files
- App.js to handle the script
- Index.html As the homepage
- Style.css for styling
- Package.json for node modules and dependecies
- .prettierrc to handle standard formatting

```mermaid
classDiagram
    Project <|-- Src
    Project <|-- package
    Project <|-- dot prettierrc
    Src <|-- App
    Src <|-- index
    Src <|-- style
    Project: +Dir files
    class Src {
        +Page files
    }
    class package {
        +JSON
    }
    class dot prettierrc {
        +Prettier
    }
    class App {
        +Javascript
    }
    class index {
        +HTML
    }
    class style {
        +CSS
    }
```

### Add package.json
```npm init```

### Modify package.json
**Add command for prettier to execute**
```json
"scripts": {
    "format": "prettier --write \"src/**/*.{js,jsx}\""
  }
```

**Add command for eslint to execute**
```json
"scripts":{
    "lint": "eslint \"src/**/*.{js,jsx}\" --quiet"
}
```

**Add parcel command**
```json
"scripts":{
    "dev": "parcel src/index.html",
}
```


### Install prettier as dependency

```
npm install --save-dev prettier
```

or

```
npm install -D prettier
```

### Install ESLint
```
npm install -D eslint@8.8.0 eslint-config-prettier@8.3.0
```

### Install Parcel
```
npm install -D parcel@2.2.1
```
### Fix your files
**Prettier**
```
npm run format
```

**ESLint**
```
npm run lint
```

### Set things up
**Add type="module" to tell parcel what you're doing**
```html
<script type="module" src="./App.js"></script>
```

With this command parcel will take care of everything and now it's all set up

```
npm run dev
```
