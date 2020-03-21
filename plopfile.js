module.exports = function (plop) {
  plop.setGenerator('reducer', {
    description: 'reducer boilerplate',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'reducer name please',
    }],
    actions: [
      {
        type: 'add',
        path: 'src/reducers/{{name}}.reducer.js',
        templateFile: 'plop-templates/reducer.hbs',
      },
      {
        type: 'append',
        path: 'src/reducers/rootReducer.js',
        pattern: '// plop reducers section',
        template: '  {{name}}: {{name}}Reducer,'
      },
      {
        type: 'append',
        path: 'src/reducers/rootReducer.js',
        pattern: '// plop import section',
        template: 'import {{name}}Reducer from \'./{{name}}.reducer\''
      },
      {
        type: 'add',
        path: 'src/actions/{{name}}.actions.js',
        templateFile: 'plop-templates/actions.hbs',
      },
      {
        type: 'add',
        path: 'src/sagas/{{name}}.saga.js',
        templateFile: 'plop-templates/saga.hbs',
      },
      {
        type: 'append',
        path: 'src/sagas/rootSaga.js',
        pattern: '// plop sagas section',
        template: '    {{name}}Saga(),'
      },
      {
        type: 'append',
        path: 'src/sagas/rootSaga.js',
        pattern: '// plop import section',
        template: 'import {{name}}Saga from \'./{{name}}.saga\''
      },
    ]
  });
  plop.setGenerator('action', {
    description: 'action boilerplate',
    prompts: [
      {
        type: 'input',
        name: 'action',
        message: 'name of the action please',
      },
      {
        type: 'input',
        name: 'reducer',
        message: 'reducer that will handle this action please',
      },
    ],
    actions: [
      {
        type: 'append',
        path: 'src/actions/{{reducer}}.actions.js',
        pattern: '// plop actions section',
        template: 'export const ACTION_{{constantCase action}} = \'ACTION_{{constantCase action}}\';'
      },
      {
        type: 'append',
        path: 'src/actions/{{reducer}}.actions.js',
        pattern: '// plop actions section',
        template: 'export const ACTION_{{constantCase action}}_SUCCESS = \'ACTION_{{constantCase action}}_SUCCESS\';'
      },
      {
        type: 'append',
        path: 'src/actions/{{reducer}}.actions.js',
        pattern: '// plop actions section',
        template: 'export const ACTION_{{constantCase action}}_FAILURE = \'ACTION_{{constantCase action}}_FAILURE\';'
      },
      {
        type: 'append',
        path: 'src/actions/{{reducer}}.actions.js',
        pattern: '// plop action generators section',
        template: 'export const {{camelCase action}}Action = (payload) => ({ type: ACTION_{{constantCase action}}, payload });'
      },
      {
        type: 'append',
        path: 'src/reducers/{{reducer}}.reducer.js',
        pattern: '// plop imports section',
        template: 'import { ACTION_{{constantCase action}}, ACTION_{{constantCase action}}_SUCCESS, ACTION_{{constantCase action}}_FAILURE } from \'../actions/{{reducer}}.actions\';',
      },
      {
        type: 'append',
        path: 'src/reducers/{{reducer}}.reducer.js',
        pattern: '// plop action handlers section',
        templateFile: 'plop-templates/action-handler.hbs',
      },
      {
        type: 'append',
        path: 'src/sagas/{{reducer}}.saga.js',
        pattern: '// plop saga action handlers section',
        templateFile: 'plop-templates/saga-action-handler.hbs',
      },
      {
        type: 'append',
        path: 'src/sagas/{{reducer}}.saga.js',
        pattern: '// plop sagas section',
        template: 'yield takeEvery(ACTION_{{constantCase action}}, on{{properCase action}});',
      },
      {
        type: 'append',
        path: 'src/sagas/{{reducer}}.saga.js',
        pattern: '// plop imports section',
        template: 'import { ACTION_{{constantCase action}} } from \'../actions/{{reducer}}.actions\';',
      },
    ]
  });
  plop.setGenerator('react-component', {
    description: 'react component boilerplate',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'component name please',
    }],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{properCase name}}/{{properCase name}}.scss',
        templateFile: 'plop-templates/react-component-scss.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{properCase name}}/{{properCase name}}.js',
        templateFile: 'plop-templates/react-component-js.hbs',
      },
    ]
  });
}

