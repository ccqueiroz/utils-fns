# @utils-fns/utils-fns

![npm](https://img.shields.io/npm/v/@utils-fns/utils-fns)
[![License](https://img.shields.io/github/license/ccqueiroz/utils-fns)](LICENSE)
[![Repository](https://img.shields.io/badge/repository-GitHub-blue.svg)](https://github.com/ccqueiroz/utils-fn)
## README versions
[Portuguese 🇧🇷](./README-pt.md)  |  [English 🇺🇸](./README.md)

<p align="justify">
  The @utils-fns/utils-fns library is being developed with the aim of providing unified tools that facilitate programmers' daily tasks. Our motivation is to simplify common tasks, such as validators, value masking, classification, search and conversion methods, offering a comprehensive and efficient solution and making it possible to use this set of libraries in web - mobile - service environments.
</p>

## ✨ Features
### Validations: The ```@utils-fns/validators``` library provides the following validators:
- [x] **cpfValidator**
- [x] **nisValidator**
- [x] **emailValidator**
- [x] **cnpjValidator**
- [x] **phoneValidator**
- [x] **paymentCardValidator (luhn algorithm)**
- [x] **paymentSlipValidator (ITF-14)**
- [x] **stateRegistrationValidator (inscrição estadual - BR)**
- [x] **voterRegistrationValidation (título de eleitor - BR)**
- [x] **cnhValidator**
- [x] **renavamValidator**
- [x] **cepValidator (cep - BR)**

Link to module documentation ```@utils-fns/validators```: https://github.com/ccqueiroz/utils-fns/blob/main/packages/validators/README.md

### Mask: The ```@utils-fns/mask``` library provides the following masks:
**Module under construction**

- [ ] **cpfMask**
- [ ] **nisMask**
- [ ] **emailMask**
- [ ] **cnpjMask**
- [ ] **phoneMask**
- [ ] **creditcardMask (luhn algorithm)**
- [ ] **paymentSlipMask (ITF-14)**
- [ ] **stateRegistrationMask (inscrição estadual - BR)**
- [ ] **voterRegistrationMask (título de eleitor - BR)**
- [ ] **cnhMask**
- [ ] **renavamMask**
- [ ] **licensePlateMask (placa de carros - BR)**
- [ ] **cepMask (cep - BR)**
- [ ] **creaMask(BR)**
- [ ] **crmMask(BR)**
- [ ] **generalRegexMask**

Link to module documentation ```@utils-fns/mask```: **Under Construction**

### Utils: The ```@utils-fns/utils``` library provides the following utilities:
**Module under construction**

- [x] **Data List Cities (BR)**
- [x] **Data List States (BR)**
- [x] **Data List Countries**
- [x] **Lunh Algorithm**
- [x] **Lunh Algorithm Mod10**
- [x] **Lunh Algorithm Mod11**
- [x] **Payment Card Data List**
- [x] **Normalize Words**
- [ ] **Sorting Algorithms**
  - [ ] **Bubble Sort**
  - [ ] **Merge Sort**
  - [ ] **Quick Sort**
  - [ ] **Heap Sort**
  - [ ] **Alphanumeric Sort**
  - [ ] **Heap**
  - [ ] **Selection**
  - [ ] **Bubble**
  - [ ] **Merge**
- [ ] **Searching Algorithms**
  - [ ] **Binary Search**
  - [ ] **Breadth-First**
  - [ ] **Depth-First**
  - [ ] **Exponential Search**
  - [ ] **Heap Sort**
- [ ] **Generate File Hash**
- [ ] **converter base64**
- [ ] **unConverter base64**
- [ ] **Params serializer**
- [ ] **PrintPDF**
- [ ] **Blob dowload**
- [ ] **Generate Password**
- [ ] **Convert Hex To RGB**
- [ ] **Add Opacity In Color Rgb**

Link to module documentation ```@utils-fns/utils```: https://github.com/ccqueiroz/utils-fns/blob/main/packages/utils/README.md

## 🖥 Supported Environments
- Applications with javascript ES6 or higher
  - Modern Browsers
  - Server-side
  - Electron
  - Mobile

## 📦 Install
To install the @utils-fns/utils-fns library: use your preferred package manager

```javascript
  yarn add @utils-fns/utils-fns

  or

  npm install @utils-fns/utils-fns
```
## 🔨 How to use
To access the features, just follow the example:

```javascript
  //ES6
  import { validators, utils, mask } from "@utils-fns/utils-fns";
```
```javascript
  //CommomJS
  const { validators, utils, mask } = require("@utils-fns/utils-fns");
```
So, just choose which validation tool will be used.

```javascript
  const cpfValidation = validators.cpf('64912007013')
  //return true
```
### Typescript
```@utils-fns/utils-fns``` is written in TypeScript with complete definitions.
### Author

<div style="margin-top: 15px; margin-bottom: 5px;">
    <img style="border-radius: 50%;" src="https://github.com/ccqueiroz.png" width="100px;" alt=""/>
    <br />
    <sub style="margin-left: 15px">
        <b>Caio Queiroz</b>
    </sub>
</div>

[![Linkedin Badge](https://img.shields.io/badge/-Caio%20Queiroz-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/caio-queiroz-83846399/)](https://www.linkedin.com/in/caio-queiroz-83846399/)
[![Gmail Badge](https://img.shields.io/badge/-caio.cezar.dequeiroz@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:caio.cezar.dequeiroz@gmail.com)](mailto:caio.cezar.dequeiroz@gmail.com)


## Licença

This API is licensed [MIT](./LICENSE).