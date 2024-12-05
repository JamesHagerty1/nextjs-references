/* 
Needs to be a Client Component to use rjsf imports
*/
'use client';

import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';

const schema = {
  title: 'Test form',
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    age: {
      type: 'number',
    },
  },
};

export default function Home() {
  return (
    <div>
      <div>Hi!!</div>
      <Form
        schema={schema}
        validator={validator}
      />
    </div>
  );
}
