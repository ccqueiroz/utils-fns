import { PaymentCardDataList } from '../contracts/paymentCard';
import dataJson from './data.json';
/**
 * @returns MapBankData - returns a mapped list with the data of the mapped credit companies.
 *
 * @summary
 * - References:
    The 13 main payment card brands were cataloged and their identifiers extracted
    If you find inconsistency in any data referenting of payments cards,
    please contact caio.cezar.dequeiroz@gmail.com or submit a PR.
 * @see https://en.wikipedia.org/wiki/Payment_card_number#Issuer_identification_number_.28IIN.29
 */
export const mapPaymentCardList: PaymentCardDataList =
   dataJson as PaymentCardDataList;
