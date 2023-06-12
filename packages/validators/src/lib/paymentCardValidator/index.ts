import { matchValidator } from './utils/matchValidator/index';
import { normalizeToValidation } from '../../helpers/normalizeToValidation';
import {
  FindCardBrandsCombinations,
  ParamsPaymentCardValidator,
  PaymentCardValidator as ParamsPaymentCardValidatorInterface,
} from './../contracts/index';
import { utils } from '@utils-fns/utils';
import { findCardsBrandsCombinations } from './utils/findCardsBrandsCombinations';

type ConstructorInterface = Pick<
  ParamsPaymentCardValidatorInterface,
  'cardNumber'
>;

type IsValid = ParamsPaymentCardValidator;
export class PaymentCardValidator {
  private cardNumber: string | undefined;
  constructor({ cardNumber }: ConstructorInterface) {
    this.cardNumber = cardNumber;
  }

  public getData() {
    const originalCardNumber = this.cardNumber || null;
    const brand = this.findBrandsCards({
      cardNumber: this.cardNumber?.replace(/\D/g, '') ?? '',
    });

    const isValid = this.isValid();

    const bankName =
      isValid && brand[0]?.nameBrandCard ? brand[0]?.nameBrandCard : null;
    let bankDigits = '';
    if (brand.length !== 0 && isValid) {
      for (const pattern of brand[0].innPattern) {
        if (!matchValidator(String(this.cardNumber), pattern)) continue;
        bankDigits = pattern.toString();
        break;
      }
    }
    const data = {
      cardNumber: originalCardNumber,
      bankDigits: bankDigits || null,
      bankName,
      isValid,
    };
    return data;
  }

  private findBrandsCards({
    cardNumber,
    cardBrandData,
  }: FindCardBrandsCombinations) {
    return findCardsBrandsCombinations({
      cardNumber,
      cardBrandData,
    });
  }

  public isValid(paramsPaymentCardValidator?: IsValid) {
    this.cardNumber = normalizeToValidation({ value: this.cardNumber });
    const validationByMod10 = utils.lunhMod10Algorithm({
      digits: this.cardNumber ?? '',
      reverseNumbers: true,
    });

    if (!this.cardNumber) return false;

    if (paramsPaymentCardValidator) {
      const { customPatternPaymentCard, specificBrandCard } =
        paramsPaymentCardValidator;

      if (customPatternPaymentCard)
        return customPatternPaymentCard.test(this.cardNumber);

      if (!validationByMod10) return false;

      if (specificBrandCard) {
        const brandCard = utils.mapPaymentCardList[specificBrandCard];
        return (
          this.findBrandsCards({
            cardNumber: this.cardNumber,
            cardBrandData: brandCard,
          }).length > 0
        );
      }
    }

    if (!validationByMod10) return false;

    return (
      this.findBrandsCards({
        cardNumber: this.cardNumber,
      }).length > 0
    );
  }

  public static init(deps: ConstructorInterface) {
    const instance = new PaymentCardValidator(deps);

    return instance;
  }
}
