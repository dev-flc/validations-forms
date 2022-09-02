import { SWITCH_VALIDATIONS } from "./../functions/switchValidations.js"
import {
  isValidString,
  isObject,
  isString,
  isArray,
} from "./../utils/funtionsUtils.js"
import { TYPE_LANGUAGE as TL } from "./../utils/constants.js"
export const singleValidation = (data, language = TL.DEFAULT) => {
  let result = {
    message: "Propiedad invalida, se espera una propiedad de tipo objeto",
    status: false,
  }

  if (isObject(data)) {
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
    } = data
    result = {
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
          result = resultMulty
          break
        } else {
          result = resultMulty
        }
      }
    } else if (isString(type) && !isValidString(type)) {
      result = SWITCH_VALIDATIONS(data)
    }
  }

  return result
}
