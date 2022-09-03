import {
  isRequired,
  validationsExpression,
  isRequiredCombo,
} from "./functions.js"
import { TYPE_VALIDATION } from "./../constants/constants.js"
import { EXPRESSIONS as EXP } from "./../constants/expressions.js"

export const configurationValidations = {
  [TYPE_VALIDATION.R]: {
    func: isRequired,
  },

  [TYPE_VALIDATION.T]: {
    expression: EXP[TYPE_VALIDATION.T],
    func: validationsExpression,
  },

  [TYPE_VALIDATION.N]: {
    expression: EXP[TYPE_VALIDATION.N],
    func: validationsExpression,
  },

  [TYPE_VALIDATION.TN]: {
    expression: EXP[TYPE_VALIDATION.TN],
    func: validationsExpression,
  },

  [TYPE_VALIDATION.DATE]: {
    expression: EXP[TYPE_VALIDATION.DATE],
    func: validationsExpression,
  },

  [TYPE_VALIDATION.EMAIL]: {
    expression: EXP[TYPE_VALIDATION.EMAIL],
    func: validationsExpression,
  },

  [TYPE_VALIDATION.CURP]: {
    expression: EXP[TYPE_VALIDATION.CURP],
    func: validationsExpression,
  },

  [TYPE_VALIDATION.RFC]: {
    expression: EXP[TYPE_VALIDATION.RFC],
    func: validationsExpression,
  },

  [TYPE_VALIDATION.RFC_KEY_CODE]: {
    expression: EXP[TYPE_VALIDATION.RFC_KEY_CODE],
    func: validationsExpression,
  },

  [TYPE_VALIDATION.C]: {
    func: isRequiredCombo,
  },
}
