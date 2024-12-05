/* 
Needs to be a Client Component to use rjsf imports
*/
'use client';

import Form from '@rjsf/core';
import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

const schema = {
  title: 'Todo',
  type: 'object',
  required: ['title'],
  properties: {
    title: { type: 'string', title: 'Title', default: 'A new task' },
    done: { type: 'boolean', title: 'Done?', default: false },
  },
};

const log = (type) => console.log.bind(console, type);

export default function Home() {
  return (
    <div>
      <div>Hi</div>
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
        crossOrigin="anonymous"
      >
      </link>
      <Form
        schema={schema}
        validator={validator}
        onChange={log('changed')}
        onSubmit={log('submitted')}
        onError={log('errors')}
      />
    </div>
  );
}
