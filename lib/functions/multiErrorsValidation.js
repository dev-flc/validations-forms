import { SWITCH_VALIDATIONS } from "./../functions/switchValidations.js";
import { isString, isObject, isArray, isValidString } from "./../utils/funtionsUtils.js";
import filter from "lodash/filter";
import { TYPE_LANGUAGE as TL } from "./../utils/constants.js";
export const multiErrorsValidation = (data, language = TL.DEFAULT) => {
  let result = {
    status: true
  };
  const DATA_ERRORS = data.map(newData => {
    let newResult = {
      message: "Propiedad invalida, se espera una propiedad de tipo objeto",
      status: false
    };

    if (isObject(newData)) {
      const {
        comboMessageError,
        curpMessageError,
        dateMessageError,
        emailMessageError,
        id,
        numberMessageError,
        requiredMessageError,
        rfckeyCodeMessageError,
        rfcMessageError,
        texNumMessageError,
        textMessageError,
        title,
        type,
        value
      } = newData;
      newResult = {
        id,
        message: "El valor de type no es un array o un string con datos",
        status: false,
        title,
        type
      };

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
            value
          });

          if (resultMulty.status === false) {
            newResult = resultMulty;
            break;
          } else {
            newResult = resultMulty;
          }
        }

        return newResult;
      } else if (isString(type) && !isValidString(type)) {
        return SWITCH_VALIDATIONS(newData);
      } else {
        return newResult;
      }
    }

    return newResult;
  });
  const errors = filter(DATA_ERRORS, {
    status: false
  });

  if (errors.length >= 1) {
    result = { ...result,
      errors,
      status: false
    };
  }

  return result;
};