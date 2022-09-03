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

export const ES = () => ({
  [TV.C]: (title) =>
    isValidString(title)
      ? `El dato es requerido`
      : `El dato ${title} es requerido`,

  [TV.CURP]: (title) =>
    isValidString(title)
      ? `El dato no es válido`
      : `El dato ${title} no es válido`,

  [TV.DATE]: (title) =>
    isValidString(title)
      ? `El dato no es válido`
      : `El dato ${title} no es válido`,

  [TV.EMAIL]: (title) =>
    isValidString(title)
      ? `El dato no es válido`
      : `El dato ${title} no es válido`,

  [TV.N]: (title) =>
    isValidString(title)
      ? `El dato no es válido, ingresa sólo números`
      : `El dato ${title} no es válido, ingresa sólo números`,

  [TV.RFC]: (title) =>
    isValidString(title)
      ? `El dato no es válido`
      : `El dato ${title} no es válido`,

  [TV.RFC_KEY_CODE]: (title) =>
    isValidString(title)
      ? `El dato no es válido`
      : `El dato ${title} no es válido`,

  [TV.R]: (title) =>
    isValidString(title)
      ? `El dato es requerido`
      : `El dato ${title} es requerido`,

  [TV.T]: (title) =>
    isValidString(title)
      ? `El dato no es válido, ingresa sólo letras`
      : `El dato ${title} no es válido, ingresa sólo letras`,

  [TV.TN]: (title) =>
    isValidString(title)
      ? `El dato no es válido, ingresa sólo letras y números`
      : `El dato ${title} no es válido, ingresa sólo letras y números`,
})
