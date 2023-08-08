# @utils-fns/mask

![npm](https://img.shields.io/npm/v/@utils-fns/mask)
[![License](https://img.shields.io/github/license/ccqueiroz/utils-fns)](LICENSE)
[![Repository](https://img.shields.io/badge/repository-GitHub-blue.svg)](https://github.com/ccqueiroz/utils-fn)
## README versions
[Portuguese 🇧🇷](https://github.com/ccqueiroz/utils-fns/blob/main/packages/mask/README-pt.md)  |  [English 🇺🇸](https://github.com/ccqueiroz/utils-fns/blob/main/packages/mask/README.md)

<p align="justify">
  The @utils-fns/mask library was intended to be part of a larger library, @utils-fns, which is being developed with the aim of providing unified tools to ease programmers' daily tasks. Our motivation is to simplify common tasks such as validators, <span style="font-weight: bold;">masking values</span>, sorting, searching and conversion methods, offering a comprehensive and efficient solution that makes it possible for use of this set of libraries in web - mobile - service environments.
</p>

## ✨ Features
### Masks: The ```@utils-fns/mask``` library provides the following masks:
- [x] [**cpf**](#cpf-mask)
- [x] [**nis**](#nis-mask)
- [x] [**cnpj**](#cnpj-mask)
- [x] [**date**](#date-mask)
- [x] [**paymentSlip**](#paymentslip-mask)
- [x] [**phone**](#phone-mask)
- [x] [**renavam**](#renavam-mask)
- [x] [**cnh**](#cnh-mask)
- [x] [**voterRegister**](#voter-register-mask)
- [x] [**cep**](#cep-mask)
- [x] [**generic masks**](#generic-mask)
- [x] [**numbers**](#numbers-mask)

## 🖥 Supported Environments
- Applications with javascript ES6 or higher
  - Modern browsers
  - Server-side
  - Electron
  - Mobile

## 📦 Install
If you want to install the complete module, follow the documents in the [@utils-fns/utils-fns](https://github.com/ccqueiroz/utils-fns/blob/main/packages/utils-fns/README.md).

To install the @utils-fns/mask library: use your preferred package manager
```javascript
  yarn add @utils-fns/mask

  or

  npm install @utils-fns/mask
```

## 🔨 How to use
To access the features, just follow the example:

```javascript
  //ES6
  import { mask } from "@utils-fns/mask";
```
```javascript
  //CommomJS
  const { mask } = require("@utils-fns/mask");
```
So, just choose which validation tool will be used.

```javascript
  const cpfMask = mask.cpf({ value: '75178780000' })
  /*
    return {
      unmask: '75178780000',
      value: '751.787.800-00',
    }
  */
```
### Typescript
```@utils-fns/validators``` is written in TypeScript with complete definitions.

### Important type:
- EventHandleAdapter: `<T = Event> = T | ChangeEvent<HTMLInputElement>`

## Generic Mask Patterns or Custom Patterns
  For Generic masks or custom patterns, you must use the following characters to represent the pattern:
- `A`: Accepts uppercase and lowercase letters;
- `a`: Preventive. Accepts only lowercase letters;
- `b`: The system will convert the letter to lowercase;
- `U`: Impeditive. Accepts only capital letters;
- `W`: The system will convert the letter to uppercase;
- `9`: Preventive. It only accepts numbers.

#### Examples
| Mask | Entrance | Return |
|---|---|---|
| `99999-999` | 61601640 | 61601-640 |
| `Waa-Aaa` | foobar | Foo-bar |
| `Waa-Aaa` | fooBar | Foo-Bar |
| `Waa-baa` | fooBar | Foo-bar |
| `Waa-aaa` | fooBar | Foo- |
| `baa-aaa` | FooBar | foo- |

## Cpf Mask
| Method | Params | Type |
|---|---|---|
| `cpf` | `value` | string \| number \| undefined |
| `cpf` | `previousValue` | string \| number \| undefined |
| `cpf` | `allowEmpty` | boolean \| undefined |
| `cpf` | `event` | EventHandleAdapter \| undefined |

```javascript
  import { mask } from "@utils-fns/mask";

  mask.cpf({ value: '75178780000' })
  /*
    return {
      unmask: '75178780000',
      value: '751.787.800-00',
    }
  */

  mask.cpf({ value: '' })
  /*
    return {
      unmask: '',
      value: '',
    }
  */
```

## Nis Mask
| Method | Params | Type |
|---|---|---|
| `nis` | `value` | string \| number \| undefined |
| `nis` | `previousValue` | string \| number \| undefined |
| `nis` | `allowEmpty` | boolean \| undefined |
| `nis` | `event` | EventHandleAdapter \| undefined |

```javascript
  import { mask } from "@utils-fns/mask";

  mask.nis({ value: '95726254769' })
  /*
    return {
      unmask: '95726254769',
      value: '957.26254.76-9',
    }
  */

  mask.nis({ value: '' })
  /*
    return {
      unmask: '',
      value: '',
    }
  */
```

## Cnpj Mask
| Method | Params | Type |
|---|---|---|
| `cnpj` | `value` | string \| number \| undefined |
| `cnpj` | `previousValue` | string \| number \| undefined |
| `cnpj` | `allowEmpty` | boolean \| undefined |
| `cnpj` | `event` | EventHandleAdapter \| undefined |

```javascript
  import { mask } from "@utils-fns/mask";

  mask.cnpj({ value: '46824095000169' })
  /*
    return {
      unmask: '46824095000169',
      value: '46.824.095/0001-69',
    }
  */

  mask.cnpj({ value: '' })
  /*
    return {
      unmask: '',
      value: '',
    }
  */
```

## Date Mask
| Method | Params | Type |
|---|---|---|
| `date` | `value` | string \| number \| undefined |
| `date` | `previousValue` | string \| number \| undefined |
| `date` | `allowEmpty` | boolean \| undefined |
| `date` | `event` | EventHandleAdapter \| undefined |
| `date` | `patternDate.mask` | DD/MM/YYYY \| DD-MM-YYYY \| DD/Mmm/YYYY \| DD-Mmm-YYYY \| DD/MMM/YYYY \| DD-MMM-YYYY \| MM-DD-YYYY \| MM/DD/YYYY \| MMM-DD-YYYY \| MMM/DD/YYYY \| Mmm/DD/YYYY \| Mmm-DD-YYYY \| YYYY/MM/DD \| YYYY-MM-DD \| YYYY/Mmm/DD \| YYYY-Mmm-DD \| YYYY/MMM/DD \|YYYY-MMM-DD |
| `date` | `patternDate.unmask` | DD/MM/YYYY \| DD-MM-YYYY \| DD/Mmm/YYYY \| DD-Mmm-YYYY \| DD/MMM/YYYY \| DD-MMM-YYYY \| MM-DD-YYYY \| MM/DD/YYYY \| MMM-DD-YYYY \| MMM/DD/YYYY \| Mmm/DD/YYYY \| Mmm-DD-YYYY \| YYYY/MM/DD \| YYYY-MM-DD \| YYYY/Mmm/DD \| YYYY-Mmm-DD \| YYYY/MMM/DD \|YYYY-MMM-DD |

#### Observation:
| Value | Representation | Example |
|---|---|---|
| `DD` | `day - numeric` | 30 |
| `MM` | `month - numeric` | 01 |
| `MMM` | `month - Abbreviation` | JAN |
| `Mmm` | `month - Abbreviation` | Jan |
| `YYYY` | `year - numeric` | 2023 |

```javascript
  import { mask } from "@utils-fns/mask";

  mask.date({
    value: '02091991',
    patternDate: {
      mask: 'DD/MM/YYYY',
      unmask: 'YYYY-MM-DD',
    },
  })
  /*
    return {
      unmask: '1991-09-02',
      value: '02/09/1991',
    }
  */

  mask.date({
    value: '02/Set/1991',
    patternDate: {
      mask: 'DD/Mmm/YYYY',
      unmask: 'YYYY/Mmm/DD',
    },
  })
  /*
    return {
      unmask: '1991/Set/02',
      value: '02/Set/1991',
    }
  */

 mask.date({
    value: 'SET021991',
    patternDate: {
      mask: 'MMM/DD/YYYY',
      unmask: 'YYYY/Mmm/DD',
    },
  })
  /*
    return {
      unmask: '1991/Set/02',
      value: 'SET/02/1991',
    }
  */
```

## PaymentSlip Mask
| Method | Params | Type |
|---|---|---|
| `paymentSlip` | `value` | string \| number \| undefined |
| `paymentSlip` | `previousValue` | string \| number \| undefined |
| `paymentSlip` | `allowEmpty` | boolean \| undefined |
| `paymentSlip` | `event` | EventHandleAdapter \| undefined |
| `paymentSlip` | `onlyType.typeDigits` | Cód. Barras \| Linha Digitável |
| `paymentSlip` | `onlyType.typePaymentSlip` | Boleto Bancário \| Boleto de Arrecadação |

#### Observation:
- The `onlyType` parameter is optional, however if it is included as a method argument, `typePaymentSlip` must be passed.

```javascript
  import { mask } from "@utils-fns/mask";

  mask.paymentSlip({
    value: '846100000005319901090112004961794445808053219016' })
  /*
    return {
      unmask: '846100000005319901090112004961794445808053219016',
      value: '84610000000-5 31990109011-2 00496179444-5 80805321901-6',
    }
  */

  mask.paymentSlip({
    value: '65590000020044250000594059050008194290000006050' })
  /*
    return {
      unmask: '65590000020044250000594059050008194290000006050',
      value: '65590.00002 00442.500005 94059.050008 1 94290000006050',
    }
  */

  mask.paymentSlip({ value: '84610000000319901090110049617944480805321901' })
  /*
    return {
      unmask: '84610000000319901090110049617944480805321901',
      value: '84610000000319901090110049617944480805321901',
    }
  */

  mask.paymentSlip({
    value: '846100000005319901090112004961794445808053219016',
    onlyType: {
      typePaymentSlip: 'Boleto de Arrecadação',
    },
  })
  /*
    return {
      unmask: '846100000005319901090112004961794445808053219016',
      value: '84610000000-5 31990109011-2 00496179444-5 80805321901-6',
    }
  */
```

## Phone Mask
| Method | Params | Type |
|---|---|---|
| `phone` | `value` | string \| number \| undefined |
| `phone` | `previousValue` | string \| number \| undefined |
| `phone` | `allowEmpty` | boolean \| undefined |
| `phone` | `event` | EventHandleAdapter \| undefined |
| `phone` | `customPattern` | string \| undefined |
| `phone` | `internationalNumber` | boolean \| undefined |

#### Observation:
- The return of the following masks are configured by default for this method depending on the size of the `value` parameter:
  - public service telephones: `3` to `4` characters
    - `999` or `999-9`.
  - standard phones: More than `4` characters
    - `(99) 9999-9999` or `(99) 99999-9999`.
  - Passing the `internationalNumber` parameter, the default mask is:
    - `+99 99 9999-9999` or `+99 99 99999-9999`.
- For masks with other formats, just pass the telephone format as an argument of the `customPattern` parameter, according to the section `Generic mask patterns or custom patterns`.

```javascript
  import { mask } from "@utils-fns/mask";

  mask.phone({ value: '911' })
  /*
    return {
      unmask: '911',
      value: '911',
    }
  */

  mask.phone({ value: '9114' })
  /*
    return {
      unmask: '9114',
      value: '911-4',
    }
  */

  mask.phone({ value: '8599999999' })
  /*
    return {
      unmask: '8599999999',
      value: '(85) 9999-9999',
    }
  */

  mask.phone({ value: '85999999999' })
  /*
    return {
      unmask: '85999999999',
      value: '(85) 99999-9999',
    }
  */

   mask.phone({
    value: '558599999999',
    internationalNumber: true,
  })
  /*
    return {
      unmask: '558599999999',
      value: '+55 85 9999-9999',
    }
  */

  mask.phone({
    value: '393461234567',
    customPattern: '+99 (999) 999-9999',
  })
  /*
    return {
      unmask: '393461234567',
      value: '+39 (346) 123-4567',
    }
  */
```

## Renavam Mask
| Method | Params | Type |
|---|---|---|
| `renavam` | `value` | string \| number \| undefined |
| `renavam` | `previousValue` | string \| number \| undefined |
| `renavam` | `allowEmpty` | boolean \| undefined |
| `renavam` | `event` | EventHandleAdapter \| undefined |

```javascript
  import { mask } from "@utils-fns/mask";

  mask.renavam({ value: '97553114045' })
  /*
    return {
      unmask: '97553114045',
      value: '97553114045',
    }
  */

  mask.renavam({ value: '97553114045999999999999' })
  /*
    return {
      unmask: '97553114045',
      value: '97553114045',
    }
  */
```
## Cnh Mask
| Method | Params | Type |
|---|---|---|
| `cnh` | `value` | string \| number \| undefined |
| `cnh` | `previousValue` | string \| number \| undefined |
| `cnh` | `allowEmpty` | boolean \| undefined |
| `cnh` | `event` | EventHandleAdapter \| undefined |

```javascript
  import { mask } from "@utils-fns/mask";

  mask.cnh({ value: '37079809228' })
  /*
    return {
      unmask: '37079809228',
      value: '370798092-28',
    }
  */

  mask.cnh({ value: '3707980922837079809228' })
  /*
    return {
      unmask: '37079809228',
      value: '370798092-28',
    }
  */
```
## Voter Register Mask
| Method | Params | Type |
|---|---|---|
| `voteRegister` | `value` | string \| number \| undefined |
| `voteRegister` | `previousValue` | string \| number \| undefined |
| `voteRegister` | `allowEmpty` | boolean \| undefined |
| `voteRegister` | `event` | EventHandleAdapter \| undefined |

```javascript
  import { mask } from "@utils-fns/mask";

  mask.voteRegister({ value: '277258770140' })
  /*
    return {
      unmask: '277258770140',
      value: '2772.5877.0140',
    }
  */

  mask.voteRegister({ value: '4253.0481.0175' })
  /*
    return {
      unmask: '425304810175',
      value: '4253.0481.0175',
    }
  */
```

## Cep Mask
| Method | Params | Type |
|---|---|---|
| `cep` | `value` | string \| number \| undefined |
| `cep` | `previousValue` | string \| number \| undefined |
| `cep` | `allowEmpty` | boolean \| undefined |
| `cep` | `event` | EventHandleAdapter \| undefined |

```javascript
  import { mask } from "@utils-fns/mask";

  mask.cep({ value: '89015133' })
  /*
    return {
      unmask: '89015133',
      value: '89015-133',
    }
  */

  mask.cep({ value: '89015-133' })
  /*
    return {
      unmask: '89015133',
      value: '89015-133',
    }
  */
```

## Generic Mask
| Method | Params | Type |
|---|---|---|
| `generic` | `pattern` | string |
| `generic` | `value` | string \| number \| undefined |
| `generic` | `previousValue` | string \| number \| undefined |
| `generic` | `allowEmpty` | boolean \| undefined |
| `generic` | `event` | EventHandleAdapter \| undefined |

#### Observation:
- The `pattern` parameter must be filled in as explained in the section `Generic mask patterns or custom patterns`.

```javascript
  import { mask } from "@utils-fns/mask";

  mask.generic({
    value: '89015133',
    pattern: '99999-999'
  })
  /*
    return {
      unmask: '89015133',
      value: '89015-133',
    }
  */

  mask.generic({
    value: '999999999',
    pattern: '(85) 9 9999-9999'
  })
  /*
    return {
      unmask: '999999999',
      value: '(85) 9 9999-9999',
    }
  */
```

## Numbers Mask
| Method | Params | Type |
|---|---|---|
| `maskNumber` | `value` | string \| number \| null |
| `maskNumber` | `previousValue` | string \| number \| null \| undefined |
| `maskNumber` | `prefix` | string \| undefined |
| `maskNumber` | `suffix` | string \| undefined |
| `maskNumber` | `decimalPlaces` | number \| undefined |
| `maskNumber` | `allowNegative` | boolean \| undefined |
| `maskNumber` | `numberWithoutPonctuation` | boolean \| undefined |
| `maskNumber` | `locale` | af \| ar-DZ \| ar-EG \| ar-MA \| ar-SA \| ar-TN \| ar \| az \| be-tarask \| be \| bg \| bn \| bs \| ca \| cs \| cy \| da \| de-AT \| de \| el \| en-AU \| en-CA \| en-GB \| en-IE \| en-IN \| en-NZ \| en-US \| en-ZA \| eo \| es \| et \| eu \| fa-IR \| fi \| fr-CA \| fr-CH \| fr \| fy \| gd \| gl \| gu \| he \| hi \| hr \| ht \| hu \| hy \| id \| is \| it-CH \| it \| ja-Hira \| ja \| ka \| kk \| km \| kn \| ko \| lb \| lt \| lv \| mk \| mn \| ms \| mt \| nb \| nl-BE \| nl \| nn \| oc \| pl \| pt-BR \| pt \| ro \| ru \| sk \| sl \| sq \| sr-Latn \| sr \| sv \| ta \| te \| th \| tr \| ug \| uk \| uz-Cyrl \| uz \| vi \| zh-CN \| zh-HK \| zh-TW \| undefined |
| `maskNumber` | `event` | EventHandleAdapter \| undefined |

#### Observation:
- The following parameters are configured by default:
  - `prefix`: '';
  - `suffix`: '';
  - `decimalPlaces`: 0;
  - `allowNegative`: false;
  - `locale`: 'pt-BR';
- The limit number of decimal places must be equal to `10`.

```javascript
  import { mask } from "@utils-fns/mask";

  mask.maskNumber({ value: 123.98 })
  /*
    return {
      unmask: '12398',
      value: '12.398'
    }
  */

   mask.maskNumber({ value: '123.98' })
  /*
    return {
      unmask: '12398',
      value: '12.398'
    }
  */

  mask.maskNumber({
    value: '-123.98',
    allowNegative: true,
  })
  /*
    return {
      unmask: '-12398',
      value: '-12.398'
    }
  */

  mask.maskNumber({
    value: 123.98,
    decimalPlaces: 10,
  })
  /*
    return {
      unmask: '0.0000012398',
      value: '0,0000012398',
    }
  */

  mask.maskNumber({
    value: 1323.98,
    decimalPlaces: 2,
    locale: 'en-US',
  })
  /*
    return {
      unmask: '1323.98',
      value: '1,323.98',
    }
  */

   mask.maskNumber({
    value: 1323.98,
    decimalPlaces: 2,
    locale: 'pt-BR',
    prefix: 'R$ ',
    suffix: ' Reais',
  })
  /*
    return {
      unmask: '1323.98',
      value: 'R$ 1.323,98 Reais',
    }
  */

  mask.maskNumber({
    value: -1323.98,
    decimalPlaces: 2,
    locale: 'pt-BR',
    prefix: 'R$ ',
    suffix: ' Reais',
    allowNegative: true,
  })
  /*
    return {
      unmask: '-1323.98',
      value: 'R$ -1.323,98 Reais',
    }
  */
```
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


## License

This API is licensed [MIT](./LICENSE).