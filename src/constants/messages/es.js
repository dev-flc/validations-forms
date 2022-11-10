import { isValidString } from "./../../utils/utils.js"
import { TYPE_VALIDATION as TV } from "./../constants.js"

export const ES_MESSAGE_ERRORS = {
  ERROR_TYPE_ARRAY: "El valor de type no es un array o un string.",
  ERROR_TYPE_OBJECT:
    "Propiedad invalida, se espera una propiedad de tipo objeto.",
  ERROR_TYPE_LANGUAGE:
    'La propiedad de idioma no es válida, ingrese solo "EN" o "ES".',
  ERROR_TYPE_VALIDATION: "El tipo de validacion no existe :(.",
  ERROR_EXPRESSION: "expresión regular indefinida :(.",
  ERROR_ID_UNDEFINED: "id indefinido :(.",
}

const messageDefault = (title) =>
  isValidString(title)
    ? `El dato ${title}, no es válido.`
    : `El dato no es válido.`

export const GET_MESSAGE = () => ({
  [TV.T]: (title) =>
    isValidString(title)
      ? `El dato ${title} no es válido, ingresa sólo letras.`
      : `El dato no es válido, ingresa sólo letras.`,

  [TV.R]: (title) =>
    isValidString(title)
      ? `El dato ${title}, es requerido.`
      : `El dato es requerido.`,

  [TV.N]: (title) =>
    isValidString(title)
      ? `El dato ${title} no es válido, ingresa sólo números.`
      : `El dato no es válido, ingresa sólo números.`,

  [TV.TN]: (title) =>
    isValidString(title)
      ? `El dato ${title} no es válido, ingresa sólo letras y números.`
      : `El dato no es válido, ingresa sólo letras y números.`,

  [TV.C]: (title) =>
    isValidString(title)
      ? `El dato ${title}, es requerido.`
      : `El dato es requerido.`,

  [TV.PASSWORD_LOWERCASE]: () => "Al menos una letra minúscula.",
  [TV.PASSWORD_UPPERCASE]: () => "Al menos una letra mayúscula.",
  [TV.PASSWORD_DIGIT]: () => "Al menos un dígito.",
  [TV.PASSWORD_SPECIAL_CHARACTER]: () =>
    "Al menos un carácter especial ($@$!%*?&).",
  [TV.PASSWORD_MIN]: () => "Mínimo 8 de longitud.",
  [TV.PASSWORD_MAX]: () => "Máximo 15 de longitud.",
  [TV.PASSWORD_BLANK_SPACE]: () => "No espacios vacíos.",

  [TV.PASSWORD_VERIFY]: () => "Las contraseñas no coinciden.",
})

export const ES = (type, title) => {
  let message = messageDefault(title)
  if (GET_MESSAGE().hasOwnProperty(type)) {
    message = GET_MESSAGE()[type](title)
  }
  return message
}
