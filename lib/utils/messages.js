import { isTitle } from "./../utils/funtionsUtils.js";
import { EN } from "./../utils/messages/en.js";
import { ES } from "./../utils/messages/es.js";
import { TYPE_LANGUAGE as TL } from "./../utils/constants.js";

const DATA_MESSAGES = (language, message, title) => {
  if (language === TL.EN) {
    console.log("messages.js --> TL.EN) ==>", TL.EN);
    return EN()[message](title);
  } else if (language === TL.ES) {
    console.log("messages.js --> TL.ES ==>", TL.ES);
    return ES()[message](title);
  }

  return `The language property is invalid, please enter only "EN" or "ES"`;
};

export const messageError = (title, language, textMessageError, message) => {
  if (!isTitle(textMessageError)) {
    return textMessageError;
  }

  return DATA_MESSAGES(language, message, title);
};