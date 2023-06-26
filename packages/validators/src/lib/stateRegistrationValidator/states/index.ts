import { TypesUtils } from '@utils-fns/utils';

import { ParamsFactoryStateRegistrationValidatorByState } from '../../contracts';
import { stateRegistrationAcre } from './AC';
import { stateRegistrationAlagoas } from './AL';
import { stateRegistrationAmazonas } from './AM';
import { stateRegistrationAmapa } from './AP';
import { stateRegistrationBahia } from './BA';
import { stateRegistrationCeara } from './CE';
import { stateRegistrationDistritoFederal } from './DF';
import { stateRegistrationEspiritoSanto } from './ES';
import { stateRegistrationGoias } from './GO';
import { stateRegistrationMaranhao } from './MA';
import { stateRegistrationMinasGerais } from './MG';
import { stateRegistrationMatoGrossoDoSul } from './MS';
import { stateRegistrationMatoGrosso } from './MT';
import { stateRegistrationPara } from './PA';
import { stateRegistrationParaiba } from './PB';
import { stateRegistrationPernambuco } from './PE';
import { stateRegistrationPiaui } from './PI';
import { stateRegistrationParana } from './PR';
import { stateRegistrationRioDeJaneiro } from './RJ';
import { stateRegistrationRioGrandeDoNorte } from './RN';
import { stateRegistrationRondonia } from './RO';
import { stateRegistrationRoraima } from './RR';
import { stateRegistrationRioGrandeDoSul } from './RS';
import { stateRegistrationSantaCatarina } from './SC';
import { stateRegistrationSergipe } from './SE';
import { stateRegistrationSaoPaulo } from './SP';
import { stateRegistrationTocantins } from './TO';

export const factoryStateRegistrationValidatorByState = (
  uf: TypesUtils['StateAbbreviations'],
  digits: string,
) => {
  const factory: ParamsFactoryStateRegistrationValidatorByState = {
    AC: stateRegistrationAcre,
    AL: stateRegistrationAlagoas,
    AM: stateRegistrationAmazonas,
    AP: stateRegistrationAmapa,
    BA: stateRegistrationBahia,
    CE: stateRegistrationCeara,
    DF: stateRegistrationDistritoFederal,
    ES: stateRegistrationEspiritoSanto,
    GO: stateRegistrationGoias,
    MA: stateRegistrationMaranhao,
    MG: stateRegistrationMinasGerais,
    MS: stateRegistrationMatoGrossoDoSul,
    MT: stateRegistrationMatoGrosso,
    PA: stateRegistrationPara,
    PB: stateRegistrationParaiba,
    PE: stateRegistrationPernambuco,
    PI: stateRegistrationPiaui,
    PR: stateRegistrationParana,
    RJ: stateRegistrationRioDeJaneiro,
    RN: stateRegistrationRioGrandeDoNorte,
    RO: stateRegistrationRondonia,
    RR: stateRegistrationRoraima,
    RS: stateRegistrationRioGrandeDoSul,
    SC: stateRegistrationSantaCatarina,
    SE: stateRegistrationSergipe,
    SP: stateRegistrationSaoPaulo,
    TO: stateRegistrationTocantins,
  };

  return factory[uf] ? factory[uf](digits) : false;
};
