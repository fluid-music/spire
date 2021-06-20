// Some spire parameters have a large number of choices -- to many to get with
// the standard reporting method. This little helper gets parameter choices with
// higher resolution.
const fluid = require('fluid-music')
const fs = require('fs')
const path = require('path')
const cybr = fluid.cybr
const client = new fluid.Client()

const paramsToGet = [
  // Envelopes
  'env1_target1', 'env1_target2', 'env2_target1', 'env2_target2', 'env3_target1', 'env3_target2', 'env4_target1', 'env4_target2',
  // LFOs
  'lfo1_time', 'lfo2_time', 'lfo3_time', 'lfo4_time', 'lfo1_form', 'lfo2_form', 'lfo3_form', 'lfo4_form',
  'lfo1_target1', 'lfo1_target2', 'lfo2_target1', 'lfo2_target2', 'lfo3_target1', 'lfo3_target2', 'lfo4_target1', 'lfo4_target2', 
  // filters
  'flt1_type', 'flt1_mode', 'flt2_type', 'flt2_mode',
  // upper right pannel
  'shp_mode', 'phs_stages', 'chr_mode',

  // matrix (intense!)
  'slot1_Src1', 'slot1_Src2', 'slot1_Trg1', 'slot1_Trg2', 'slot1_Trg3', 'slot1_Trg4', 'slot2_Src1', 'slot2_Src2', 'slot2_Trg1', 'slot2_Trg2', 'slot2_Trg3', 'slot2_Trg4', 'slot3_Src1', 'slot3_Src2', 'slot3_Trg1', 'slot3_Trg2', 'slot3_Trg3', 'slot3_Trg4', 'slot4_Src1', 'slot4_Src2', 'slot4_Trg1', 'slot4_Trg2', 'slot4_Trg3', 'slot4_Trg4', 'slot5_Src1', 'slot5_Src2', 'slot5_Trg1', 'slot5_Trg2', 'slot5_Trg3', 'slot5_Trg4', 'slot6_Src1', 'slot6_Src2', 'slot6_Trg1', 'slot6_Trg2', 'slot6_Trg3', 'slot6_Trg4', 'slot7_Src1', 'slot7_Src2', 'slot7_Trg1', 'slot7_Trg2', 'slot7_Trg3', 'slot7_Trg4', 'slot8_Src1', 'slot8_Src2', 'slot8_Trg1', 'slot8_Trg2', 'slot8_Trg3', 'slot8_Trg4', 'slot9_Src1', 'slot9_Src2', 'slot9_Trg1', 'slot9_Trg2', 'slot9_Trg3', 'slot9_Trg4', 'slot10_Src1', 'slot10_Src2', 'slot10_Trg1', 'slot10_Trg2', 'slot10_Trg3', 'slot10_Trg4', 'slot11_Src1', 'slot11_Src2', 'slot11_Trg1', 'slot11_Trg2', 'slot11_Trg3', 'slot11_Trg4', 'slot12_Src1', 'slot12_Src2', 'slot12_Trg1', 'slot12_Trg2', 'slot12_Trg3', 'slot12_Trg4', 'slot13_Src1', 'slot13_Src2', 'slot13_Trg1', 'slot13_Trg2', 'slot13_Trg3', 'slot13_Trg4', 'slot14_Src1', 'slot14_Src2', 'slot14_Trg1', 'slot14_Trg2', 'slot14_Trg3', 'slot14_Trg4', 'slot15_Src1', 'slot15_Src2', 'slot15_Trg1', 'slot15_Trg2', 'slot15_Trg3', 'slot15_Trg4',

  // Step Sequencer --- these are not automatable
  'stp1_time', 'stp1_start', 'stp1_mode', 'stp1_stop',
  'stp2_time', 'stp2_start', 'stp2_mode', 'stp2_stop',
  // arp --- these are not automatable
  'arp_speed', 'arp_mode', 'arp_velocity', 'arp_octave', 'arp_warp',
]

const allResults = {}
function writeAllResults() {
  const outFilename = path.join(__dirname, 'vst2-param-report.js')
  const outputStream = fs.createWriteStream(outFilename)
  const outputString = `module.exports = ${JSON.stringify(allResults)}`
  outputStream.write(outputString)
  console.log('wrote: ', outFilename)
}

function createGetterForParam(paramName) {
  // create the cybr request object
  const getReport = cybr.plugin.getSingleParamReport(paramName, 2000)
  // add a reply handler that puts the results in allResults
  getReport.handleResponse = (error, message, arg1) => {
    if (error) {
      console.error(message.value)
      return
    }

    const json = JSON.parse(arg1.value)
    const strings = json.outputValueStepsAsStrings
    const results = [strings.shift()]
    for (const name of strings) {
      if (results[results.length - 1] !== name) results.push(name)
    }
    console.log('OK:', paramName, results.length, message.value)
    allResults[paramName] = results
  }
  return getReport
}

const run = async () => {
  const result =  await client.send([
    cybr.global.activate('deleteme', true),
    cybr.audiotrack.select('pluginTrack'),
    cybr.plugin.select('Spire-1.5'),
    paramsToGet.map(createGetterForParam)
  ])

  writeAllResults()
}

run()
  .then(() => console.warn('done'))
  .catch((e) => { throw e })