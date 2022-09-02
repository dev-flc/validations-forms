import { isTitle } from "./../../utils/funtionsUtils.js";
import { TYPE_MESSAGE as TM } from "./../../utils/constants.js";
export const ES = () => ({
  [TM.MESSAGE_IS_COMBO]: title => isTitle(title) ? `El dato es requerido` : `El dato ${title} es requerido`,
  [TM.MESSAGE_IS_CURP]: title => isTitle(title) ? `El dato no es válido` : `El dato ${title} no es válido`,
  [TM.MESSAGE_IS_DATE]: title => isTitle(title) ? `El dato no es válido` : `El dato ${title} no es válido`,
  [TM.MESSAGE_IS_EMAIL]: title => isTitle(title) ? `El dato no es válido` : `El dato ${title} no es válido`,
  [TM.MESSAGE_IS_NUMBER]: title => isTitle(title) ? `El dato no es válido, ingresa sólo números` : `El dato ${title} no es válido, ingresa sólo números`,
  [TM.MESSAGE_IS_REQUIRED]: title => isTitle(title) ? `El dato es requerido` : `El dato ${title} es requerido`,
  [TM.MESSAGE_IS_RFC]: title => isTitle(title) ? `El dato no es válido` : `El dato ${title} no es válido`,
  [TM.MESSAGE_IS_RFC_KEY_CODE]: title => isTitle(title) ? `El dato no es válido` : `El dato ${title} no es válido`,
  [TM.MESSAGE_IS_TEXT]: title => isTitle(title) ? `El dato no es válido, ingresa sólo letras` : `El dato ${title} no es válido, ingresa sólo letras`,
  [TM.MESSAGE_IS_TEXT_NUMBER]: title => isTitle(title) ? `El dato no es válido, ingresa sólo letras y números` : `El dato ${title} no es válido, ingresa sólo letras y números`
});