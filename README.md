# My Todo UI5 App

A simple SAPUI5 Todo application demonstrating data binding, routing, and UI5 best practices.

---

## Features

- Add, toggle, delete todo items
- Routing between Home and Detail views
- JSONModel based data binding
- UI5 routing and navigation
- UI5 standard controls like List, CheckBox, Button

---

## Project Structure
├── package-lock.json
├── package.json
└── webapp/
    ├── index.html
    ├── mytodo/
    │   ├── Component.js
    │   ├── controller/
    │   │   ├── App.controller.js
    │   │   ├── Detail.controller.js
    │   │   └── Home.controller.js
    │   ├── Index.js
    │   ├── manifest.json
    │   └── view/
    │       ├── App.view.xml
    │       ├── Detail.view.xml
    │       └── Home.view.xml
    └── ui5.yaml
