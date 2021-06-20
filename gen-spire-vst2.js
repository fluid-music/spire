
const fluid = require('fluid-music')
const spireReport = require('./vst2-report')
const detailParamReport = require('./vst2-param-report')

function createChoices(choices) {
  const result = {}
  choices.forEach((choice, i) => { result[choice] = i * 0.001 + 0.0005 })
  return result
}

for (const paramInfo of spireReport.params) {
  if (detailParamReport.hasOwnProperty(paramInfo.name)) {
    paramInfo.choices = createChoices(detailParamReport[paramInfo.name])
  }
  else if (paramInfo.name.endsWith('_uoct')) {
    paramInfo.key = `osc${paramInfo.name[3]}UnisonInterval`
    paramInfo.choices = createChoices([ '8va', '16va', '24va', 'maj3rd', 'min3rd', 'maj7th', 'dom7th', 'minmaj7th', 'minor7th', 'min9th', 'maj9th', 'dom9th', 'halfdim7th', 'dim7th', 'sus2', 'sus4', 'p5th', 'p4th'])
  }
  else if (paramInfo.name.endsWith('_ucnt')) {
    paramInfo.key = `osc${paramInfo.name[3]}UnisonVoices`
    paramInfo.choices = createChoices(['1', '2', '3', '4', '5', '6', '7', '8', '9'])
  }
  else if (/osc\d_type/.test(paramInfo.name)) {
    paramInfo.key = `osc${paramInfo.name[3]}Type`
    paramInfo.choices = createChoices(['classic', 'noise', 'fm', 'amSync', 'sawPwm', 'hardFm', 'vowel'])
  }
}

const moduleString = fluid.gen.generatePluginModule(spireReport)
const fs = require('fs')
const path = require('path')
const filename = path.join(__dirname, 'src', 'spire-vst2.ts')
fs.createWriteStream(filename).write(moduleString)
