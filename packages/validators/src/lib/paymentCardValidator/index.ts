import { normalizeToValidation } from '../../helpers/normalizeToValidation';
import { lunhMod10Algorithm } from './utils/lunhMod10Algorithm';
import { PaymentCardValidator } from './../contracts/index';
import { utils } from '@utils-fns/utils';
import { findCardsBrandsCombinations } from './utils/findCardsBrandsCombinations';

export const paymentCardValidator = ({
  cardNumber,
  paramsPaymentCardValidator,
}: PaymentCardValidator) => {
  cardNumber = normalizeToValidation({ value: cardNumber });

  if (!cardNumber) return false;
  if (paramsPaymentCardValidator) {
    const { customPatternPaymentCard, specificBrandCard } =
      paramsPaymentCardValidator;

    if (customPatternPaymentCard)
      return customPatternPaymentCard.test(cardNumber);

    if (!lunhMod10Algorithm(cardNumber)) return false;

    if (specificBrandCard) {
      const brandCard = utils.mapPaymentCardList[specificBrandCard];
      return (
        findCardsBrandsCombinations({
          cardNumber: cardNumber,
          cardBrandData: brandCard,
        }).length > 0
      );
    }
  }

  if (!lunhMod10Algorithm(cardNumber)) return false;
  return (
    findCardsBrandsCombinations({
      cardNumber: cardNumber,
    }).length > 0
  );
};
