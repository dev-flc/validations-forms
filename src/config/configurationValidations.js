import {
  isRequired,
  validationsExpression,
  validationsPassword,
  validationsPasswordVerify,
  isRequiredCombo,
} from "./functions.js"
import { TYPE_VALIDATION as TV } from "./../constants/constants.js"
import { EXPRESSIONS as EXP } from "./../constants/expressions.js"

export const configurationValidations = {
  [TV.T]: {
    expression: EXP[TV.T],
    func: validationsExpression,
  },

  [TV.R]: {
    func: isRequired,
  },

  [TV.N]: {
    expression: EXP[TV.N],
    func: validationsExpression,
  },

  [TV.ND]: {
    expression: EXP[TV.ND],
    func: validationsExpression,
  },

  [TV.TN]: {
    expression: EXP[TV.TN],
    func: validationsExpression,
  },

  [TV.TN_OMIT_ACCENTS]: {
    expression: EXP[TV.TN_OMIT_ACCENTS],
    func: validationsExpression,
  },

  [TV.C]: {
    func: isRequiredCombo,
  },

  [TV.CURP]: {
    expression: EXP[TV.CURP],
    func: validationsExpression,
  },

  [TV.DATE]: {
    expression: EXP[TV.DATE],
    func: validationsExpression,
  },

  [TV.EMAIL]: {
    expression: EXP[TV.EMAIL],
    func: validationsExpression,
  },

  [TV.RFC]: {
    expression: EXP[TV.RFC],
    func: validationsExpression,
  },

  [TV.RFC_KEY_CODE]: {
    expression: EXP[TV.RFC_KEY_CODE],
    func: validationsExpression,
  },

  [TV.PASSWORD_VERIFY]: {
    func: validationsPasswordVerify,
  },

  [TV.PASSWORD]: {
    expression: EXP[TV.PASSWORD],
    func: validationsPassword,
  },

  [TV.POSTAL_CODE]: {
    expression: EXP[TV.POSTAL_CODE],
    func: validationsExpression,
  },

  [TV.SPECIAL_CHARACTER]: {
    expression: EXP[TV.SPECIAL_CHARACTER],
    func: validationsExpression,
  },

  [TV.CUSTOM_EXP]: {
    func: validationsExpression,
  },
}
