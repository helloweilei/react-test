module.exports = class OutputFilesPlugin {
  static defaultOptions = {
    outputFileDir: 'files.md'
  }

  static PluginName = 'OutputFilesPlugin';

  constructor(options = {}) {
    this.options = {
      ...OutputFilesPlugin.defaultOptions,
      ...options,
    }
  }

  apply(compiler) {
    compiler.hooks.thisCompilation.tap(OutputFilesPlugin.PluginName, (compilation) => {
      const { webpack } = compiler;
      const { Compilation } = webpack;
      const { RawSource } = webpack.sources;

      compilation.hooks.processAssets.tap({
        name: OutputFilesPlugin.PluginName,
        stage: Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE
      }, assets => {
        const content = Object.keys(assets).map(key => `- ${key}`).join('\n');
        compilation.emitAsset(this.options.outputFileDir, new RawSource(content));
      })
    })
  }
}