import { TYPE_VALIDATION as TV } from "./constants.js"

export const EXPRESSIONS = {
  [TV.T]: /^([a-zA-Z ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ .,]{0,100})$/,

  [TV.N]: /^([0-9])*$/,

  [TV.ND]: /^([0-9 .])*$/,

  [TV.TN]: /^[a-z ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ A-Z0-9 .,]*$/,

  [TV.TN_OMIT_ACCENTS]: /^[a-zA-Z0-9]*$/,

  [TV.CURP]:
    /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,

  [TV.DATE]: /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/,

  [TV.EMAIL]: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,

  [TV.RFC]:
    /^([a-zñA-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01]))$/,

  [TV.RFC_KEY_CODE]:
    /^([a-zñA-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([a-zA-Z\d]{2})([A-ZÑa-zñ\d])$/,

  [TV.POSTAL_CODE]: /(^([0-9]{5,5})|^)$/,

  [TV.PASSWORD]: {
    [TV.PASSWORD_LOWERCASE]: /(?=.*?[a-z])/,
    [TV.PASSWORD_UPPERCASE]: /(?=.*?[A-Z])/,
    [TV.PASSWORD_DIGIT]: /(?=.*?[0-9])/,
    [TV.PASSWORD_SPECIAL_CHARACTER]: /(?=.*?[$@$!%*?&])/,
    [TV.PASSWORD_MIN]: /.{8,}/,
    [TV.PASSWORD_MAX]: /^.{8,15}$/,
    [TV.PASSWORD_BLANK_SPACE]: /\s/,
  },

  [TV.SPECIAL_CHARACTER]:
    /^([a-z ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ A-Z0-9 ‘,\-:;\\#/¿()´¨&"_*.%¿?$¡!@+¨]*$)|(\n[a-z ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ A-Z0-9 ‘,\-:;\\#/()´¨&"_*.%¿?$¡!@+¨]{1,}$)/,
}
