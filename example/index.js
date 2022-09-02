/*
const {
  singleValidation,
  multiValidation,
  multiErrorsValidation,
} = require("./../lib/index.js");
*/
import {
  singleValidation,
  multiValidation,
  multiErrorsValidation,
} from "./../lib/index.js";

import { DUMMY_DATA } from './dumys.js';

console.log(
  '%c<== singleValidation ==>',
  'color:#FF8A71;font-size:1rem;font-weight:bold;,',
  JSON.stringify(singleValidation(DUMMY_DATA[0]), null, 4)
);

console.log(
  '%c<== multiValidation ==>',
  'color:#FF8A71;font-size:1rem;font-weight:bold;,',
  JSON.stringify(multiValidation(DUMMY_DATA), null, 4)
);

console.log(
  '%c<== multiErrorsValidation ==>',
  'color:#FF8A71;font-size:1rem;font-weight:bold;,',
  JSON.stringify(multiErrorsValidation(DUMMY_DATA), null, 4)
);
