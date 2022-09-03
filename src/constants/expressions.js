import { TYPE_VALIDATION } from "./constants.js"

export const EXPRESSIONS = {
  [TYPE_VALIDATION.T]: /^([a-zA-Z ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ .,]{0,100})$/,

  [TYPE_VALIDATION.N]: /^([0-9])*$/,

  [TYPE_VALIDATION.TN]: /^[a-z ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ A-Z0-9 .,]*$/,

  [TYPE_VALIDATION.CURP]:
    /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,

  [TYPE_VALIDATION.DATE]:
    /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/,

  [TYPE_VALIDATION.EMAIL]:
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,

  [TYPE_VALIDATION.RFC]:
    /^([a-zñA-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01]))$/,

  [TYPE_VALIDATION.RFC_KEY_CODE]:
    /^([a-zñA-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([a-zA-Z\d]{2})([A\d])$/,

  [TYPE_VALIDATION.POSTAL_CODE]: /(^([0-9]{5,5})|^)$/,

  [TYPE_VALIDATION.SPECIAL_CHARACTER]:
    /^([a-z ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ A-Z0-9 ‘,\-:;\\#/¿()´¨&"_*.%¿?$¡!@+¨]*$)|(\n[a-z ñáäéëíïóöúüÑÁÄÉËÍÏÓÖÚÜ A-Z0-9 ‘,\-:;\\#/()´¨&"_*.%¿?$¡!@+¨]{1,}$)/,
}
