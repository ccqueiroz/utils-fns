import { checkIsBankSlipOrTaxCollection as checkIsBankSlipOrTaxCollectionFunction } from './utils/checkIsBankSlipOrTaxCollection/index';
import { normalizeToValidation } from '../../helpers/normalizeToValidation';
import {
  PaymentSlipValidator as ParamsPaymentSlipValidatorInterface,
  ParamsPaymentSlipValidator,
  paymentSlipSegmentType,
} from '../contracts';
import { bankSlip } from './utils/bankSlip';
import { taxColletionSlip } from './utils/taxColletion';
import { validAmount } from './utils/validAmount';
import { validateDatePaymentoSlipToDate } from './utils/bankSlip/validateDate';
import { validateDatePaymentSlipTaxCollection } from './utils/taxColletion/validateDate';

type ConstructorInterface = Pick<ParamsPaymentSlipValidatorInterface, 'digits'>;

type IsValid = ParamsPaymentSlipValidator;

type ReturnCapturePaymentSlipData = {
  success: boolean;
  mapPaymentSlipData: Map<unknown, unknown>;
};

type ReturnGetDataPaymentSlip = {
  digits: string | undefined;
  bankName: string | null;
  bankCode: string | null;
  price: string | null;
  expirationDate: string | null;
  typeOfPaymentSlip: string | null;
  barCodeOrTypeableLine: string | null;
  segmentPaymentSplip: string | null;
  isValid: boolean;
};

/**
   *
    @class PaymentSlipValidator

    @summary
    Motivation:
      - Testing and capture data payment slip with types bank slip and tax collection..

    Details:
      - It is possible to validate and capture data payment slips (banking) and collection slips, in typeable line formats and barcode numbering.
      - Among the validations are: validation by the issuing bank of the bill; segment type, payment amount; due date.
      - Among the data captured are: payment slip digits; issuing bank code; issuing bank name; payment slip price; expiration date; segment to
        which the payment slip is inserted; if the payment slip is type barcode or typeable lines.

    Limitations:
      - In accordance with FEBRABAN (Brazilian Federation of Banks) regulations: "Layout" Standard for Collection/Receipt Using Bar Codes, version 06,
      for collection-type slips, due dates do not follow a pattern. The issuing bank is responsible for inserting this data in the blocks of free or
      unavailable fields, and, if inserted, it must be have the format YYYYMMDD. As a result, validation of the due date for payment slips does not have
      a standard, so it is not recommended that the validation of a payment slip is verified only by the due date.
    @see https://cmsarquivos.febraban.org.br/Arquivos/documentos/PDF/Layout%20-%20C%C3%B3digo%20de%20Barras%20ATUALIZADO.pdf.
  */
export class PaymentSlipValidator {
  private digits: string | undefined;
  private typesOfPaymentSlip = {
    bank: { type: 'Boleto Bancário', key: 'bank' },
    tax_collection: { type: 'Boleto de Arrecadação', key: 'tax_collection' },
  };
  private regexLengthDigitsValidator = new RegExp(/^[0-9]{44,48}/);

  constructor({ digits }: ConstructorInterface) {
    this.digits = digits;
  }

  private checkIsBankSlipOrTaxCollection() {
    return checkIsBankSlipOrTaxCollectionFunction(
      this.digits?.replace(/\D/g, '') || '',
    );
  }

  private capturePaymentSlipData(): ReturnCapturePaymentSlipData {
    const mapPaymentSlipData = new Map();
    let isValid = false;
    this.digits = normalizeToValidation({ value: this.digits });

    if (!this.digits || !this.regexLengthDigitsValidator.test(this.digits)) {
      return {
        success: false,
        mapPaymentSlipData,
      };
    }

    const isBankSlipOrTaxCollection = this.checkIsBankSlipOrTaxCollection();
    mapPaymentSlipData.set(
      'typeOfPaymentSlip',
      this.typesOfPaymentSlip[isBankSlipOrTaxCollection].type,
    );
    mapPaymentSlipData.set(
      'typeOfPaymentSlipKey',
      this.typesOfPaymentSlip[isBankSlipOrTaxCollection].key,
    );

    if (isBankSlipOrTaxCollection === this.typesOfPaymentSlip.bank.key) {
      isValid = bankSlip({
        digits: this.digits,
        mapPaymentSlipData,
      });
    }

    if (
      isBankSlipOrTaxCollection === this.typesOfPaymentSlip.tax_collection.key
    ) {
      isValid = taxColletionSlip({
        digits: this.digits,
        mapPaymentSlipData,
      });
    }

    if (!isValid) {
      mapPaymentSlipData.clear();
      return {
        success: false,
        mapPaymentSlipData,
      };
    }

    return {
      success: true,
      mapPaymentSlipData,
    };
  }

  public getData(): ReturnGetDataPaymentSlip {
    const originalCardNumber = this.digits;
    const { success, mapPaymentSlipData } = this.capturePaymentSlipData();

    const data = {
      digits: originalCardNumber,
      bankName: mapPaymentSlipData.get('bankName') ?? null,
      bankCode: mapPaymentSlipData.get('bankCode') ?? null,
      price: mapPaymentSlipData.get('price') ?? null,
      expirationDate: mapPaymentSlipData.get('expirationDate') ?? null,
      typeOfPaymentSlip: mapPaymentSlipData.get('typeOfPaymentSlip') ?? null,
      barCodeOrTypeableLine:
        mapPaymentSlipData.get('barCodeOrTypeableLine') ?? null,
      segmentPaymentSplip:
        mapPaymentSlipData.get('segmentPaymentSplip') ?? null,
      isValid: success,
    };

    return data as ReturnGetDataPaymentSlip;
  }

  /**
   *
   * @param paramsPaymentSlipValidator
   * @argument validByBank: Bank code or bank name can be passed for validation
   * @argument validSegmentType: Used to check which segment the payment slip is inserted in
   * @argument validByPrice: Used to check the value of the payment slip
   * @argument validByDate: Used to check the date of the payment slip
   * @argument validByTypeOfPaymentSlip: Used to check if the payment slip is of the Banking or Collection type
   * @argument validByIfIsBarCodeOrTypeableLine: Used to check if the payment slip is a barcode type or typeable lines
   * @returns boolean
   */
  public isValid(paramsPaymentSlipValidator?: IsValid) {
    const { success, mapPaymentSlipData } = this.capturePaymentSlipData();
    if (paramsPaymentSlipValidator) {
      const {
        validByBank,
        validSegmentType,
        validByDate,
        validByIfIsBarCodeOrTypeableLine,
        validByPrice,
        validByTypeOfPaymentSlip,
      } = paramsPaymentSlipValidator;
      if (validByBank) {
        if (
          validByTypeOfPaymentSlip &&
          mapPaymentSlipData.has('typeOfPaymentSlip') &&
          mapPaymentSlipData.get('typeOfPaymentSlip') ===
            this.typesOfPaymentSlip.tax_collection.type
        ) {
          return false;
        }
        const bankCode = mapPaymentSlipData.get('bankCode');
        let isValidBank = false;
        if (validByBank.length === 3) {
          isValidBank = validByBank.toString() === bankCode;
        } else {
          isValidBank = mapPaymentSlipData.get('bankName') === validByBank;
        }

        if (!isValidBank) return false;
      }

      if (validSegmentType) {
        let isValidSegmentType = false;

        if (
          mapPaymentSlipData.get('typeOfPaymentSlipKey') ===
            this.typesOfPaymentSlip.bank.key &&
          paymentSlipSegmentType.payment_bank_slip === validSegmentType &&
          validSegmentType === mapPaymentSlipData.get('segmentPaymentSplip')
        ) {
          isValidSegmentType = true;
        }
        if (
          mapPaymentSlipData.get('typeOfPaymentSlipKey') ===
            this.typesOfPaymentSlip.tax_collection.key &&
          Object.values(paymentSlipSegmentType).includes(validSegmentType) &&
          validSegmentType === mapPaymentSlipData.get('segmentPaymentSplip')
        ) {
          isValidSegmentType = true;
        }

        if (!isValidSegmentType) return false;
      }

      if (validByDate) {
        let isValidByDate = false;
        if (
          mapPaymentSlipData.get('typeOfPaymentSlipKey') ===
          this.typesOfPaymentSlip.bank.key
        ) {
          isValidByDate = validateDatePaymentoSlipToDate(
            mapPaymentSlipData.get('expirationDate') as string | null,
            new Date(validByDate),
          );
        }
        if (
          mapPaymentSlipData.get('typeOfPaymentSlipKey') ===
          this.typesOfPaymentSlip.tax_collection.key
        ) {
          isValidByDate = validateDatePaymentSlipTaxCollection(
            mapPaymentSlipData.get('expirationDate') as string | null,
            new Date(validByDate),
          );
        }
        if (!isValidByDate) return false;
      }

      if (validByIfIsBarCodeOrTypeableLine) {
        if (
          mapPaymentSlipData.has('barCodeOrTypeableLine') &&
          validByIfIsBarCodeOrTypeableLine !==
            mapPaymentSlipData.get('barCodeOrTypeableLine')
        )
          return false;
      }

      if (validByPrice) {
        if (
          !validAmount(
            mapPaymentSlipData.get('price') as string | null,
            validByPrice,
          )
        )
          return false;
      }

      if (validByTypeOfPaymentSlip) {
        if (
          mapPaymentSlipData.has('typeOfPaymentSlip') &&
          validByTypeOfPaymentSlip !==
            mapPaymentSlipData.get('typeOfPaymentSlip')
        ) {
          return false;
        }
      }
    }

    return success;
  }

  /**
   *
   * @param deps
   * @returns instance of PaymentSlipValidator
   */
  public static init(deps: ConstructorInterface) {
    const instance = new PaymentSlipValidator(deps);

    return instance;
  }
}
