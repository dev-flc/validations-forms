import {
  isRequired,
  generalValidations,
  isRequiredCombo,
} from "./../functions/functions.js"
import { EXPRESSIONS as E } from "./../utils/expressions.js"
import { TYPE_MESSAGE as TM } from "./../utils/constants.js"
export const SWITCH_VALIDATIONS = (d) => {
  let result = {}

  switch (d.type) {
    case "R":
      // required data validation
      result = isRequired(
        d.value,
        TM.MESSAGE_IS_REQUIRED,
        d.language,
        d.id,
        d.title,
        d.requiredMessageError
      )
      break

    case "T":
      // text data validation
      result = generalValidations(
        d.value,
        TM.MESSAGE_IS_TEXT,
        d.language,
        E.EXP_TEXT,
        d.id,
        d.title,
        d.textMessageError
      )
      break

    case "N":
      // number data validation
      result = generalValidations(
        d.value,
        TM.MESSAGE_IS_NUMBER,
        d.language,
        E.EXP_NUMBER,
        d.id,
        d.title,
        d.numberMessageError
      )
      break

    case "TN":
      // text and number data validation
      result = generalValidations(
        d.value,
        TM.MESSAGE_IS_TEXT_NUMBER,
        d.language,
        E.EXP_TEXT_NUMBER,
        d.id,
        d.title,
        d.texNumMessageError
      )
      break

    case "DATE":
      // Dete data validation
      result = generalValidations(
        d.value,
        TM.MESSAGE_IS_DATE,
        d.language,
        E.EXP_DATE,
        d.id,
        d.title,
        d.dateMessageError
      )
      break

    case "EMAIL":
      // Email data validation
      result = generalValidations(
        d.value,
        TM.MESSAGE_IS_EMAIL,
        d.language,
        E.EXP_EMAIL,
        d.id,
        d.title,
        d.emailMessageError
      )
      break

    case "CURP":
      // CURP data validation
      result = generalValidations(
        d.value,
        TM.MESSAGE_IS_CURP,
        d.language,
        E.EXP_CURP,
        d.id,
        d.title,
        d.curpMessageError
      )
      break

    case "RFC":
      // RFC data validation
      result = generalValidations(
        d.value,
        TM.MESSAGE_IS_RFC_KEY_CODE,
        d.language,
        E.EXP_RFC,
        d.id,
        d.title,
        d.rfcMessageError
      )
      break

    case "RFC_KEY_CODE":
      // RFC key code data validation
      result = generalValidations(
        d.value,
        TM.MESSAGE_IS_RFC,
        d.language,
        E.EXP_RFC_KEY_CODE,
        d.id,
        d.title,
        d.rfckeyCodeMessageError
      )
      break

    case "C":
      // RFC key code data validation
      result = isRequiredCombo(
        d.value,
        TM.MESSAGE_IS_COMBO,
        d.language,
        d.id,
        d.title,
        d.comboMessageError
      )
      break

    default:
      result = {
        id: d.id,
        message: "El tipo de validación no existe :(",
        status: false,
        title: d.title,
        type: d.type,
      }
      break
  }

  return result
}
