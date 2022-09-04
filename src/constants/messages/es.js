import { isValidString } from "./../../utils/utils.js"
import { TYPE_VALIDATION as TV } from "./../constants.js"

export const ES_MESSAGE_ERRORS = {
  ERROR_TYPE_ARRAY: "El valor de type no es un array o un string.",
  ERROR_TYPE_OBJECT:
    "Propiedad invalida, se espera una propiedad de tipo objeto.",
  ERROR_TYPE_LANGUAGE:
    'La propiedad de idioma no es válida, ingrese solo "EN" o "ES".',
  ERROR_TYPE_VALIDATION: "El tipo de validacion no existe :(",
}

const messageDefault = (title) =>
  isValidString(title)
    ? `El dato ${title} no es válido`
    : `El dato no es válido`

export const GET_MESSAGE = () => ({
  [TV.T]: (title) =>
    isValidString(title)
      ? `El dato ${title} no es válido, ingresa sólo letras`
      : `El dato no es válido, ingresa sólo letras`,

  [TV.R]: (title) =>
    isValidString(title)
      ? `El dato ${title} es requerido`
      : `El dato es requerido`,

  [TV.N]: (title) =>
    isValidString(title)
      ? `El dato ${title} no es válido, ingresa sólo números`
      : `El dato no es válido, ingresa sólo números`,

  [TV.TN]: (title) =>
    isValidString(title)
      ? `El dato ${title} no es válido, ingresa sólo letras y números`
      : `El dato no es válido, ingresa sólo letras y números`,

  [TV.C]: (title) =>
    isValidString(title)
      ? `El dato ${title} es requerido`
      : `El dato es requerido`,
})

export const ES = (type, title) => {
  let message = messageDefault(title)
  if (GET_MESSAGE().hasOwnProperty(type)) {
    message = GET_MESSAGE()[type](title)
  }
  return message
}
