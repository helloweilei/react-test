const { validate } = require('schema-utils');

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    }
  }
}

module.exports = class HelloWorldPlugin {
  constructor(options = {}) {
    validate(schema, options, {
      name: 'HelloWorldPlugin',
      baseDataPath: 'options'
    });
  }

  // eslint-disable-next-line class-methods-use-this
  apply(compiler) {
    compiler.hooks.done.tap("HelloWorldPlugin", (/* stats */) => {
      // console.log(stats);
    })

    compiler.hooks.environment.tap("HelloWorldPlugin", () => {
    })

    compiler.hooks.environment.tap("HelloWorldPlugin", () => {
    })

    compiler.hooks.compilation.tap("HelloWorldPlugin", (compilation) => {
      compilation.hooks.optimize.tap("HelloWorldPlugin", (assets) => {
        console.log("optimize hook: ", assets);
      })
    })

  }
}