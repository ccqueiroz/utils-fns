/**
 * - References:
 * https://en.wikipedia.org/wiki/Payment_card_number#Issuer_identification_number_.28IIN.29
 * The 13 main payment card brands were cataloged and their identifiers extracted
 * If you find inconsistency in any data referenting of payments cards,
 * please contact caio.cezar.dequeiroz@gmail.com or submit a PR.
 */
import { PaymentCardDataList } from '../contracts/paymentCard';
import dataJson from './data.json';

export const mapPaymentCardList: PaymentCardDataList =
  dataJson as PaymentCardDataList;
