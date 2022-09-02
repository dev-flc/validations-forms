import { isTitle } from "./../../utils/funtionsUtils.js";
import { TYPE_MESSAGE as TM } from "./../../utils/constants.js";
export const EN = () => ({
  [TM.MESSAGE_IS_COMBO]: title => isTitle(title) ? `The data is required` : `The data ${title} is required.`,
  [TM.MESSAGE_IS_CURP]: title => isTitle(title) ? `The data is not valid` : `The data ${title} is not valid`,
  [TM.MESSAGE_IS_DATE]: title => isTitle(title) ? `The data is not valid` : `The data ${title} is not valid`,
  [TM.MESSAGE_IS_EMAIL]: title => isTitle(title) ? `The data is not valid` : `The data ${title} is not valid`,
  [TM.MESSAGE_IS_NUMBER]: title => isTitle(title) ? `The data is not valid, please enter only numbers` : `The data ${title} is not valid, please enter only numbers`,
  [TM.MESSAGE_IS_REQUIRED]: title => isTitle(title) ? `The data is required` : `The data ${title} is required.`,
  [TM.MESSAGE_IS_RFC]: title => isTitle(title) ? `The data is not valid` : `The data ${title} is not valid`,
  [TM.MESSAGE_IS_RFC_KEY_CODE]: title => isTitle(title) ? `The data is not valid` : `The data ${title} is not valid`,
  [TM.MESSAGE_IS_TEXT]: title => isTitle(title) ? `The data is not valid, please enter only letters` : `The data ${title} is not valid, please enter only letters`,
  [TM.MESSAGE_IS_TEXT_NUMBER]: title => isTitle(title) ? `The data is not valid, please enter only letters and numbers` : `The data ${title} is not valid, please enter only letters and numbers`
});