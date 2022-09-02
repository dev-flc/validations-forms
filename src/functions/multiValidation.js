import { SWITCH_VALIDATIONS } from "./../functions/switchValidations.js"
import {
  isString,
  isObject,
  isArray,
  isValidString,
} from "./../utils/funtionsUtils.js"
import { TYPE_LANGUAGE as TL } from "./../utils/constants.js"
export const multiValidation = (data, language = TL.DEFAULT) => {
  const result = {
    status: true,
  }

  for (const NEW_DATA of data) {
    let newResult = {
      message: "Propiedad invalida, se espera una propiedad de tipo objeto",
      status: false,
    }

    if (isObject(NEW_DATA)) {
      const {
        comboMessageError,
        curpMessageError,
        dateMessageError,
        emailMessageError,
        id,
        numberMessageError,
        requiredMessageError,
        rfcMessageError,
        rfckeyCodeMessageError,
        texNumMessageError,
        textMessageError,
        title,
        type,
        value,
      } = NEW_DATA
      newResult = {
        id,
        message: "El valor de type no es un array o un string con datos",
        status: false,
        title,
        type,
      }

      if (isArray(type) && type.length >= 1) {
        for (const NEW_TYPE of type) {
          const resultMulty = SWITCH_VALIDATIONS({
            comboMessageError,
            curpMessageError,
            dateMessageError,
            emailMessageError,
            id,
            language,
            numberMessageError,
            requiredMessageError,
            rfcMessageError,
            rfckeyCodeMessageError,
            texNumMessageError,
            textMessageError,
            title,
            type: NEW_TYPE,
            value,
          })

          if (resultMulty.status === false) {
            newResult = resultMulty
            break
          } else {
            newResult = resultMulty
          }
        }
      } else if (isString(type) && !isValidString(type)) {
        newResult = SWITCH_VALIDATIONS(NEW_DATA)
      } else {
        return newResult
      }

      if (!newResult.status) {
        return newResult
      }
    } else {
      return newResult
    }
  }

  return result
}
