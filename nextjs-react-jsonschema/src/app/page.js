// Needs to be a Client Component to use rjsf imports
'use client';

import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
// Need bootstrap styles for rjsf Form to look right
import 'bootstrap/dist/css/bootstrap.css'
import './styles/rjsf.css'

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

// Gives divs for individual fields a class, so I can apply styles to them
const uiSchema = {
  name: {
    'ui:classNames': 'custom-class-name',
  },
  age: {
    'ui:classNames': 'custom-class-age',
  },
};

export default function Home() {
  return (
    <div>
      <div>Hi!!</div>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        validator={validator}
      />
    </div>
  );
}
