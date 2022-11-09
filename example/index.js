import {
  singleValidation,
  multiValidation,
  multiValidationErrors,
  EXPRESSIONS
} from "./../package/index.js";

import { DUMMY_DATA } from './dumys.js';

  console.log(
  '%c<== singleValidation ==>',
  'color:#FF8A71;font-size:1rem;font-weight:bold;,',
  JSON.stringify(singleValidation(DUMMY_DATA[0],"EN"), null, 4)
  );

  console.log(
  '%c<== multiValidationDos ==>',
  'color:#FF8A71;font-size:1rem;font-weight:bold;,',
  JSON.stringify(multiValidation(DUMMY_DATA), null, 4)
  );

  console.log(
  '%c<== multiValidationErrors ES==>',
  'color:#FF8A71;font-size:1rem;font-weight:bold;,',
  JSON.stringify(multiValidationErrors(DUMMY_DATA), null, 4)
  );

  console.log(
  '%c<== multiValidationErrors EN==>',
  'color:#FF8A71;font-size:1rem;font-weight:bold;,',
  JSON.stringify(multiValidationErrors(DUMMY_DATA,'EN'), null, 4)
  );

  console.log('index.js --> EXPRESSIONS ==>', EXPRESSIONS)
