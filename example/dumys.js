export const DUMMY_DATA = [
  {
    id: 'passwor-two',
    title: 'password two',
    messagePSWD: 'Message custom PASSWORD TWO',
    type: ['R','PSWD'],
    value: 'ferF',
  },
  {
    id: 'passwor-one',
    title: 'password one',
    type: ['R','PSWD_VERIFY'],
    value: '123456',
    valueCompare:'12345'
  },
  {
    id: 'one',
    title: 'input two',
    type: ['R','T'],
    value: '',
    messageR:'Message custom R',
    messageT: 'Message custom T'
  },
  {
    title: 'input one',
    value: '3',
    messageT: 'Message custom T',
    expression:/[0-9]/
  },
  {
    id: 'two',
    title: 'input two',
    type: ['R','T'],
    value: '',
    messageR:'Message custom R',
    messageT: 'Message custom T'
  },
  {
    id: 'three',
    title: 'input three',
    type: ['R','TN'],
    value: '54--',
    messageTN: 'Message custom TN'
  },
  {
    id: 'four',
    title: 'input four',
    type: ['R','N'],
    value: 'abc',
    messageR:'Message custom R',
    messageN: 'Message custom N'
  },
  {
    id: 'five',
    title: 'input five',
    type: ['R','N'],
    value: 'welcome',
  }
];
