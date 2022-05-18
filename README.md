# Introduction to React
This is my playbook for React JS

### Project structure

- Src dir with all the files
- App.js to handle the script
- Index.html As the homepage
- Style.css for styling
- Package.json for node modules and dependecies

```mermaid
classDiagram
    Src <|-- App
    Src <|-- index
    Src <|-- style
    Src <|-- package
    Src: +Files
    class App {
        +Javascript
    }
    class index {
        +HTML
    }
    class style {
        +CSS
    }
    class package {
        +JSON
    }
```

Add package.json
>npm init
