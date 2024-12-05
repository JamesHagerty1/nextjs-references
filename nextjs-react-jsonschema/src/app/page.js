/*
Useful references:
https://nextjs.org/docs/13/app/building-your-application/styling/css-modules
https://rjsf-team.github.io/react-jsonschema-form/docs/quickstart/
https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/uiSchema
*/

// Needs to be a Client Component to use rjsf imports
'use client';

import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
// Need bootstrap styles for rjsf Form to look right (unsure  if this works
// due to an npm install of bootstrap or if this comes with Next)
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
  'ui:classNames': 'rjsf-form',
  name: {
    'ui:classNames': 'rjsf-field',
  },
  age: {
    'ui:classNames': 'rjsf-field',
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
