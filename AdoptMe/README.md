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
>npm init

### Modify package.json
Add path for prettier to execute
```json
"scripts": {
    "format": "prettier --write \"src/**/*.{js,jsx}\""
  }
```

### Install prettier as dependency
>npm install --save-dev prettier

or

>npm install -D prettier