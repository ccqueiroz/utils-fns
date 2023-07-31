# @utils-fns/validators

![npm](https://img.shields.io/npm/v/@utils-fns/validators)
[![License](https://img.shields.io/github/license/ccqueiroz/utils-fns)](LICENSE)
[![Repository](https://img.shields.io/badge/repository-GitHub-blue.svg)](https://github.com/ccqueiroz/utils-fn)
## Versões README
[Português 🇧🇷](./README-pt.md)  |  [Inglês 🇺🇸](./README.md)

<p align="justify">
  A biblioteca @utils-fns/validators foi desenvolvida para ser parte de uma biblioteca maior, @utils-fns, que está sendo desenvolvolvida com o objetivo de fornecer ferramentas unificadas que facilitem as tarefas diárias dos programadores. Nossa motivação é simplificar tarefas comuns, como <span style="font-weight: bold;">validadores</span>, mascaramento de valores, classificação, pesquisa e métodos de conversão, oferecendo uma solução abrangente e eficiente e que seja possível o uso deste conjunto de bibliotecas em ambientes web - mobile - service.
</p>

## ✨ Features
### Validations: A biblioteca ```@utils-fns/validators``` fornece os seguintes validadores:
- [x] [**cpfValidator**](#cpf-validator)
- [x] [**nisValidator**](#nis-validator)
- [x] [**emailValidator**](#email-validator)
- [x] [**cnpjValidator**](#cnpj-validator)
- [x] [**phoneValidator**](#phone-validator)
- [x] [**paymentCardValidator (luhn algorithm)**](#paymentcard-validator)
- [x] [**paymentSlipValidator (ITF-14)**](#paymentslip-validator)
- [x] [**stateRegistrationValidator (inscrição estadual - BR)**](#state-registration-validator)
- [x] [**voterRegistrationValidator (título de eleitor - BR)**](#voter-registration-validator)
- [x] [**cnhValidator**](#cnh-validator)
- [x] [**renavamValidator**](#renavam-validator)
- [x] [**cepValidator (cep - BR)**](#cep-validator)

## 🖥 Ambientes Suportados
- Aplicativos com javascript ES6 ou superior
  - Browsers modernos
  - Server-side
  - Electron
  - Mobile

## 📦 Instalação
Caso queira instalar o módulo completo, seguir a documentação do [@utils-fns/utils-fns](https://github.com/ccqueiroz/utils-fns/blob/main/packages/utils-fns/README-pt.md).

Para instalar a biblioteca @utils-fns/validators: utilize o gerenciador de pacotes da sua preferência
```javascript
  yarn add @utils-fns/validators

  ou

  npm install @utils-fns/validators
```
## 🔨 Como utilizar
Para acessar as features, basta seguir o exemplo:

```javascript
  //ES6
  import { validators } from "@utils-fns/validators";
```
```javascript
  //CommomJS
  const { validators } = require("@utils-fns/validators");
```
Assim, basta escolher qual ferramenta de validação será utilizada.

```javascript
  const cpfValidation = validators.cpf('64912007013')
  //return true
```
### Typescript
```@utils-fns/validators``` é escrito em TypeScript com definições completas.

## Cpf Validator
| Método | Params | Tipo |
|---|---|---|
| `cpf` | `cpf` | string \| undefined |

```javascript
  import { validators } from "@utils-fns/validators";

  validators.cpf('64912007013')
  //✅ return true

  validators.cpf('649.120.070-13')
  //✅ return true

  validators.cpf('01234598329')
  //❌ return false
```
## Nis Validator
| Método | Params | Tipo |
|---|---|---|
| `nis` | `nis` | string \| undefined |
```javascript
  import { validators } from "@utils-fns/validators";

  validators.nis('90152083257')
  //✅ return true

  validators.nis('901.52083.25-7')
  //✅ return true

  validators.nis('00000000000')
  //❌ return false
```
## Email Validator
| Método | Params | Tipo |
|---|---|---|
| `email` | `email` | string \| undefined |
| `email` | `paramsEmailValidator.minMaxUserNameEmail.min` | number \| undefined |
| `email` | `paramsEmailValidator.minMaxUserNameEmail.max` | number \| undefined |
| `email` | `paramsEmailValidator.minMaxEmailDomain.min` | number \| undefined |
| `email` | `paramsEmailValidator.minMaxEmailDomain.max` | number \| undefined |
| `email` | `paramsEmailValidator.emailDomainName` | RegExp \| undefined |

```javascript
  import { validators } from "@utils-fns/validators";

  validators.email({ email: 'foobar@validator.com' })
  //✅ return true

  validators.email({ email: 'fóobar@validatior.com' })
  //❌ return false

  validators.email({
    email: 'foobar@gmail.com',
    paramsEmailValidator: {
      emailDomainName: RegExp(/(gmail.com|hotmail.com)/)
    },
  })
  //✅ return true

  validators.email({
    email: 'foobar@validator.com',
    paramsEmailValidator: rules,
  })
  //❌ return false
```
## Cnpj Validator
| Método | Params | Tipo |
|---|---|---|
| `cnpj` | `cnpj` | string \| undefined |

```javascript
  import { validators } from "@utils-fns/validators";

  validators.cnpj('22014929000102')
  //✅ return true

  validators.cnpj('22.014.929/0001-02')
  //✅ return true

  validators.cnpj('01234569841234')
  //❌ return false
```
## Phone Validator
| Método | Params | Tipo |
|---|---|---|
| `phone` | `phone` | string \| undefined |
| `phone` | `paramsPhoneValidator.onlyMobilePhoneBR` | boolean \| undefined |
| `phone` | `paramsPhoneValidator.canReceiveInternationalNumbers` | boolean \| undefined |
| `phone` | `paramsPhoneValidator.customPatternPhone.coutryCode` | RegExp |
| `phone` | `paramsPhoneValidator.customPatternPhone.areaStateCode` | RegExp |
| `phone` | `paramsPhoneValidator.customPatternPhone.phoneNumber` | RegExp |
| `phone` | `paramsPhoneValidator.publicUtilityNumberBR` | boolean \| undefined |
| `phone` | `paramsPhoneValidator.numberWithoutCodeAreas` | boolean \| undefined |

```javascript
  import { validators } from "@utils-fns/validators";

  validators.phone({ phone: '(63) 92102-2418' })
  //✅ return true

  validators.phone({ phone: '63921022418' })
  //✅ return true

  validators.phone({ phone: '988283' })
  //❌ return false

  validators.phone({ phone: '190', {
    publicUtilityNumberBR: true
  } })
  //✅ return true

  validators.phone({ phone: '(11) 99385-3318', {
    numberWithoutCodeAreas: true
  } })
  //❌ return false

  validators.phone({ phone: '66934451006', {
    canReceiveInternationalNumbers: true,
      customPatternPhone: {
        coutryCode: RegExp(/66/),
        areaStateCode: RegExp(/9{0,1}/),
        phoneNumber: RegExp(/([2-9]{1}\d{6,7})$/),
      }
    }
  })
  //✅ return true

  validators.phone({ phone: '+1 (541) 708-3275', {
      canReceiveInternationalNumbers: true
    }
  })
  //✅ return true
```

## PaymentCard Validator
### Validador de cartão de crédio/débito
| Método | Params | Tipo |
|---|---|---|
| `paymentCard` | `cardNumber` | string \| undefined |
| `paymentCard.isValid` | `paramsPaymentCardValidator.validationTypeCard` | credit \| debit \| credit-debit \| undefined |
| `paymentCard.isValid` | `paramsPaymentCardValidator.specificBrandCard` | american-express \| diners-club \| discover \| elo \| hiper \| hipercard \| jcb \| maestro \| mastercard \| mir \| unionpay \| visa \| visa-electron \| undefined |
| `paymentCard.isValid` | `paramsPaymentCardValidator.customPatternPaymentCard` | RegExp \| undefined |
| `paymentCard.getData` | - | - |

```javascript
  import { validators } from "@utils-fns/validators";

  validators.paymentCard({ cardNumber: '4024 0071 6435 7039' }).getData()
  //✅ return {
  //    bankDigits: '4',
  //    bankName: 'Visa',
  //    cardNumber: '4024 0071 6435 7039',
  //    isValid: true,
  //  }

  validators.paymentCard({ cardNumber: '4024 0071 6435 7039' }).isValid()
  //✅ return true

  validators.paymentCard({ cardNumber: '4124007164357039' }).isValid({
    customPatternPaymentCard: RegExp(/^4[0-2](\d{14})$/),
  })
  //✅ return true

  validators.paymentCard({ cardNumber: '3014 842898 5841' }).isValid({
    specificBrandCard: 'diners-club',
  })
  //✅ return true

  validators.paymentCard({ cardNumber: '3014 842898 5841' }).isValid({
    specificBrandCard: 'visa',
  })
  //❌ return false
```
## PaymentSlip Validator
### Validador de boletos de pagamento
| Método | Params | Tipo |
|---|---|---|
| `paymentSlip` | `digits` | string \| undefined |
| `paymentSlip.isValid` | `paramsPaymentSlipValidator.validByBank` | BankCode \| BankName \| undefined |
| `paymentSlip.isValid` | `paramsPaymentSlipValidator.validSegmentType` | Taxas Municipais \| Taxas de Saneamento \| Taxas de Energia Elétrica e Gás \| Taxas de Telecomunicações \| Taxas de Órgãos Governamentais \| Taxas de Trânsito \| Uso Exclusivo dos Bancos \| Pagamento de Boletos Bancários \| Outros \| undefined |
| `paymentSlip.isValid` | `paramsPaymentSlipValidator.validByPrice` | string \| number \| undefined |
| `paymentSlip.isValid` | `paramsPaymentSlipValidator.validByDate` | string \| Date \| undefined |
| `paymentSlip.isValid` | `paramsPaymentSlipValidator.validByTypeOfPaymentSlip` | Boleto Bancário | Boleto de Arrecadação \| undefined |
| `paymentSlip.isValid` | `paramsPaymentSlipValidator.validByIfIsBarCodeOrTypeableLine` | Cód. Barras \| Linha Digitável \| undefined |
| `paymentSlip.getData` | - | - |

```javascript
  import { validators } from "@utils-fns/validators";

  validators.paymentSlip({ digits: '65591942700000005000000000442500009390032700' }).getData()
  //✅ return {
  //    bankCode: '655',
  //    bankName: 'Banco Votorantim S.A.',
  //    barCodeOrTypeableLine: 'Cód. Barras',
  //    digits: '65591942700000005000000000442500009390032700',
  //    expirationDate: '30/07/2023',
  //    price: '5.00',
  //    segmentPaymentSplip: 'Pagamento de Boletos Bancários',
  //    typeOfPaymentSlip: 'Boleto Bancário',
  //    isValid: true,
  //  }

  validators.paymentSlip({ digits: '65591942700000005000000000442500009390032700' }).isValid()
  //✅ return true

  validators.paymentSlip({ digits: '65591942700000005000000000442500009390032700' }).isValid({
    validByTypeOfPaymentSlip: 'Boleto Bancário'
  })
  //✅ return true

  validators.paymentSlip({ digits: '65591942700000005000000000442500009390032700' }).isValid({
    validByTypeOfPaymentSlip: 'Boleto de Arrecadação'
  })
  //❌ return false

  validators.paymentSlip({ digits: '84610000000319901090110049617944480805321901' }).isValid({
    validByPrice: '31.99',
    validSegmentType: 'Taxas de Telecomunicações',
    validByIfIsBarCodeOrTypeableLine: 'Cód. Barras',
    validByTypeOfPaymentSlip: 'Boleto de Arrecadação',
  })
  //✅ return true

  validators.paymentSlip({ digits: '65590000020044250000594059050008194290000006050' }).isValid({
    validByBank: '655',
    validByDate: '08-01-2023',
    validByPrice: 60.5,
    validSegmentType: 'Pagamento de Boletos Bancários',
    validByIfIsBarCodeOrTypeableLine: 'Linha Digitável',
    validByTypeOfPaymentSlip: 'Boleto Bancário',
  })
  //✅ return true
```
## State Registration Validator
### Validador de inscrição estadual
| Método | Params | Tipo |
|---|---|---|
| `stateRegistrationValidator` | `digits` | string \| undefined |
| `stateRegistrationValidator` | `uf` | AC \| AL \| AP \| AM \| BA \| CE \| DF \| ES \| GO \| MA \| MT \| MS \| MG \| PA \| PB \| PR \| PE \| PI \| RJ \| RN \| RS \| RO \| RR \| SC \| SP \| SE \| TO |

```javascript
  import { validators } from "@utils-fns/validators";

  validators.stateRegistrationValidator({ digits: '746943024', uf: 'PB' })
  //✅ return true

  validators.stateRegistrationValidator({ digits: '746943024', uf: 'SP' })
  //❌ return false
```
## Voter Registration Validator
### Validador de título de eleitor
| Método | Params | Tipo |
|---|---|---|
| `voterRegistrationValidation` | `digits` | string \| undefined |

```javascript
  import { validators } from "@utils-fns/validators";

  validators.voterRegistration('613752510213')
  //✅ return true

  validators.voterRegistration('0123.4567.8901')
  //❌ return false
```
## Cnh Validator
| Método | Params | Tipo |
|---|---|---|
| `cnh` | `cnh` | string \| undefined |

```javascript
  import { validators } from "@utils-fns/validators";

  validators.cnh('45426105401')
  //✅ return true

  validators.cnh('703417160228787182')
  //❌ return false
```
## Renavam Validator
| Método | Params | Tipo |
|---|---|---|
| `renavamValidator` | `renavam` | string \| undefined |

```javascript
  import { validators } from "@utils-fns/validators";

  validators.renavam('08804737318')
  //✅ return true

  validators.renavam('703417160228787182')
  //❌ return false
```

## Cep Validator
| Método | Params | Tipo |
|---|---|---|
| `cep` | `cep` | string \| undefined |
| `cep.isValid` | - | - |
| `cep.getData` | signal | AbortSignal \| null \| undefined |

```javascript
  import { validators } from "@utils-fns/validators";

  validators.cep('01001000').isValid()
  //✅ return true

  validators.cep('01001000').getData()
  //✅ return {
  //    estado: 'São Paulo',
  //    uf: 'SP',
  //    complemento: '- lado ímpar',
  //    cep: '01001-000',
  //    cidade: 'São Paulo',
  //    bairro: 'Sé',
  //    logradouro: 'Praça da Sé',
  //    enderecoPostal: 'Praça da Sé, lado ímpar, Sé, 01001-000, São Paulo/SP',
  //    isValid: true,
  //  }
```

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