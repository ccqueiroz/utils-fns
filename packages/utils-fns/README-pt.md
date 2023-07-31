# @utils-fns/utils-fns

![npm](https://img.shields.io/npm/v/@utils-fns/utils-fns)
[![License](https://img.shields.io/github/license/ccqueiroz/utils-fns)](LICENSE)
[![Repository](https://img.shields.io/badge/repository-GitHub-blue.svg)](https://github.com/ccqueiroz/utils-fn)

<p align="justify">
  A biblioteca @utils-fns/utils-fns está sendo desenvolvolvida com o objetivo de fornecer ferramentas unificadas que facilitem as tarefas diárias dos programadores. Nossa motivação é simplificar tarefas comuns, como validadores, mascaramento de valores, classificação, pesquisa e métodos de conversão, oferecendo uma solução abrangente e eficiente e que seja possível o uso deste conjunto de bibliotecas em ambientes web - mobile - service.
</p>

## ✨ Features
### Validations: A biblioteca ```@utils-fns/validators``` fornece os seguintes validadores:
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

Link para documentação do módulo ```@utils-fns/validators```: https://github.com/ccqueiroz/utils-fns/blob/main/packages/validators/README-pt.md

### Mask: A biblioteca ```@utils-fns/mask``` fornece as seguintes máscaras:
**Módulo em construção**

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

Link para documentação do módulo ```@utils-fns/mask```: **Em construção**

### Utils: A biblioteca ```@utils-fns/utils``` fornece os seguintes utilitários:
**Módulo em construção**

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

Link para documentação do módulo ```@utils-fns/utils```: https://github.com/ccqueiroz/utils-fns/blob/main/packages/utils/README-pt.md

## 🖥 Ambientes Suportados
- Aplicativos com javascript ES6 ou superior
  - Browsers modernos
  - Server-side
  - Electron
  - Mobile

## 📦 Instalação
Para instalar a biblioteca @utils-fns/utils-fns: utilize o gerenciador de pacotes da sua preferência
```javascript
  yarn add @utils-fns/utils-fns

  ou

  npm install @utils-fns/utils-fns
```
## 🔨 Como utilizar
Para acessar as features, basta seguir o exemplo:

```javascript
  //ES6
  import { validators, utils, mask } from "@utils-fns/utils-fns";
```
```javascript
  //CommomJS
  const { validators, utils, mask } = require("@utils-fns/utils-fns");
```
Assim, basta escolher qual ferramenta de validação será utilizada.

```javascript
  const cpfValidation = validators.cpf('64912007013')
  //return true
```
### Typescript
```@utils-fns/validators``` é escrito em TypeScript com definições completas.

### Autor

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

Esta Api esta sob a licença [MIT](./LICENSE).