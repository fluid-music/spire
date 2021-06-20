import { PluginType, FluidPlugin, techniques } from 'fluid-music';
const { PluginAutomation } = techniques;
const pluginName = 'Spire-1.5'
const pluginType = PluginType.VST2

export interface Spire15Vst2Parameters {
  glideLog? : number;
  /** value from 0 to 1000 */
  glide? : number;
  drift? : number;
  /** value from 0 to 1000 */
  xComp? : number;
  /** value from 0 to 1000 */
  velocity? : number;
  /** value from 0 to 1000 */
  volume? : number;
  eqBand? : number;
  eqPower? : number;
  /** value from 0 to 1000 */
  eqLowFrq? : number;
  /** value from 0 to 1000 */
  eqLowQ? : number;
  /** value from 0 to 1000 */
  eqLowLev? : number;
  /** value from 0 to 1000 */
  eqMidFrq? : number;
  /** value from 0 to 1000 */
  eqMidQ? : number;
  /** value from 0 to 1000 */
  eqMidLev? : number;
  /** value from 0 to 1000 */
  eqHiFrq? : number;
  /** value from 0 to 1000 */
  eqHiQ? : number;
  /** value from 0 to 1000 */
  eqHiLev? : number;
  /** value from 0 to 1000 */
  mixOsc1? : number;
  /** value from 0 to 1000 */
  mixOsc2? : number;
  /** value from 0 to 1000 */
  mixOsc3? : number;
  /** value from 0 to 1000 */
  mixOsc4? : number;
  osc1Type? : number;
  osc1Oct? : number;
  osc1Note? : number;
  /** value from 0 to 1000 */
  osc1Fine? : number;
  /** value from 0 to 1000 */
  osc1CtrlA? : number;
  /** value from 0 to 1000 */
  osc1CtrlB? : number;
  /** value from 0 to 1000 */
  osc1Phase? : number;
  osc1Wave? : number;
  /** value from 0 to 1000 */
  osc1Wtmix? : number;
  /** value from 0 to 1000 */
  osc1Udet? : number;
  /** value from 0 to 1000 */
  osc1Uwid? : number;
  osc1UnisonVoices? : number;
  osc1UnisonInterval? : number;
  /** value from 0 to 1000 */
  osc1Uden? : number;
  /** value from 0 to 1000 */
  osc1Pan? : number;
  osc1Ana? : number;
  osc1Inv? : number;
  osc1Key? : number;
  /** value from 0 to 1000 */
  osc1Mixto? : number;
  osc2Type? : number;
  osc2Oct? : number;
  osc2Note? : number;
  /** value from 0 to 1000 */
  osc2Fine? : number;
  /** value from 0 to 1000 */
  osc2CtrlA? : number;
  /** value from 0 to 1000 */
  osc2CtrlB? : number;
  /** value from 0 to 1000 */
  osc2Phase? : number;
  osc2Wave? : number;
  /** value from 0 to 1000 */
  osc2Wtmix? : number;
  /** value from 0 to 1000 */
  osc2Udet? : number;
  /** value from 0 to 1000 */
  osc2Uwid? : number;
  osc2UnisonVoices? : number;
  osc2UnisonInterval? : number;
  /** value from 0 to 1000 */
  osc2Uden? : number;
  /** value from 0 to 1000 */
  osc2Pan? : number;
  osc2Ana? : number;
  osc2Inv? : number;
  osc2Key? : number;
  /** value from 0 to 1000 */
  osc2Mixto? : number;
  osc3Type? : number;
  osc3Oct? : number;
  osc3Note? : number;
  /** value from 0 to 1000 */
  osc3Fine? : number;
  /** value from 0 to 1000 */
  osc3CtrlA? : number;
  /** value from 0 to 1000 */
  osc3CtrlB? : number;
  /** value from 0 to 1000 */
  osc3Phase? : number;
  osc3Wave? : number;
  /** value from 0 to 1000 */
  osc3Wtmix? : number;
  /** value from 0 to 1000 */
  osc3Udet? : number;
  /** value from 0 to 1000 */
  osc3Uwid? : number;
  osc3UnisonVoices? : number;
  osc3UnisonInterval? : number;
  /** value from 0 to 1000 */
  osc3Uden? : number;
  /** value from 0 to 1000 */
  osc3Pan? : number;
  osc3Ana? : number;
  osc3Inv? : number;
  osc3Key? : number;
  /** value from 0 to 1000 */
  osc3Mixto? : number;
  osc4Type? : number;
  osc4Oct? : number;
  osc4Note? : number;
  /** value from 0 to 1000 */
  osc4Fine? : number;
  /** value from 0 to 1000 */
  osc4CtrlA? : number;
  /** value from 0 to 1000 */
  osc4CtrlB? : number;
  /** value from 0 to 1000 */
  osc4Phase? : number;
  osc4Wave? : number;
  /** value from 0 to 1000 */
  osc4Wtmix? : number;
  /** value from 0 to 1000 */
  osc4Udet? : number;
  /** value from 0 to 1000 */
  osc4Uwid? : number;
  osc4UnisonVoices? : number;
  osc4UnisonInterval? : number;
  /** value from 0 to 1000 */
  osc4Uden? : number;
  /** value from 0 to 1000 */
  osc4Pan? : number;
  osc4Ana? : number;
  osc4Inv? : number;
  osc4Key? : number;
  /** value from 0 to 1000 */
  osc4Mixto? : number;
  flt1Type? : number;
  flt1Mode? : number;
  /** value from 0 to 1000 */
  flt1Cut? : number;
  /** value from 0 to 1000 */
  flt1Res? : number;
  flt2Type? : number;
  flt2Mode? : number;
  /** value from 0 to 1000 */
  flt2Cut? : number;
  /** value from 0 to 1000 */
  flt2Res? : number;
  fltRout? : number;
  fltLink? : number;
  /** value from 0 to 1000 */
  fltBalance? : number;
  /** value from 0 to 1000 */
  fltKeytrack? : number;
  /** value from 0 to 1000 */
  env1Att? : number;
  /** value from 0 to 1000 */
  env1Dec? : number;
  /** value from 0 to 1000 */
  env1Sus? : number;
  /** value from 0 to 1000 */
  env1Slt? : number;
  /** value from 0 to 1000 */
  env1Sll? : number;
  /** value from 0 to 1000 */
  env1Rel? : number;
  env1AttCrv? : number;
  env1DecCrv? : number;
  env1SlpCrv? : number;
  env1RelCrv? : number;
  env1Target1? : number;
  /** value from 0 to 1000 */
  env1Amt1? : number;
  /** value from 0 to 1000 */
  env1Vel1? : number;
  env1Target2? : number;
  /** value from 0 to 1000 */
  env1Amt2? : number;
  /** value from 0 to 1000 */
  env1Vel2? : number;
  /** value from 0 to 1000 */
  env2Att? : number;
  /** value from 0 to 1000 */
  env2Dec? : number;
  /** value from 0 to 1000 */
  env2Sus? : number;
  /** value from 0 to 1000 */
  env2Slt? : number;
  /** value from 0 to 1000 */
  env2Sll? : number;
  /** value from 0 to 1000 */
  env2Rel? : number;
  env2AttCrv? : number;
  env2DecCrv? : number;
  env2SlpCrv? : number;
  env2RelCrv? : number;
  env2Target1? : number;
  /** value from 0 to 1000 */
  env2Amt1? : number;
  /** value from 0 to 1000 */
  env2Vel1? : number;
  env2Target2? : number;
  /** value from 0 to 1000 */
  env2Amt2? : number;
  /** value from 0 to 1000 */
  env2Vel2? : number;
  /** value from 0 to 1000 */
  env3Att? : number;
  /** value from 0 to 1000 */
  env3Dec? : number;
  /** value from 0 to 1000 */
  env3Sus? : number;
  /** value from 0 to 1000 */
  env3Slt? : number;
  /** value from 0 to 1000 */
  env3Sll? : number;
  /** value from 0 to 1000 */
  env3Rel? : number;
  env3AttCrv? : number;
  env3DecCrv? : number;
  env3SlpCrv? : number;
  env3RelCrv? : number;
  env3Target1? : number;
  /** value from 0 to 1000 */
  env3Amt1? : number;
  /** value from 0 to 1000 */
  env3Vel1? : number;
  env3Target2? : number;
  /** value from 0 to 1000 */
  env3Amt2? : number;
  /** value from 0 to 1000 */
  env3Vel2? : number;
  /** value from 0 to 1000 */
  env4Att? : number;
  /** value from 0 to 1000 */
  env4Dec? : number;
  /** value from 0 to 1000 */
  env4Sus? : number;
  /** value from 0 to 1000 */
  env4Slt? : number;
  /** value from 0 to 1000 */
  env4Sll? : number;
  /** value from 0 to 1000 */
  env4Rel? : number;
  env4AttCrv? : number;
  env4DecCrv? : number;
  env4SlpCrv? : number;
  env4RelCrv? : number;
  env4Target1? : number;
  /** value from 0 to 1000 */
  env4Amt1? : number;
  /** value from 0 to 1000 */
  env4Vel1? : number;
  env4Target2? : number;
  /** value from 0 to 1000 */
  env4Amt2? : number;
  /** value from 0 to 1000 */
  env4Vel2? : number;
  /** value from 0 to 1000 */
  lfo1Rate? : number;
  lfo1Time? : number;
  /** value from 0 to 1000 */
  lfo1Sym? : number;
  lfo1Sync? : number;
  lfo1Mono? : number;
  /** value from 0 to 1000 */
  lfo1Morph? : number;
  /** value from 0 to 1000 */
  lfo1Phase? : number;
  lfo1Form? : number;
  /** value from 0 to 1000 */
  lfo1Amp? : number;
  /** value from 0 to 1000 */
  lfo1Fadein? : number;
  lfo1Target1? : number;
  /** value from 0 to 1000 */
  lfo1Amt1? : number;
  /** value from 0 to 1000 */
  lfo1Vel1? : number;
  lfo1Target2? : number;
  /** value from 0 to 1000 */
  lfo1Amt2? : number;
  /** value from 0 to 1000 */
  lfo1Vel2? : number;
  /** value from 0 to 1000 */
  lfo2Rate? : number;
  lfo2Time? : number;
  /** value from 0 to 1000 */
  lfo2Sym? : number;
  lfo2Sync? : number;
  lfo2Mono? : number;
  /** value from 0 to 1000 */
  lfo2Morph? : number;
  /** value from 0 to 1000 */
  lfo2Phase? : number;
  lfo2Form? : number;
  /** value from 0 to 1000 */
  lfo2Amp? : number;
  /** value from 0 to 1000 */
  lfo2Fadein? : number;
  lfo2Target1? : number;
  /** value from 0 to 1000 */
  lfo2Amt1? : number;
  /** value from 0 to 1000 */
  lfo2Vel1? : number;
  lfo2Target2? : number;
  /** value from 0 to 1000 */
  lfo2Amt2? : number;
  /** value from 0 to 1000 */
  lfo2Vel2? : number;
  /** value from 0 to 1000 */
  lfo3Rate? : number;
  lfo3Time? : number;
  /** value from 0 to 1000 */
  lfo3Sym? : number;
  lfo3Sync? : number;
  lfo3Mono? : number;
  /** value from 0 to 1000 */
  lfo3Morph? : number;
  /** value from 0 to 1000 */
  lfo3Phase? : number;
  lfo3Form? : number;
  /** value from 0 to 1000 */
  lfo3Amp? : number;
  /** value from 0 to 1000 */
  lfo3Fadein? : number;
  lfo3Target1? : number;
  /** value from 0 to 1000 */
  lfo3Amt1? : number;
  /** value from 0 to 1000 */
  lfo3Vel1? : number;
  lfo3Target2? : number;
  /** value from 0 to 1000 */
  lfo3Amt2? : number;
  /** value from 0 to 1000 */
  lfo3Vel2? : number;
  /** value from 0 to 1000 */
  lfo4Rate? : number;
  lfo4Time? : number;
  /** value from 0 to 1000 */
  lfo4Sym? : number;
  lfo4Sync? : number;
  lfo4Mono? : number;
  /** value from 0 to 1000 */
  lfo4Morph? : number;
  /** value from 0 to 1000 */
  lfo4Phase? : number;
  lfo4Form? : number;
  /** value from 0 to 1000 */
  lfo4Amp? : number;
  /** value from 0 to 1000 */
  lfo4Fadein? : number;
  lfo4Target1? : number;
  /** value from 0 to 1000 */
  lfo4Amt1? : number;
  /** value from 0 to 1000 */
  lfo4Vel1? : number;
  lfo4Target2? : number;
  /** value from 0 to 1000 */
  lfo4Amt2? : number;
  /** value from 0 to 1000 */
  lfo4Vel2? : number;
  shpMode? : number;
  shpBand? : number;
  /** value from 0 to 1000 */
  shpDrive? : number;
  /** value from 0 to 1000 */
  shpBit? : number;
  /** value from 0 to 1000 */
  shpSr? : number;
  /** value from 0 to 1000 */
  shpHicut? : number;
  /** value from 0 to 1000 */
  shpLowcut? : number;
  /** value from 0 to 1000 */
  shpWet? : number;
  shpHq? : number;
  phsStages? : number;
  /** value from 0 to 1000 */
  phsFreq? : number;
  /** value from 0 to 1000 */
  phsFback? : number;
  /** value from 0 to 1000 */
  phsSpread? : number;
  /** value from 0 to 1000 */
  phsRate? : number;
  /** value from 0 to 1000 */
  phsDepth? : number;
  /** value from 0 to 1000 */
  phsWet? : number;
  phsPre? : number;
  /** value from 0 to 1000 */
  chrDelay? : number;
  chrMode? : number;
  /** value from 0 to 1000 */
  chrFback? : number;
  /** value from 0 to 1000 */
  chrRate? : number;
  /** value from 0 to 1000 */
  chrDepth? : number;
  /** value from 0 to 1000 */
  chrWide? : number;
  /** value from 0 to 1000 */
  chrHicut? : number;
  /** value from 0 to 1000 */
  chrLowcut? : number;
  /** value from 0 to 1000 */
  chrWet? : number;
  /** value from 0 to 1000 */
  delTimeL? : number;
  /** value from 0 to 1000 */
  delTimeR? : number;
  delStimeL? : number;
  delStimeR? : number;
  delPingpong? : number;
  delSync? : number;
  /** value from 0 to 1000 */
  delRate? : number;
  /** value from 0 to 1000 */
  delFback? : number;
  /** value from 0 to 1000 */
  delWide? : number;
  /** value from 0 to 1000 */
  delModulate? : number;
  /** value from 0 to 1000 */
  delColor? : number;
  /** value from 0 to 1000 */
  delWet? : number;
  revMode? : number;
  revSync? : number;
  /** value from 0 to 1000 */
  revPretime? : number;
  revPretimeS? : number;
  /** value from 0 to 1000 */
  revDamp? : number;
  /** value from 0 to 1000 */
  revWide? : number;
  /** value from 0 to 1000 */
  revDecay? : number;
  /** value from 0 to 1000 */
  revColor? : number;
  /** value from 0 to 1000 */
  revWet? : number;
  slot1Src1? : number;
  slot1Src2? : number;
  /** value from 0 to 1000 */
  slot1Amt1? : number;
  slot1Trg1? : number;
  /** value from 0 to 1000 */
  slot1Amt2? : number;
  slot1Trg2? : number;
  /** value from 0 to 1000 */
  slot1Amt3? : number;
  slot1Trg3? : number;
  /** value from 0 to 1000 */
  slot1Amt4? : number;
  slot1Trg4? : number;
  slot2Src1? : number;
  slot2Src2? : number;
  /** value from 0 to 1000 */
  slot2Amt1? : number;
  slot2Trg1? : number;
  /** value from 0 to 1000 */
  slot2Amt2? : number;
  slot2Trg2? : number;
  /** value from 0 to 1000 */
  slot2Amt3? : number;
  slot2Trg3? : number;
  /** value from 0 to 1000 */
  slot2Amt4? : number;
  slot2Trg4? : number;
  slot3Src1? : number;
  slot3Src2? : number;
  /** value from 0 to 1000 */
  slot3Amt1? : number;
  slot3Trg1? : number;
  /** value from 0 to 1000 */
  slot3Amt2? : number;
  slot3Trg2? : number;
  /** value from 0 to 1000 */
  slot3Amt3? : number;
  slot3Trg3? : number;
  /** value from 0 to 1000 */
  slot3Amt4? : number;
  slot3Trg4? : number;
  slot4Src1? : number;
  slot4Src2? : number;
  /** value from 0 to 1000 */
  slot4Amt1? : number;
  slot4Trg1? : number;
  /** value from 0 to 1000 */
  slot4Amt2? : number;
  slot4Trg2? : number;
  /** value from 0 to 1000 */
  slot4Amt3? : number;
  slot4Trg3? : number;
  /** value from 0 to 1000 */
  slot4Amt4? : number;
  slot4Trg4? : number;
  slot5Src1? : number;
  slot5Src2? : number;
  /** value from 0 to 1000 */
  slot5Amt1? : number;
  slot5Trg1? : number;
  /** value from 0 to 1000 */
  slot5Amt2? : number;
  slot5Trg2? : number;
  /** value from 0 to 1000 */
  slot5Amt3? : number;
  slot5Trg3? : number;
  /** value from 0 to 1000 */
  slot5Amt4? : number;
  slot5Trg4? : number;
  slot6Src1? : number;
  slot6Src2? : number;
  /** value from 0 to 1000 */
  slot6Amt1? : number;
  slot6Trg1? : number;
  /** value from 0 to 1000 */
  slot6Amt2? : number;
  slot6Trg2? : number;
  /** value from 0 to 1000 */
  slot6Amt3? : number;
  slot6Trg3? : number;
  /** value from 0 to 1000 */
  slot6Amt4? : number;
  slot6Trg4? : number;
  slot7Src1? : number;
  slot7Src2? : number;
  /** value from 0 to 1000 */
  slot7Amt1? : number;
  slot7Trg1? : number;
  /** value from 0 to 1000 */
  slot7Amt2? : number;
  slot7Trg2? : number;
  /** value from 0 to 1000 */
  slot7Amt3? : number;
  slot7Trg3? : number;
  /** value from 0 to 1000 */
  slot7Amt4? : number;
  slot7Trg4? : number;
  slot8Src1? : number;
  slot8Src2? : number;
  /** value from 0 to 1000 */
  slot8Amt1? : number;
  slot8Trg1? : number;
  /** value from 0 to 1000 */
  slot8Amt2? : number;
  slot8Trg2? : number;
  /** value from 0 to 1000 */
  slot8Amt3? : number;
  slot8Trg3? : number;
  /** value from 0 to 1000 */
  slot8Amt4? : number;
  slot8Trg4? : number;
  slot9Src1? : number;
  slot9Src2? : number;
  /** value from 0 to 1000 */
  slot9Amt1? : number;
  slot9Trg1? : number;
  /** value from 0 to 1000 */
  slot9Amt2? : number;
  slot9Trg2? : number;
  /** value from 0 to 1000 */
  slot9Amt3? : number;
  slot9Trg3? : number;
  /** value from 0 to 1000 */
  slot9Amt4? : number;
  slot9Trg4? : number;
  slot10Src1? : number;
  slot10Src2? : number;
  /** value from 0 to 1000 */
  slot10Amt1? : number;
  slot10Trg1? : number;
  /** value from 0 to 1000 */
  slot10Amt2? : number;
  slot10Trg2? : number;
  /** value from 0 to 1000 */
  slot10Amt3? : number;
  slot10Trg3? : number;
  /** value from 0 to 1000 */
  slot10Amt4? : number;
  slot10Trg4? : number;
  slot11Src1? : number;
  slot11Src2? : number;
  /** value from 0 to 1000 */
  slot11Amt1? : number;
  slot11Trg1? : number;
  /** value from 0 to 1000 */
  slot11Amt2? : number;
  slot11Trg2? : number;
  /** value from 0 to 1000 */
  slot11Amt3? : number;
  slot11Trg3? : number;
  /** value from 0 to 1000 */
  slot11Amt4? : number;
  slot11Trg4? : number;
  slot12Src1? : number;
  slot12Src2? : number;
  /** value from 0 to 1000 */
  slot12Amt1? : number;
  slot12Trg1? : number;
  /** value from 0 to 1000 */
  slot12Amt2? : number;
  slot12Trg2? : number;
  /** value from 0 to 1000 */
  slot12Amt3? : number;
  slot12Trg3? : number;
  /** value from 0 to 1000 */
  slot12Amt4? : number;
  slot12Trg4? : number;
  slot13Src1? : number;
  slot13Src2? : number;
  /** value from 0 to 1000 */
  slot13Amt1? : number;
  slot13Trg1? : number;
  /** value from 0 to 1000 */
  slot13Amt2? : number;
  slot13Trg2? : number;
  /** value from 0 to 1000 */
  slot13Amt3? : number;
  slot13Trg3? : number;
  /** value from 0 to 1000 */
  slot13Amt4? : number;
  slot13Trg4? : number;
  slot14Src1? : number;
  slot14Src2? : number;
  /** value from 0 to 1000 */
  slot14Amt1? : number;
  slot14Trg1? : number;
  /** value from 0 to 1000 */
  slot14Amt2? : number;
  slot14Trg2? : number;
  /** value from 0 to 1000 */
  slot14Amt3? : number;
  slot14Trg3? : number;
  /** value from 0 to 1000 */
  slot14Amt4? : number;
  slot14Trg4? : number;
  slot15Src1? : number;
  slot15Src2? : number;
  /** value from 0 to 1000 */
  slot15Amt1? : number;
  slot15Trg1? : number;
  /** value from 0 to 1000 */
  slot15Amt2? : number;
  slot15Trg2? : number;
  /** value from 0 to 1000 */
  slot15Amt3? : number;
  slot15Trg3? : number;
  /** value from 0 to 1000 */
  slot15Amt4? : number;
  slot15Trg4? : number;
  osc1Mute? : number;
  osc2Mute? : number;
  osc3Mute? : number;
  osc4Mute? : number;
  /** value from 0 to 1000 */
  stp1Rate? : number;
  stp1Mono? : number;
  stp1Rtrg? : number;
  stp1Loop? : number;
  stp1Hold1? : number;
  stp1Hold2? : number;
  stp1Hold3? : number;
  stp1Hold4? : number;
  stp1Hold5? : number;
  stp1Hold6? : number;
  stp1Hold7? : number;
  stp1Hold8? : number;
  stp1Hold9? : number;
  stp1Hold10? : number;
  stp1Hold11? : number;
  stp1Hold12? : number;
  stp1Hold13? : number;
  stp1Hold14? : number;
  stp1Hold15? : number;
  stp1Hold16? : number;
  /** value from 0 to 1000 */
  stp2Rate? : number;
  stp2Mono? : number;
  stp2Rtrg? : number;
  stp2Loop? : number;
  stp2Hold1? : number;
  stp2Hold2? : number;
  stp2Hold3? : number;
  stp2Hold4? : number;
  stp2Hold5? : number;
  stp2Hold6? : number;
  stp2Hold7? : number;
  stp2Hold8? : number;
  stp2Hold9? : number;
  stp2Hold10? : number;
  stp2Hold11? : number;
  stp2Hold12? : number;
  stp2Hold13? : number;
  stp2Hold14? : number;
  stp2Hold15? : number;
  stp2Hold16? : number;
  arpOn? : number;
  /** value from 0 to 1000 */
  arpLength? : number;
  /** value from 0 to 1000 */
  arpSwing? : number;
  shpMute? : number;
  phsMute? : number;
  chrMute? : number;
  delMute? : number;
  revMute? : number;
  warm? : number;
  boost? : number;
  soft? : number;
  /** value from 0 to 1000 */
  macro1? : number;
  /** value from 0 to 1000 */
  macro2? : number;
  /** value from 0 to 1000 */
  macro3? : number;
  /** value from 0 to 1000 */
  macro4? : number;
  /** value from -64 to 64 */
  pitchShift? : number;
  /** value from -99 to 99 */
  pitchFine? : number;
  /** value from 0 to 1000 */
  bendWheel? : number;
  /** value from 0 to 1000 */
  modWheel? : number;
  /** value from 0 to 1000 */
  anticlick? : number;
  /** value from 0 to 1000 */
  oscAllPt? : number;
  /** value from 0 to 1000 */
  lfoAllRt? : number;
}
const parameterLibrary = {
  glideLog: { name: 'glide_log', index: 0, isLinear: false, choices: {"off":0,"on":1} },
  glide: { name: 'glide', index: 1, isLinear: true, range: [0, 1000] as [number, number] },
  drift: { name: 'drift', index: 2, isLinear: false, choices: {"off":0,"on":1} },
  xComp: { name: 'x-comp', index: 3, isLinear: true, range: [0, 1000] as [number, number] },
  velocity: { name: 'velocity', index: 4, isLinear: true, range: [0, 1000] as [number, number] },
  volume: { name: 'volume', index: 5, isLinear: true, range: [0, 1000] as [number, number] },
  eqBand: { name: 'eq_band', index: 6, isLinear: false, choices: {"low":0.3214285969734192,"mid":0.6428571939468384,"hi":1} },
  eqPower: { name: 'eq_power', index: 7, isLinear: false, choices: {"off":0,"on":1} },
  eqLowFrq: { name: 'eq_low_frq', index: 8, isLinear: true, range: [0, 1000] as [number, number] },
  eqLowQ: { name: 'eq_low_Q', index: 9, isLinear: true, range: [0, 1000] as [number, number] },
  eqLowLev: { name: 'eq_low_lev', index: 10, isLinear: true, range: [0, 1000] as [number, number] },
  eqMidFrq: { name: 'eq_mid_frq', index: 11, isLinear: true, range: [0, 1000] as [number, number] },
  eqMidQ: { name: 'eq_mid_Q', index: 12, isLinear: true, range: [0, 1000] as [number, number] },
  eqMidLev: { name: 'eq_mid_lev', index: 13, isLinear: true, range: [0, 1000] as [number, number] },
  eqHiFrq: { name: 'eq_hi_frq', index: 14, isLinear: true, range: [0, 1000] as [number, number] },
  eqHiQ: { name: 'eq_hi_Q', index: 15, isLinear: true, range: [0, 1000] as [number, number] },
  eqHiLev: { name: 'eq_hi_lev', index: 16, isLinear: true, range: [0, 1000] as [number, number] },
  mixOsc1: { name: 'mix_osc1', index: 17, isLinear: true, range: [0, 1000] as [number, number] },
  mixOsc2: { name: 'mix_osc2', index: 18, isLinear: true, range: [0, 1000] as [number, number] },
  mixOsc3: { name: 'mix_osc3', index: 19, isLinear: true, range: [0, 1000] as [number, number] },
  mixOsc4: { name: 'mix_osc4', index: 20, isLinear: true, range: [0, 1000] as [number, number] },
  osc1Type: { name: 'osc1_type', index: 21, isLinear: false, choices: {"classic":0.0005,"noise":0.0015,"fm":0.0025,"amSync":0.0035,"sawPwm":0.0045000000000000005,"hardFm":0.0055,"vowel":0.006500000000000001} },
  osc1Oct: { name: 'osc1_oct', index: 22, isLinear: false, choices: {"0":0.535714328289032,"1":0.6428571939468384,"2":0.7500000596046448,"3":0.8571429252624512,"4":1,"-4":0.1071428656578064,"-3":0.2142857313156128,"-2":0.3214285969734192,"-1":0.4285714626312256} },
  osc1Note: { name: 'osc1_note', index: 23, isLinear: false, choices: {"0":0.5,"1":0.535714328289032,"2":0.6071428656578064,"3":0.6428571939468384,"4":0.6785714626312256,"5":0.7142857313156128,"6":0.7500000596046448,"7":0.8214285969734192,"8":0.8571429252624512,"9":0.8928571939468384,"10":0.9285714626312256,"11":1,"-11":0.0357142873108387,"-10":0.0714285746216774,"-9":0.1071428656578064,"-8":0.1428571492433548,"-7":0.2142857313156128,"-6":0.25,"-5":0.2857142984867096,"-4":0.3214285969734192,"-3":0.3571428656578064,"-2":0.4285714626312256,"-1":0.4642857313156128} },
  osc1Fine: { name: 'osc1_fine', index: 24, isLinear: true, range: [0, 1000] as [number, number] },
  osc1CtrlA: { name: 'osc1_ctrlA', index: 25, isLinear: true, range: [0, 1000] as [number, number] },
  osc1CtrlB: { name: 'osc1_ctrlB', index: 26, isLinear: true, range: [0, 1000] as [number, number] },
  osc1Phase: { name: 'osc1_phase', index: 27, isLinear: true, range: [0, 1000] as [number, number] },
  osc1Wave: { name: 'osc1_wave', index: 28, isLinear: false, choices: {"sin":0,"vocal_6":0.0357142873108387,"alarm_2":1} },
  osc1Wtmix: { name: 'osc1_wtmix', index: 29, isLinear: true, range: [0, 1000] as [number, number] },
  osc1Udet: { name: 'osc1_udet', index: 30, isLinear: true, range: [0, 1000] as [number, number] },
  osc1Uwid: { name: 'osc1_uwid', index: 31, isLinear: true, range: [0, 1000] as [number, number] },
  osc1UnisonVoices: { name: 'osc1_ucnt', index: 32, isLinear: false, choices: {"1":0.0005,"2":0.0015,"3":0.0025,"4":0.0035,"5":0.0045000000000000005,"6":0.0055,"7":0.006500000000000001,"8":0.0075,"9":0.0085} },
  osc1UnisonInterval: { name: 'osc1_uoct', index: 33, isLinear: false, choices: {"8va":0.0005,"16va":0.0015,"24va":0.0025,"maj3rd":0.0035,"min3rd":0.0045000000000000005,"maj7th":0.0055,"dom7th":0.006500000000000001,"minmaj7th":0.0075,"minor7th":0.0085,"min9th":0.009500000000000001,"maj9th":0.0105,"dom9th":0.0115,"halfdim7th":0.0125,"dim7th":0.013500000000000002,"sus2":0.0145,"sus4":0.0155,"p5th":0.0165,"p4th":0.0175} },
  osc1Uden: { name: 'osc1_uden', index: 34, isLinear: true, range: [0, 1000] as [number, number] },
  osc1Pan: { name: 'osc1_pan', index: 35, isLinear: true, range: [0, 1000] as [number, number] },
  osc1Ana: { name: 'osc1_ana', index: 36, isLinear: false, choices: {"off":0,"on":1} },
  osc1Inv: { name: 'osc1_inv', index: 37, isLinear: false, choices: {"off":0,"on":1} },
  osc1Key: { name: 'osc1_key', index: 38, isLinear: false, choices: {"off":0,"on":1} },
  osc1Mixto: { name: 'osc1_mixto', index: 39, isLinear: true, range: [0, 1000] as [number, number] },
  osc2Type: { name: 'osc2_type', index: 40, isLinear: false, choices: {"classic":0.0005,"noise":0.0015,"fm":0.0025,"amSync":0.0035,"sawPwm":0.0045000000000000005,"hardFm":0.0055,"vowel":0.006500000000000001} },
  osc2Oct: { name: 'osc2_oct', index: 41, isLinear: false, choices: {"0":0.535714328289032,"1":0.6428571939468384,"2":0.7500000596046448,"3":0.8571429252624512,"4":1,"-4":0.1071428656578064,"-3":0.2142857313156128,"-2":0.3214285969734192,"-1":0.4285714626312256} },
  osc2Note: { name: 'osc2_note', index: 42, isLinear: false, choices: {"0":0.5,"1":0.535714328289032,"2":0.6071428656578064,"3":0.6428571939468384,"4":0.6785714626312256,"5":0.7142857313156128,"6":0.7500000596046448,"7":0.8214285969734192,"8":0.8571429252624512,"9":0.8928571939468384,"10":0.9285714626312256,"11":1,"-11":0.0357142873108387,"-10":0.0714285746216774,"-9":0.1071428656578064,"-8":0.1428571492433548,"-7":0.2142857313156128,"-6":0.25,"-5":0.2857142984867096,"-4":0.3214285969734192,"-3":0.3571428656578064,"-2":0.4285714626312256,"-1":0.4642857313156128} },
  osc2Fine: { name: 'osc2_fine', index: 43, isLinear: true, range: [0, 1000] as [number, number] },
  osc2CtrlA: { name: 'osc2_ctrlA', index: 44, isLinear: true, range: [0, 1000] as [number, number] },
  osc2CtrlB: { name: 'osc2_ctrlB', index: 45, isLinear: true, range: [0, 1000] as [number, number] },
  osc2Phase: { name: 'osc2_phase', index: 46, isLinear: true, range: [0, 1000] as [number, number] },
  osc2Wave: { name: 'osc2_wave', index: 47, isLinear: false, choices: {"sin":0,"vocal_6":0.0357142873108387,"alarm_2":1} },
  osc2Wtmix: { name: 'osc2_wtmix', index: 48, isLinear: true, range: [0, 1000] as [number, number] },
  osc2Udet: { name: 'osc2_udet', index: 49, isLinear: true, range: [0, 1000] as [number, number] },
  osc2Uwid: { name: 'osc2_uwid', index: 50, isLinear: true, range: [0, 1000] as [number, number] },
  osc2UnisonVoices: { name: 'osc2_ucnt', index: 51, isLinear: false, choices: {"1":0.0005,"2":0.0015,"3":0.0025,"4":0.0035,"5":0.0045000000000000005,"6":0.0055,"7":0.006500000000000001,"8":0.0075,"9":0.0085} },
  osc2UnisonInterval: { name: 'osc2_uoct', index: 52, isLinear: false, choices: {"8va":0.0005,"16va":0.0015,"24va":0.0025,"maj3rd":0.0035,"min3rd":0.0045000000000000005,"maj7th":0.0055,"dom7th":0.006500000000000001,"minmaj7th":0.0075,"minor7th":0.0085,"min9th":0.009500000000000001,"maj9th":0.0105,"dom9th":0.0115,"halfdim7th":0.0125,"dim7th":0.013500000000000002,"sus2":0.0145,"sus4":0.0155,"p5th":0.0165,"p4th":0.0175} },
  osc2Uden: { name: 'osc2_uden', index: 53, isLinear: true, range: [0, 1000] as [number, number] },
  osc2Pan: { name: 'osc2_pan', index: 54, isLinear: true, range: [0, 1000] as [number, number] },
  osc2Ana: { name: 'osc2_ana', index: 55, isLinear: false, choices: {"off":0,"on":1} },
  osc2Inv: { name: 'osc2_inv', index: 56, isLinear: false, choices: {"off":0,"on":1} },
  osc2Key: { name: 'osc2_key', index: 57, isLinear: false, choices: {"off":0,"on":1} },
  osc2Mixto: { name: 'osc2_mixto', index: 58, isLinear: true, range: [0, 1000] as [number, number] },
  osc3Type: { name: 'osc3_type', index: 59, isLinear: false, choices: {"classic":0.0005,"noise":0.0015,"fm":0.0025,"amSync":0.0035,"sawPwm":0.0045000000000000005,"hardFm":0.0055,"vowel":0.006500000000000001} },
  osc3Oct: { name: 'osc3_oct', index: 60, isLinear: false, choices: {"0":0.535714328289032,"1":0.6428571939468384,"2":0.7500000596046448,"3":0.8571429252624512,"4":1,"-4":0.1071428656578064,"-3":0.2142857313156128,"-2":0.3214285969734192,"-1":0.4285714626312256} },
  osc3Note: { name: 'osc3_note', index: 61, isLinear: false, choices: {"0":0.5,"1":0.535714328289032,"2":0.6071428656578064,"3":0.6428571939468384,"4":0.6785714626312256,"5":0.7142857313156128,"6":0.7500000596046448,"7":0.8214285969734192,"8":0.8571429252624512,"9":0.8928571939468384,"10":0.9285714626312256,"11":1,"-11":0.0357142873108387,"-10":0.0714285746216774,"-9":0.1071428656578064,"-8":0.1428571492433548,"-7":0.2142857313156128,"-6":0.25,"-5":0.2857142984867096,"-4":0.3214285969734192,"-3":0.3571428656578064,"-2":0.4285714626312256,"-1":0.4642857313156128} },
  osc3Fine: { name: 'osc3_fine', index: 62, isLinear: true, range: [0, 1000] as [number, number] },
  osc3CtrlA: { name: 'osc3_ctrlA', index: 63, isLinear: true, range: [0, 1000] as [number, number] },
  osc3CtrlB: { name: 'osc3_ctrlB', index: 64, isLinear: true, range: [0, 1000] as [number, number] },
  osc3Phase: { name: 'osc3_phase', index: 65, isLinear: true, range: [0, 1000] as [number, number] },
  osc3Wave: { name: 'osc3_wave', index: 66, isLinear: false, choices: {"sin":0,"vocal_6":0.0357142873108387,"alarm_2":1} },
  osc3Wtmix: { name: 'osc3_wtmix', index: 67, isLinear: true, range: [0, 1000] as [number, number] },
  osc3Udet: { name: 'osc3_udet', index: 68, isLinear: true, range: [0, 1000] as [number, number] },
  osc3Uwid: { name: 'osc3_uwid', index: 69, isLinear: true, range: [0, 1000] as [number, number] },
  osc3UnisonVoices: { name: 'osc3_ucnt', index: 70, isLinear: false, choices: {"1":0.0005,"2":0.0015,"3":0.0025,"4":0.0035,"5":0.0045000000000000005,"6":0.0055,"7":0.006500000000000001,"8":0.0075,"9":0.0085} },
  osc3UnisonInterval: { name: 'osc3_uoct', index: 71, isLinear: false, choices: {"8va":0.0005,"16va":0.0015,"24va":0.0025,"maj3rd":0.0035,"min3rd":0.0045000000000000005,"maj7th":0.0055,"dom7th":0.006500000000000001,"minmaj7th":0.0075,"minor7th":0.0085,"min9th":0.009500000000000001,"maj9th":0.0105,"dom9th":0.0115,"halfdim7th":0.0125,"dim7th":0.013500000000000002,"sus2":0.0145,"sus4":0.0155,"p5th":0.0165,"p4th":0.0175} },
  osc3Uden: { name: 'osc3_uden', index: 72, isLinear: true, range: [0, 1000] as [number, number] },
  osc3Pan: { name: 'osc3_pan', index: 73, isLinear: true, range: [0, 1000] as [number, number] },
  osc3Ana: { name: 'osc3_ana', index: 74, isLinear: false, choices: {"off":0,"on":1} },
  osc3Inv: { name: 'osc3_inv', index: 75, isLinear: false, choices: {"off":0,"on":1} },
  osc3Key: { name: 'osc3_key', index: 76, isLinear: false, choices: {"off":0,"on":1} },
  osc3Mixto: { name: 'osc3_mixto', index: 77, isLinear: true, range: [0, 1000] as [number, number] },
  osc4Type: { name: 'osc4_type', index: 78, isLinear: false, choices: {"classic":0.0005,"noise":0.0015,"fm":0.0025,"amSync":0.0035,"sawPwm":0.0045000000000000005,"hardFm":0.0055,"vowel":0.006500000000000001} },
  osc4Oct: { name: 'osc4_oct', index: 79, isLinear: false, choices: {"0":0.535714328289032,"1":0.6428571939468384,"2":0.7500000596046448,"3":0.8571429252624512,"4":1,"-4":0.1071428656578064,"-3":0.2142857313156128,"-2":0.3214285969734192,"-1":0.4285714626312256} },
  osc4Note: { name: 'osc4_note', index: 80, isLinear: false, choices: {"0":0.5,"1":0.535714328289032,"2":0.6071428656578064,"3":0.6428571939468384,"4":0.6785714626312256,"5":0.7142857313156128,"6":0.7500000596046448,"7":0.8214285969734192,"8":0.8571429252624512,"9":0.8928571939468384,"10":0.9285714626312256,"11":1,"-11":0.0357142873108387,"-10":0.0714285746216774,"-9":0.1071428656578064,"-8":0.1428571492433548,"-7":0.2142857313156128,"-6":0.25,"-5":0.2857142984867096,"-4":0.3214285969734192,"-3":0.3571428656578064,"-2":0.4285714626312256,"-1":0.4642857313156128} },
  osc4Fine: { name: 'osc4_fine', index: 81, isLinear: true, range: [0, 1000] as [number, number] },
  osc4CtrlA: { name: 'osc4_ctrlA', index: 82, isLinear: true, range: [0, 1000] as [number, number] },
  osc4CtrlB: { name: 'osc4_ctrlB', index: 83, isLinear: true, range: [0, 1000] as [number, number] },
  osc4Phase: { name: 'osc4_phase', index: 84, isLinear: true, range: [0, 1000] as [number, number] },
  osc4Wave: { name: 'osc4_wave', index: 85, isLinear: false, choices: {"sin":0,"vocal_6":0.0357142873108387,"alarm_2":1} },
  osc4Wtmix: { name: 'osc4_wtmix', index: 86, isLinear: true, range: [0, 1000] as [number, number] },
  osc4Udet: { name: 'osc4_udet', index: 87, isLinear: true, range: [0, 1000] as [number, number] },
  osc4Uwid: { name: 'osc4_uwid', index: 88, isLinear: true, range: [0, 1000] as [number, number] },
  osc4UnisonVoices: { name: 'osc4_ucnt', index: 89, isLinear: false, choices: {"1":0.0005,"2":0.0015,"3":0.0025,"4":0.0035,"5":0.0045000000000000005,"6":0.0055,"7":0.006500000000000001,"8":0.0075,"9":0.0085} },
  osc4UnisonInterval: { name: 'osc4_uoct', index: 90, isLinear: false, choices: {"8va":0.0005,"16va":0.0015,"24va":0.0025,"maj3rd":0.0035,"min3rd":0.0045000000000000005,"maj7th":0.0055,"dom7th":0.006500000000000001,"minmaj7th":0.0075,"minor7th":0.0085,"min9th":0.009500000000000001,"maj9th":0.0105,"dom9th":0.0115,"halfdim7th":0.0125,"dim7th":0.013500000000000002,"sus2":0.0145,"sus4":0.0155,"p5th":0.0165,"p4th":0.0175} },
  osc4Uden: { name: 'osc4_uden', index: 91, isLinear: true, range: [0, 1000] as [number, number] },
  osc4Pan: { name: 'osc4_pan', index: 92, isLinear: true, range: [0, 1000] as [number, number] },
  osc4Ana: { name: 'osc4_ana', index: 93, isLinear: false, choices: {"off":0,"on":1} },
  osc4Inv: { name: 'osc4_inv', index: 94, isLinear: false, choices: {"off":0,"on":1} },
  osc4Key: { name: 'osc4_key', index: 95, isLinear: false, choices: {"off":0,"on":1} },
  osc4Mixto: { name: 'osc4_mixto', index: 96, isLinear: true, range: [0, 1000] as [number, number] },
  flt1Type: { name: 'flt1_type', index: 97, isLinear: false, choices: {"off":0,"shaper":1} },
  flt1Mode: { name: 'flt1_mode', index: 98, isLinear: false, units: 'lp4', choices: {"lp4":1} },
  flt1Cut: { name: 'flt1_cut', index: 99, isLinear: true, range: [0, 1000] as [number, number] },
  flt1Res: { name: 'flt1_res', index: 100, isLinear: true, range: [0, 1000] as [number, number] },
  flt2Type: { name: 'flt2_type', index: 101, isLinear: false, choices: {"off":0,"shaper":1} },
  flt2Mode: { name: 'flt2_mode', index: 102, isLinear: false, choices: {"-":0,"hp4":1} },
  flt2Cut: { name: 'flt2_cut', index: 103, isLinear: true, range: [0, 1000] as [number, number] },
  flt2Res: { name: 'flt2_res', index: 104, isLinear: true, range: [0, 1000] as [number, number] },
  fltRout: { name: 'flt_rout', index: 105, isLinear: false, choices: {"serial":0,"parallel":1} },
  fltLink: { name: 'flt_link', index: 106, isLinear: false, choices: {"off":0,"on":1} },
  fltBalance: { name: 'flt_balance', index: 107, isLinear: true, range: [0, 1000] as [number, number] },
  fltKeytrack: { name: 'flt_keytrack', index: 108, isLinear: true, range: [0, 1000] as [number, number] },
  env1Att: { name: 'env1_att', index: 109, isLinear: true, range: [0, 1000] as [number, number] },
  env1Dec: { name: 'env1_dec', index: 110, isLinear: true, range: [0, 1000] as [number, number] },
  env1Sus: { name: 'env1_sus', index: 111, isLinear: true, range: [0, 1000] as [number, number] },
  env1Slt: { name: 'env1_slt', index: 112, isLinear: true, range: [0, 1000] as [number, number] },
  env1Sll: { name: 'env1_sll', index: 113, isLinear: true, range: [0, 1000] as [number, number] },
  env1Rel: { name: 'env1_rel', index: 114, isLinear: true, range: [0, 1000] as [number, number] },
  env1AttCrv: { name: 'env1_att_crv', index: 115, isLinear: false, choices: {"lin":0.3214285969734192,"exp":0.6428571939468384,"pow":1} },
  env1DecCrv: { name: 'env1_dec_crv', index: 116, isLinear: false, choices: {"exp2":0.3214285969734192,"pow":0.6428571939468384,"exp1":1} },
  env1SlpCrv: { name: 'env1_slp_crv', index: 117, isLinear: false, choices: {"lin":0.3214285969734192,"exp":0.6428571939468384,"pow":1} },
  env1RelCrv: { name: 'env1_rel_crv', index: 118, isLinear: false, choices: {"exp2":0.3214285969734192,"pow":0.6428571939468384,"exp1":1} },
  env1Target1: { name: 'env1_target1', index: 119, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  env1Amt1: { name: 'env1_amt1', index: 120, isLinear: true, range: [0, 1000] as [number, number] },
  env1Vel1: { name: 'env1_vel1', index: 121, isLinear: true, range: [0, 1000] as [number, number] },
  env1Target2: { name: 'env1_target2', index: 122, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  env1Amt2: { name: 'env1_amt2', index: 123, isLinear: true, range: [0, 1000] as [number, number] },
  env1Vel2: { name: 'env1_vel2', index: 124, isLinear: true, range: [0, 1000] as [number, number] },
  env2Att: { name: 'env2_att', index: 125, isLinear: true, range: [0, 1000] as [number, number] },
  env2Dec: { name: 'env2_dec', index: 126, isLinear: true, range: [0, 1000] as [number, number] },
  env2Sus: { name: 'env2_sus', index: 127, isLinear: true, range: [0, 1000] as [number, number] },
  env2Slt: { name: 'env2_slt', index: 128, isLinear: true, range: [0, 1000] as [number, number] },
  env2Sll: { name: 'env2_sll', index: 129, isLinear: true, range: [0, 1000] as [number, number] },
  env2Rel: { name: 'env2_rel', index: 130, isLinear: true, range: [0, 1000] as [number, number] },
  env2AttCrv: { name: 'env2_att_crv', index: 131, isLinear: false, choices: {"lin":0.3214285969734192,"exp":0.6428571939468384,"pow":1} },
  env2DecCrv: { name: 'env2_dec_crv', index: 132, isLinear: false, choices: {"exp2":0.3214285969734192,"pow":0.6428571939468384,"exp1":1} },
  env2SlpCrv: { name: 'env2_slp_crv', index: 133, isLinear: false, choices: {"lin":0.3214285969734192,"exp":0.6428571939468384,"pow":1} },
  env2RelCrv: { name: 'env2_rel_crv', index: 134, isLinear: false, choices: {"exp2":0.3214285969734192,"pow":0.6428571939468384,"exp1":1} },
  env2Target1: { name: 'env2_target1', index: 135, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  env2Amt1: { name: 'env2_amt1', index: 136, isLinear: true, range: [0, 1000] as [number, number] },
  env2Vel1: { name: 'env2_vel1', index: 137, isLinear: true, range: [0, 1000] as [number, number] },
  env2Target2: { name: 'env2_target2', index: 138, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  env2Amt2: { name: 'env2_amt2', index: 139, isLinear: true, range: [0, 1000] as [number, number] },
  env2Vel2: { name: 'env2_vel2', index: 140, isLinear: true, range: [0, 1000] as [number, number] },
  env3Att: { name: 'env3_att', index: 141, isLinear: true, range: [0, 1000] as [number, number] },
  env3Dec: { name: 'env3_dec', index: 142, isLinear: true, range: [0, 1000] as [number, number] },
  env3Sus: { name: 'env3_sus', index: 143, isLinear: true, range: [0, 1000] as [number, number] },
  env3Slt: { name: 'env3_slt', index: 144, isLinear: true, range: [0, 1000] as [number, number] },
  env3Sll: { name: 'env3_sll', index: 145, isLinear: true, range: [0, 1000] as [number, number] },
  env3Rel: { name: 'env3_rel', index: 146, isLinear: true, range: [0, 1000] as [number, number] },
  env3AttCrv: { name: 'env3_att_crv', index: 147, isLinear: false, choices: {"lin":0.3214285969734192,"exp":0.6428571939468384,"pow":1} },
  env3DecCrv: { name: 'env3_dec_crv', index: 148, isLinear: false, choices: {"exp2":0.3214285969734192,"pow":0.6428571939468384,"exp1":1} },
  env3SlpCrv: { name: 'env3_slp_crv', index: 149, isLinear: false, choices: {"lin":0.3214285969734192,"exp":0.6428571939468384,"pow":1} },
  env3RelCrv: { name: 'env3_rel_crv', index: 150, isLinear: false, choices: {"exp2":0.3214285969734192,"pow":0.6428571939468384,"exp1":1} },
  env3Target1: { name: 'env3_target1', index: 151, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  env3Amt1: { name: 'env3_amt1', index: 152, isLinear: true, range: [0, 1000] as [number, number] },
  env3Vel1: { name: 'env3_vel1', index: 153, isLinear: true, range: [0, 1000] as [number, number] },
  env3Target2: { name: 'env3_target2', index: 154, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  env3Amt2: { name: 'env3_amt2', index: 155, isLinear: true, range: [0, 1000] as [number, number] },
  env3Vel2: { name: 'env3_vel2', index: 156, isLinear: true, range: [0, 1000] as [number, number] },
  env4Att: { name: 'env4_att', index: 157, isLinear: true, range: [0, 1000] as [number, number] },
  env4Dec: { name: 'env4_dec', index: 158, isLinear: true, range: [0, 1000] as [number, number] },
  env4Sus: { name: 'env4_sus', index: 159, isLinear: true, range: [0, 1000] as [number, number] },
  env4Slt: { name: 'env4_slt', index: 160, isLinear: true, range: [0, 1000] as [number, number] },
  env4Sll: { name: 'env4_sll', index: 161, isLinear: true, range: [0, 1000] as [number, number] },
  env4Rel: { name: 'env4_rel', index: 162, isLinear: true, range: [0, 1000] as [number, number] },
  env4AttCrv: { name: 'env4_att_crv', index: 163, isLinear: false, choices: {"lin":0.3214285969734192,"exp":0.6428571939468384,"pow":1} },
  env4DecCrv: { name: 'env4_dec_crv', index: 164, isLinear: false, choices: {"exp2":0.3214285969734192,"pow":0.6428571939468384,"exp1":1} },
  env4SlpCrv: { name: 'env4_slp_crv', index: 165, isLinear: false, choices: {"lin":0.3214285969734192,"exp":0.6428571939468384,"pow":1} },
  env4RelCrv: { name: 'env4_rel_crv', index: 166, isLinear: false, choices: {"exp2":0.3214285969734192,"pow":0.6428571939468384,"exp1":1} },
  env4Target1: { name: 'env4_target1', index: 167, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  env4Amt1: { name: 'env4_amt1', index: 168, isLinear: true, range: [0, 1000] as [number, number] },
  env4Vel1: { name: 'env4_vel1', index: 169, isLinear: true, range: [0, 1000] as [number, number] },
  env4Target2: { name: 'env4_target2', index: 170, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  env4Amt2: { name: 'env4_amt2', index: 171, isLinear: true, range: [0, 1000] as [number, number] },
  env4Vel2: { name: 'env4_vel2', index: 172, isLinear: true, range: [0, 1000] as [number, number] },
  lfo1Rate: { name: 'lfo1_rate', index: 173, isLinear: true, range: [0, 1000] as [number, number] },
  lfo1Time: { name: 'lfo1_time', index: 174, isLinear: false, choices: {"16/1":0,"1/64":1} },
  lfo1Sym: { name: 'lfo1_sym', index: 175, isLinear: true, range: [0, 1000] as [number, number] },
  lfo1Sync: { name: 'lfo1_sync', index: 176, isLinear: false, choices: {"off":0,"on":1} },
  lfo1Mono: { name: 'lfo1_mono', index: 177, isLinear: false, choices: {"off":0,"on":1} },
  lfo1Morph: { name: 'lfo1_morph', index: 178, isLinear: true, range: [0, 1000] as [number, number] },
  lfo1Phase: { name: 'lfo1_phase', index: 179, isLinear: true, range: [0, 1000] as [number, number] },
  lfo1Form: { name: 'lfo1_form', index: 180, isLinear: false, choices: {"sin":0,"vocal_3":0.0357142873108387,"alarm_2":1} },
  lfo1Amp: { name: 'lfo1_amp', index: 181, isLinear: true, range: [0, 1000] as [number, number] },
  lfo1Fadein: { name: 'lfo1_fadein', index: 182, isLinear: true, range: [0, 1000] as [number, number] },
  lfo1Target1: { name: 'lfo1_target1', index: 183, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  lfo1Amt1: { name: 'lfo1_amt1', index: 184, isLinear: true, range: [0, 1000] as [number, number] },
  lfo1Vel1: { name: 'lfo1_vel1', index: 185, isLinear: true, range: [0, 1000] as [number, number] },
  lfo1Target2: { name: 'lfo1_target2', index: 186, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  lfo1Amt2: { name: 'lfo1_amt2', index: 187, isLinear: true, range: [0, 1000] as [number, number] },
  lfo1Vel2: { name: 'lfo1_vel2', index: 188, isLinear: true, range: [0, 1000] as [number, number] },
  lfo2Rate: { name: 'lfo2_rate', index: 189, isLinear: true, range: [0, 1000] as [number, number] },
  lfo2Time: { name: 'lfo2_time', index: 190, isLinear: false, choices: {"16/1":0,"1/64":1} },
  lfo2Sym: { name: 'lfo2_sym', index: 191, isLinear: true, range: [0, 1000] as [number, number] },
  lfo2Sync: { name: 'lfo2_sync', index: 192, isLinear: false, choices: {"off":0,"on":1} },
  lfo2Mono: { name: 'lfo2_mono', index: 193, isLinear: false, choices: {"off":0,"on":1} },
  lfo2Morph: { name: 'lfo2_morph', index: 194, isLinear: true, range: [0, 1000] as [number, number] },
  lfo2Phase: { name: 'lfo2_phase', index: 195, isLinear: true, range: [0, 1000] as [number, number] },
  lfo2Form: { name: 'lfo2_form', index: 196, isLinear: false, choices: {"sin":0,"vocal_3":0.0357142873108387,"alarm_2":1} },
  lfo2Amp: { name: 'lfo2_amp', index: 197, isLinear: true, range: [0, 1000] as [number, number] },
  lfo2Fadein: { name: 'lfo2_fadein', index: 198, isLinear: true, range: [0, 1000] as [number, number] },
  lfo2Target1: { name: 'lfo2_target1', index: 199, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  lfo2Amt1: { name: 'lfo2_amt1', index: 200, isLinear: true, range: [0, 1000] as [number, number] },
  lfo2Vel1: { name: 'lfo2_vel1', index: 201, isLinear: true, range: [0, 1000] as [number, number] },
  lfo2Target2: { name: 'lfo2_target2', index: 202, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  lfo2Amt2: { name: 'lfo2_amt2', index: 203, isLinear: true, range: [0, 1000] as [number, number] },
  lfo2Vel2: { name: 'lfo2_vel2', index: 204, isLinear: true, range: [0, 1000] as [number, number] },
  lfo3Rate: { name: 'lfo3_rate', index: 205, isLinear: true, range: [0, 1000] as [number, number] },
  lfo3Time: { name: 'lfo3_time', index: 206, isLinear: false, choices: {"16/1":0,"1/64":1} },
  lfo3Sym: { name: 'lfo3_sym', index: 207, isLinear: true, range: [0, 1000] as [number, number] },
  lfo3Sync: { name: 'lfo3_sync', index: 208, isLinear: false, choices: {"off":0,"on":1} },
  lfo3Mono: { name: 'lfo3_mono', index: 209, isLinear: false, choices: {"off":0,"on":1} },
  lfo3Morph: { name: 'lfo3_morph', index: 210, isLinear: true, range: [0, 1000] as [number, number] },
  lfo3Phase: { name: 'lfo3_phase', index: 211, isLinear: true, range: [0, 1000] as [number, number] },
  lfo3Form: { name: 'lfo3_form', index: 212, isLinear: false, choices: {"sin":0,"vocal_3":0.0357142873108387,"alarm_2":1} },
  lfo3Amp: { name: 'lfo3_amp', index: 213, isLinear: true, range: [0, 1000] as [number, number] },
  lfo3Fadein: { name: 'lfo3_fadein', index: 214, isLinear: true, range: [0, 1000] as [number, number] },
  lfo3Target1: { name: 'lfo3_target1', index: 215, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  lfo3Amt1: { name: 'lfo3_amt1', index: 216, isLinear: true, range: [0, 1000] as [number, number] },
  lfo3Vel1: { name: 'lfo3_vel1', index: 217, isLinear: true, range: [0, 1000] as [number, number] },
  lfo3Target2: { name: 'lfo3_target2', index: 218, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  lfo3Amt2: { name: 'lfo3_amt2', index: 219, isLinear: true, range: [0, 1000] as [number, number] },
  lfo3Vel2: { name: 'lfo3_vel2', index: 220, isLinear: true, range: [0, 1000] as [number, number] },
  lfo4Rate: { name: 'lfo4_rate', index: 221, isLinear: true, range: [0, 1000] as [number, number] },
  lfo4Time: { name: 'lfo4_time', index: 222, isLinear: false, choices: {"16/1":0,"1/64":1} },
  lfo4Sym: { name: 'lfo4_sym', index: 223, isLinear: true, range: [0, 1000] as [number, number] },
  lfo4Sync: { name: 'lfo4_sync', index: 224, isLinear: false, choices: {"off":0,"on":1} },
  lfo4Mono: { name: 'lfo4_mono', index: 225, isLinear: false, choices: {"off":0,"on":1} },
  lfo4Morph: { name: 'lfo4_morph', index: 226, isLinear: true, range: [0, 1000] as [number, number] },
  lfo4Phase: { name: 'lfo4_phase', index: 227, isLinear: true, range: [0, 1000] as [number, number] },
  lfo4Form: { name: 'lfo4_form', index: 228, isLinear: false, choices: {"sin":0,"vocal_3":0.0357142873108387,"alarm_2":1} },
  lfo4Amp: { name: 'lfo4_amp', index: 229, isLinear: true, range: [0, 1000] as [number, number] },
  lfo4Fadein: { name: 'lfo4_fadein', index: 230, isLinear: true, range: [0, 1000] as [number, number] },
  lfo4Target1: { name: 'lfo4_target1', index: 231, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  lfo4Amt1: { name: 'lfo4_amt1', index: 232, isLinear: true, range: [0, 1000] as [number, number] },
  lfo4Vel1: { name: 'lfo4_vel1', index: 233, isLinear: true, range: [0, 1000] as [number, number] },
  lfo4Target2: { name: 'lfo4_target2', index: 234, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  lfo4Amt2: { name: 'lfo4_amt2', index: 235, isLinear: true, range: [0, 1000] as [number, number] },
  lfo4Vel2: { name: 'lfo4_vel2', index: 236, isLinear: true, range: [0, 1000] as [number, number] },
  shpMode: { name: 'shp_mode', index: 237, isLinear: false, choices: {"soft":0,"asym":1} },
  shpBand: { name: 'shp_band', index: 238, isLinear: false, choices: {"off":0,"on":1} },
  shpDrive: { name: 'shp_drive', index: 239, isLinear: true, range: [0, 1000] as [number, number] },
  shpBit: { name: 'shp_bit', index: 240, isLinear: true, range: [0, 1000] as [number, number] },
  shpSr: { name: 'shp_sr', index: 241, isLinear: true, range: [0, 1000] as [number, number] },
  shpHicut: { name: 'shp_hicut', index: 242, isLinear: true, range: [0, 1000] as [number, number] },
  shpLowcut: { name: 'shp_lowcut', index: 243, isLinear: true, range: [0, 1000] as [number, number] },
  shpWet: { name: 'shp_wet', index: 244, isLinear: true, range: [0, 1000] as [number, number] },
  shpHq: { name: 'shp_hq', index: 245, isLinear: false, choices: {"off":0,"on":1} },
  phsStages: { name: 'phs_stages', index: 246, isLinear: false, choices: {"1_stage":0,"vowelhi":1} },
  phsFreq: { name: 'phs_freq', index: 247, isLinear: true, range: [0, 1000] as [number, number] },
  phsFback: { name: 'phs_fback', index: 248, isLinear: true, range: [0, 1000] as [number, number] },
  phsSpread: { name: 'phs_spread', index: 249, isLinear: true, range: [0, 1000] as [number, number] },
  phsRate: { name: 'phs_rate', index: 250, isLinear: true, range: [0, 1000] as [number, number] },
  phsDepth: { name: 'phs_depth', index: 251, isLinear: true, range: [0, 1000] as [number, number] },
  phsWet: { name: 'phs_wet', index: 252, isLinear: true, range: [0, 1000] as [number, number] },
  phsPre: { name: 'phs_pre', index: 253, isLinear: false, choices: {"off":0,"on":1} },
  chrDelay: { name: 'chr_delay', index: 254, isLinear: true, range: [0, 1000] as [number, number] },
  chrMode: { name: 'chr_mode', index: 255, isLinear: false, choices: {"01":0,"j8":1} },
  chrFback: { name: 'chr_fback', index: 256, isLinear: true, range: [0, 1000] as [number, number] },
  chrRate: { name: 'chr_rate', index: 257, isLinear: true, range: [0, 1000] as [number, number] },
  chrDepth: { name: 'chr_depth', index: 258, isLinear: true, range: [0, 1000] as [number, number] },
  chrWide: { name: 'chr_wide', index: 259, isLinear: true, range: [0, 1000] as [number, number] },
  chrHicut: { name: 'chr_hicut', index: 260, isLinear: true, range: [0, 1000] as [number, number] },
  chrLowcut: { name: 'chr_lowcut', index: 261, isLinear: true, range: [0, 1000] as [number, number] },
  chrWet: { name: 'chr_wet', index: 262, isLinear: true, range: [0, 1000] as [number, number] },
  delTimeL: { name: 'del_timeL', index: 263, isLinear: true, range: [0, 1000] as [number, number] },
  delTimeR: { name: 'del_timeR', index: 264, isLinear: true, range: [0, 1000] as [number, number] },
  delStimeL: { name: 'del_stimeL', index: 265, isLinear: false, choices: {"1/64":0,"16/1":1} },
  delStimeR: { name: 'del_stimeR', index: 266, isLinear: false, choices: {"1/64":0,"16/1":1} },
  delPingpong: { name: 'del_pingpong', index: 267, isLinear: false, choices: {"off":0,"on":1} },
  delSync: { name: 'del_sync', index: 268, isLinear: false, choices: {"off":0,"on":1} },
  delRate: { name: 'del_rate', index: 269, isLinear: true, range: [0, 1000] as [number, number] },
  delFback: { name: 'del_fback', index: 270, isLinear: true, range: [0, 1000] as [number, number] },
  delWide: { name: 'del_wide', index: 271, isLinear: true, range: [0, 1000] as [number, number] },
  delModulate: { name: 'del_modulate', index: 272, isLinear: true, range: [0, 1000] as [number, number] },
  delColor: { name: 'del_color', index: 273, isLinear: true, range: [0, 1000] as [number, number] },
  delWet: { name: 'del_wet', index: 274, isLinear: true, range: [0, 1000] as [number, number] },
  revMode: { name: 'rev_mode', index: 275, isLinear: false, choices: {"plate1":0,"room2":1} },
  revSync: { name: 'rev_sync', index: 276, isLinear: false, choices: {"off":0,"on":1} },
  revPretime: { name: 'rev_pretime', index: 277, isLinear: true, range: [0, 1000] as [number, number] },
  revPretimeS: { name: 'rev_pretimeS', index: 278, isLinear: false, choices: {"1/64":0,"16/1":1} },
  revDamp: { name: 'rev_damp', index: 279, isLinear: true, range: [0, 1000] as [number, number] },
  revWide: { name: 'rev_wide', index: 280, isLinear: true, range: [0, 1000] as [number, number] },
  revDecay: { name: 'rev_decay', index: 281, isLinear: true, range: [0, 1000] as [number, number] },
  revColor: { name: 'rev_color', index: 282, isLinear: true, range: [0, 1000] as [number, number] },
  revWet: { name: 'rev_wet', index: 283, isLinear: true, range: [0, 1000] as [number, number] },
  slot1Src1: { name: 'slot1_Src1', index: 284, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot1Src2: { name: 'slot1_Src2', index: 285, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot1Amt1: { name: 'slot1_Amt1', index: 286, isLinear: true, range: [0, 1000] as [number, number] },
  slot1Trg1: { name: 'slot1_Trg1', index: 287, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot1Amt2: { name: 'slot1_Amt2', index: 288, isLinear: true, range: [0, 1000] as [number, number] },
  slot1Trg2: { name: 'slot1_Trg2', index: 289, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot1Amt3: { name: 'slot1_Amt3', index: 290, isLinear: true, range: [0, 1000] as [number, number] },
  slot1Trg3: { name: 'slot1_Trg3', index: 291, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot1Amt4: { name: 'slot1_Amt4', index: 292, isLinear: true, range: [0, 1000] as [number, number] },
  slot1Trg4: { name: 'slot1_Trg4', index: 293, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot2Src1: { name: 'slot2_Src1', index: 294, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot2Src2: { name: 'slot2_Src2', index: 295, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot2Amt1: { name: 'slot2_Amt1', index: 296, isLinear: true, range: [0, 1000] as [number, number] },
  slot2Trg1: { name: 'slot2_Trg1', index: 297, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot2Amt2: { name: 'slot2_Amt2', index: 298, isLinear: true, range: [0, 1000] as [number, number] },
  slot2Trg2: { name: 'slot2_Trg2', index: 299, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot2Amt3: { name: 'slot2_Amt3', index: 300, isLinear: true, range: [0, 1000] as [number, number] },
  slot2Trg3: { name: 'slot2_Trg3', index: 301, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot2Amt4: { name: 'slot2_Amt4', index: 302, isLinear: true, range: [0, 1000] as [number, number] },
  slot2Trg4: { name: 'slot2_Trg4', index: 303, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot3Src1: { name: 'slot3_Src1', index: 304, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot3Src2: { name: 'slot3_Src2', index: 305, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot3Amt1: { name: 'slot3_Amt1', index: 306, isLinear: true, range: [0, 1000] as [number, number] },
  slot3Trg1: { name: 'slot3_Trg1', index: 307, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot3Amt2: { name: 'slot3_Amt2', index: 308, isLinear: true, range: [0, 1000] as [number, number] },
  slot3Trg2: { name: 'slot3_Trg2', index: 309, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot3Amt3: { name: 'slot3_Amt3', index: 310, isLinear: true, range: [0, 1000] as [number, number] },
  slot3Trg3: { name: 'slot3_Trg3', index: 311, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot3Amt4: { name: 'slot3_Amt4', index: 312, isLinear: true, range: [0, 1000] as [number, number] },
  slot3Trg4: { name: 'slot3_Trg4', index: 313, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot4Src1: { name: 'slot4_Src1', index: 314, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot4Src2: { name: 'slot4_Src2', index: 315, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot4Amt1: { name: 'slot4_Amt1', index: 316, isLinear: true, range: [0, 1000] as [number, number] },
  slot4Trg1: { name: 'slot4_Trg1', index: 317, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot4Amt2: { name: 'slot4_Amt2', index: 318, isLinear: true, range: [0, 1000] as [number, number] },
  slot4Trg2: { name: 'slot4_Trg2', index: 319, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot4Amt3: { name: 'slot4_Amt3', index: 320, isLinear: true, range: [0, 1000] as [number, number] },
  slot4Trg3: { name: 'slot4_Trg3', index: 321, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot4Amt4: { name: 'slot4_Amt4', index: 322, isLinear: true, range: [0, 1000] as [number, number] },
  slot4Trg4: { name: 'slot4_Trg4', index: 323, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot5Src1: { name: 'slot5_Src1', index: 324, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot5Src2: { name: 'slot5_Src2', index: 325, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot5Amt1: { name: 'slot5_Amt1', index: 326, isLinear: true, range: [0, 1000] as [number, number] },
  slot5Trg1: { name: 'slot5_Trg1', index: 327, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot5Amt2: { name: 'slot5_Amt2', index: 328, isLinear: true, range: [0, 1000] as [number, number] },
  slot5Trg2: { name: 'slot5_Trg2', index: 329, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot5Amt3: { name: 'slot5_Amt3', index: 330, isLinear: true, range: [0, 1000] as [number, number] },
  slot5Trg3: { name: 'slot5_Trg3', index: 331, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot5Amt4: { name: 'slot5_Amt4', index: 332, isLinear: true, range: [0, 1000] as [number, number] },
  slot5Trg4: { name: 'slot5_Trg4', index: 333, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot6Src1: { name: 'slot6_Src1', index: 334, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot6Src2: { name: 'slot6_Src2', index: 335, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot6Amt1: { name: 'slot6_Amt1', index: 336, isLinear: true, range: [0, 1000] as [number, number] },
  slot6Trg1: { name: 'slot6_Trg1', index: 337, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot6Amt2: { name: 'slot6_Amt2', index: 338, isLinear: true, range: [0, 1000] as [number, number] },
  slot6Trg2: { name: 'slot6_Trg2', index: 339, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot6Amt3: { name: 'slot6_Amt3', index: 340, isLinear: true, range: [0, 1000] as [number, number] },
  slot6Trg3: { name: 'slot6_Trg3', index: 341, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot6Amt4: { name: 'slot6_Amt4', index: 342, isLinear: true, range: [0, 1000] as [number, number] },
  slot6Trg4: { name: 'slot6_Trg4', index: 343, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot7Src1: { name: 'slot7_Src1', index: 344, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot7Src2: { name: 'slot7_Src2', index: 345, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot7Amt1: { name: 'slot7_Amt1', index: 346, isLinear: true, range: [0, 1000] as [number, number] },
  slot7Trg1: { name: 'slot7_Trg1', index: 347, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot7Amt2: { name: 'slot7_Amt2', index: 348, isLinear: true, range: [0, 1000] as [number, number] },
  slot7Trg2: { name: 'slot7_Trg2', index: 349, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot7Amt3: { name: 'slot7_Amt3', index: 350, isLinear: true, range: [0, 1000] as [number, number] },
  slot7Trg3: { name: 'slot7_Trg3', index: 351, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot7Amt4: { name: 'slot7_Amt4', index: 352, isLinear: true, range: [0, 1000] as [number, number] },
  slot7Trg4: { name: 'slot7_Trg4', index: 353, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot8Src1: { name: 'slot8_Src1', index: 354, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot8Src2: { name: 'slot8_Src2', index: 355, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot8Amt1: { name: 'slot8_Amt1', index: 356, isLinear: true, range: [0, 1000] as [number, number] },
  slot8Trg1: { name: 'slot8_Trg1', index: 357, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot8Amt2: { name: 'slot8_Amt2', index: 358, isLinear: true, range: [0, 1000] as [number, number] },
  slot8Trg2: { name: 'slot8_Trg2', index: 359, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot8Amt3: { name: 'slot8_Amt3', index: 360, isLinear: true, range: [0, 1000] as [number, number] },
  slot8Trg3: { name: 'slot8_Trg3', index: 361, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot8Amt4: { name: 'slot8_Amt4', index: 362, isLinear: true, range: [0, 1000] as [number, number] },
  slot8Trg4: { name: 'slot8_Trg4', index: 363, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot9Src1: { name: 'slot9_Src1', index: 364, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot9Src2: { name: 'slot9_Src2', index: 365, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot9Amt1: { name: 'slot9_Amt1', index: 366, isLinear: true, range: [0, 1000] as [number, number] },
  slot9Trg1: { name: 'slot9_Trg1', index: 367, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot9Amt2: { name: 'slot9_Amt2', index: 368, isLinear: true, range: [0, 1000] as [number, number] },
  slot9Trg2: { name: 'slot9_Trg2', index: 369, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot9Amt3: { name: 'slot9_Amt3', index: 370, isLinear: true, range: [0, 1000] as [number, number] },
  slot9Trg3: { name: 'slot9_Trg3', index: 371, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot9Amt4: { name: 'slot9_Amt4', index: 372, isLinear: true, range: [0, 1000] as [number, number] },
  slot9Trg4: { name: 'slot9_Trg4', index: 373, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot10Src1: { name: 'slot10_Src1', index: 374, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot10Src2: { name: 'slot10_Src2', index: 375, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot10Amt1: { name: 'slot10_Amt1', index: 376, isLinear: true, range: [0, 1000] as [number, number] },
  slot10Trg1: { name: 'slot10_Trg1', index: 377, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot10Amt2: { name: 'slot10_Amt2', index: 378, isLinear: true, range: [0, 1000] as [number, number] },
  slot10Trg2: { name: 'slot10_Trg2', index: 379, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot10Amt3: { name: 'slot10_Amt3', index: 380, isLinear: true, range: [0, 1000] as [number, number] },
  slot10Trg3: { name: 'slot10_Trg3', index: 381, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot10Amt4: { name: 'slot10_Amt4', index: 382, isLinear: true, range: [0, 1000] as [number, number] },
  slot10Trg4: { name: 'slot10_Trg4', index: 383, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot11Src1: { name: 'slot11_Src1', index: 384, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot11Src2: { name: 'slot11_Src2', index: 385, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot11Amt1: { name: 'slot11_Amt1', index: 386, isLinear: true, range: [0, 1000] as [number, number] },
  slot11Trg1: { name: 'slot11_Trg1', index: 387, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot11Amt2: { name: 'slot11_Amt2', index: 388, isLinear: true, range: [0, 1000] as [number, number] },
  slot11Trg2: { name: 'slot11_Trg2', index: 389, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot11Amt3: { name: 'slot11_Amt3', index: 390, isLinear: true, range: [0, 1000] as [number, number] },
  slot11Trg3: { name: 'slot11_Trg3', index: 391, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot11Amt4: { name: 'slot11_Amt4', index: 392, isLinear: true, range: [0, 1000] as [number, number] },
  slot11Trg4: { name: 'slot11_Trg4', index: 393, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot12Src1: { name: 'slot12_Src1', index: 394, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot12Src2: { name: 'slot12_Src2', index: 395, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot12Amt1: { name: 'slot12_Amt1', index: 396, isLinear: true, range: [0, 1000] as [number, number] },
  slot12Trg1: { name: 'slot12_Trg1', index: 397, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot12Amt2: { name: 'slot12_Amt2', index: 398, isLinear: true, range: [0, 1000] as [number, number] },
  slot12Trg2: { name: 'slot12_Trg2', index: 399, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot12Amt3: { name: 'slot12_Amt3', index: 400, isLinear: true, range: [0, 1000] as [number, number] },
  slot12Trg3: { name: 'slot12_Trg3', index: 401, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot12Amt4: { name: 'slot12_Amt4', index: 402, isLinear: true, range: [0, 1000] as [number, number] },
  slot12Trg4: { name: 'slot12_Trg4', index: 403, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot13Src1: { name: 'slot13_Src1', index: 404, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot13Src2: { name: 'slot13_Src2', index: 405, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot13Amt1: { name: 'slot13_Amt1', index: 406, isLinear: true, range: [0, 1000] as [number, number] },
  slot13Trg1: { name: 'slot13_Trg1', index: 407, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot13Amt2: { name: 'slot13_Amt2', index: 408, isLinear: true, range: [0, 1000] as [number, number] },
  slot13Trg2: { name: 'slot13_Trg2', index: 409, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot13Amt3: { name: 'slot13_Amt3', index: 410, isLinear: true, range: [0, 1000] as [number, number] },
  slot13Trg3: { name: 'slot13_Trg3', index: 411, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot13Amt4: { name: 'slot13_Amt4', index: 412, isLinear: true, range: [0, 1000] as [number, number] },
  slot13Trg4: { name: 'slot13_Trg4', index: 413, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot14Src1: { name: 'slot14_Src1', index: 414, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot14Src2: { name: 'slot14_Src2', index: 415, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot14Amt1: { name: 'slot14_Amt1', index: 416, isLinear: true, range: [0, 1000] as [number, number] },
  slot14Trg1: { name: 'slot14_Trg1', index: 417, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot14Amt2: { name: 'slot14_Amt2', index: 418, isLinear: true, range: [0, 1000] as [number, number] },
  slot14Trg2: { name: 'slot14_Trg2', index: 419, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot14Amt3: { name: 'slot14_Amt3', index: 420, isLinear: true, range: [0, 1000] as [number, number] },
  slot14Trg3: { name: 'slot14_Trg3', index: 421, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot14Amt4: { name: 'slot14_Amt4', index: 422, isLinear: true, range: [0, 1000] as [number, number] },
  slot14Trg4: { name: 'slot14_Trg4', index: 423, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot15Src1: { name: 'slot15_Src1', index: 424, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot15Src2: { name: 'slot15_Src2', index: 425, isLinear: false, choices: {"off":0,"constant_50%":1} },
  slot15Amt1: { name: 'slot15_Amt1', index: 426, isLinear: true, range: [0, 1000] as [number, number] },
  slot15Trg1: { name: 'slot15_Trg1', index: 427, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot15Amt2: { name: 'slot15_Amt2', index: 428, isLinear: true, range: [0, 1000] as [number, number] },
  slot15Trg2: { name: 'slot15_Trg2', index: 429, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot15Amt3: { name: 'slot15_Amt3', index: 430, isLinear: true, range: [0, 1000] as [number, number] },
  slot15Trg3: { name: 'slot15_Trg3', index: 431, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  slot15Amt4: { name: 'slot15_Amt4', index: 432, isLinear: true, range: [0, 1000] as [number, number] },
  slot15Trg4: { name: 'slot15_Trg4', index: 433, isLinear: false, choices: {"off":0,"osc3_density":0.0357142873108387,"env3_att":0.0714285746216774,"lfo3_amt1":0.1071428656578064,"del_rate":0.1428571492433548,"slot5_amt2":0.1785714328289032,"slot14_amt2":0.2142857313156128,"glide":1} },
  osc1Mute: { name: 'osc1_mute', index: 434, isLinear: false, choices: {"off":0,"on":1} },
  osc2Mute: { name: 'osc2_mute', index: 435, isLinear: false, choices: {"off":0,"on":1} },
  osc3Mute: { name: 'osc3_mute', index: 436, isLinear: false, choices: {"off":0,"on":1} },
  osc4Mute: { name: 'osc4_mute', index: 437, isLinear: false, choices: {"off":0,"on":1} },
  stp1Rate: { name: 'stp1_rate', index: 438, isLinear: true, range: [0, 1000] as [number, number] },
  stp1Mono: { name: 'stp1_mono', index: 439, isLinear: false, choices: {"off":0,"on":1} },
  stp1Rtrg: { name: 'stp1_rtrg', index: 440, isLinear: false, choices: {"off":0,"on":1} },
  stp1Loop: { name: 'stp1_loop', index: 441, isLinear: false, choices: {"off":0,"on":1} },
  stp1Hold1: { name: 'stp1_hold1', index: 442, isLinear: false, choices: {"off":0,"on":1} },
  stp1Hold2: { name: 'stp1_hold2', index: 443, isLinear: false, choices: {"off":0,"on":1} },
  stp1Hold3: { name: 'stp1_hold3', index: 444, isLinear: false, choices: {"off":0,"on":1} },
  stp1Hold4: { name: 'stp1_hold4', index: 445, isLinear: false, choices: {"off":0,"on":1} },
  stp1Hold5: { name: 'stp1_hold5', index: 446, isLinear: false, choices: {"off":0,"on":1} },
  stp1Hold6: { name: 'stp1_hold6', index: 447, isLinear: false, choices: {"off":0,"on":1} },
  stp1Hold7: { name: 'stp1_hold7', index: 448, isLinear: false, choices: {"off":0,"on":1} },
  stp1Hold8: { name: 'stp1_hold8', index: 449, isLinear: false, choices: {"off":0,"on":1} },
  stp1Hold9: { name: 'stp1_hold9', index: 450, isLinear: false, choices: {"off":0,"on":1} },
  stp1Hold10: { name: 'stp1_hold10', index: 451, isLinear: false, choices: {"off":0,"on":1} },
  stp1Hold11: { name: 'stp1_hold11', index: 452, isLinear: false, choices: {"off":0,"on":1} },
  stp1Hold12: { name: 'stp1_hold12', index: 453, isLinear: false, choices: {"off":0,"on":1} },
  stp1Hold13: { name: 'stp1_hold13', index: 454, isLinear: false, choices: {"off":0,"on":1} },
  stp1Hold14: { name: 'stp1_hold14', index: 455, isLinear: false, choices: {"off":0,"on":1} },
  stp1Hold15: { name: 'stp1_hold15', index: 456, isLinear: false, choices: {"off":0,"on":1} },
  stp1Hold16: { name: 'stp1_hold16', index: 457, isLinear: false, choices: {"off":0,"on":1} },
  stp2Rate: { name: 'stp2_rate', index: 458, isLinear: true, range: [0, 1000] as [number, number] },
  stp2Mono: { name: 'stp2_mono', index: 459, isLinear: false, choices: {"off":0,"on":1} },
  stp2Rtrg: { name: 'stp2_rtrg', index: 460, isLinear: false, choices: {"off":0,"on":1} },
  stp2Loop: { name: 'stp2_loop', index: 461, isLinear: false, choices: {"off":0,"on":1} },
  stp2Hold1: { name: 'stp2_hold1', index: 462, isLinear: false, choices: {"off":0,"on":1} },
  stp2Hold2: { name: 'stp2_hold2', index: 463, isLinear: false, choices: {"off":0,"on":1} },
  stp2Hold3: { name: 'stp2_hold3', index: 464, isLinear: false, choices: {"off":0,"on":1} },
  stp2Hold4: { name: 'stp2_hold4', index: 465, isLinear: false, choices: {"off":0,"on":1} },
  stp2Hold5: { name: 'stp2_hold5', index: 466, isLinear: false, choices: {"off":0,"on":1} },
  stp2Hold6: { name: 'stp2_hold6', index: 467, isLinear: false, choices: {"off":0,"on":1} },
  stp2Hold7: { name: 'stp2_hold7', index: 468, isLinear: false, choices: {"off":0,"on":1} },
  stp2Hold8: { name: 'stp2_hold8', index: 469, isLinear: false, choices: {"off":0,"on":1} },
  stp2Hold9: { name: 'stp2_hold9', index: 470, isLinear: false, choices: {"off":0,"on":1} },
  stp2Hold10: { name: 'stp2_hold10', index: 471, isLinear: false, choices: {"off":0,"on":1} },
  stp2Hold11: { name: 'stp2_hold11', index: 472, isLinear: false, choices: {"off":0,"on":1} },
  stp2Hold12: { name: 'stp2_hold12', index: 473, isLinear: false, choices: {"off":0,"on":1} },
  stp2Hold13: { name: 'stp2_hold13', index: 474, isLinear: false, choices: {"off":0,"on":1} },
  stp2Hold14: { name: 'stp2_hold14', index: 475, isLinear: false, choices: {"off":0,"on":1} },
  stp2Hold15: { name: 'stp2_hold15', index: 476, isLinear: false, choices: {"off":0,"on":1} },
  stp2Hold16: { name: 'stp2_hold16', index: 477, isLinear: false, choices: {"off":0,"on":1} },
  arpOn: { name: 'arp_on', index: 478, isLinear: false, choices: {"off":0,"on":1} },
  arpLength: { name: 'arp_length', index: 479, isLinear: true, range: [0, 1000] as [number, number] },
  arpSwing: { name: 'arp_swing', index: 480, isLinear: true, range: [0, 1000] as [number, number] },
  shpMute: { name: 'shp_mute', index: 481, isLinear: false, choices: {"off":0,"on":1} },
  phsMute: { name: 'phs_mute', index: 482, isLinear: false, choices: {"off":0,"on":1} },
  chrMute: { name: 'chr_mute', index: 483, isLinear: false, choices: {"off":0,"on":1} },
  delMute: { name: 'del_mute', index: 484, isLinear: false, choices: {"off":0,"on":1} },
  revMute: { name: 'rev_mute', index: 485, isLinear: false, choices: {"off":0,"on":1} },
  warm: { name: 'warm', index: 486, isLinear: false, choices: {"off":0,"on":1} },
  boost: { name: 'boost', index: 487, isLinear: false, choices: {"off":0,"on":1} },
  soft: { name: 'soft', index: 488, isLinear: false, choices: {"off":0,"on":1} },
  macro1: { name: 'macro1', index: 489, isLinear: true, range: [0, 1000] as [number, number] },
  macro2: { name: 'macro2', index: 490, isLinear: true, range: [0, 1000] as [number, number] },
  macro3: { name: 'macro3', index: 491, isLinear: true, range: [0, 1000] as [number, number] },
  macro4: { name: 'macro4', index: 492, isLinear: true, range: [0, 1000] as [number, number] },
  pitchShift: { name: 'pitch_shift', index: 493, isLinear: true, range: [-64, 64] as [number, number] },
  pitchFine: { name: 'pitch_fine', index: 494, isLinear: true, range: [-99, 99] as [number, number] },
  bendWheel: { name: 'bend_wheel', index: 495, isLinear: true, range: [0, 1000] as [number, number] },
  modWheel: { name: 'mod_wheel', index: 496, isLinear: true, range: [0, 1000] as [number, number] },
  anticlick: { name: 'anticlick', index: 497, isLinear: true, range: [0, 1000] as [number, number] },
  oscAllPt: { name: 'osc_all_pt', index: 498, isLinear: true, range: [0, 1000] as [number, number] },
  lfoAllRt: { name: 'lfo_all_rt', index: 499, isLinear: true, range: [0, 1000] as [number, number] }
}
const makeAutomation = {
  glideLog (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'glideLog',
    });
  },
  glide (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'glide',
    });
  },
  drift (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'drift',
    });
  },
  xComp (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'xComp',
    });
  },
  velocity (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'velocity',
    });
  },
  volume (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'volume',
    });
  },
  eqBand (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'eqBand',
    });
  },
  eqPower (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'eqPower',
    });
  },
  eqLowFrq (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'eqLowFrq',
    });
  },
  eqLowQ (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'eqLowQ',
    });
  },
  eqLowLev (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'eqLowLev',
    });
  },
  eqMidFrq (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'eqMidFrq',
    });
  },
  eqMidQ (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'eqMidQ',
    });
  },
  eqMidLev (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'eqMidLev',
    });
  },
  eqHiFrq (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'eqHiFrq',
    });
  },
  eqHiQ (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'eqHiQ',
    });
  },
  eqHiLev (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'eqHiLev',
    });
  },
  mixOsc1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'mixOsc1',
    });
  },
  mixOsc2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'mixOsc2',
    });
  },
  mixOsc3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'mixOsc3',
    });
  },
  mixOsc4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'mixOsc4',
    });
  },
  osc1Type (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc1Type',
    });
  },
  osc1Oct (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc1Oct',
    });
  },
  osc1Note (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc1Note',
    });
  },
  osc1Fine (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc1Fine',
    });
  },
  osc1CtrlA (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc1CtrlA',
    });
  },
  osc1CtrlB (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc1CtrlB',
    });
  },
  osc1Phase (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc1Phase',
    });
  },
  osc1Wave (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc1Wave',
    });
  },
  osc1Wtmix (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc1Wtmix',
    });
  },
  osc1Udet (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc1Udet',
    });
  },
  osc1Uwid (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc1Uwid',
    });
  },
  osc1UnisonVoices (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc1UnisonVoices',
    });
  },
  osc1UnisonInterval (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc1UnisonInterval',
    });
  },
  osc1Uden (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc1Uden',
    });
  },
  osc1Pan (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc1Pan',
    });
  },
  osc1Ana (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc1Ana',
    });
  },
  osc1Inv (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc1Inv',
    });
  },
  osc1Key (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc1Key',
    });
  },
  osc1Mixto (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc1Mixto',
    });
  },
  osc2Type (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc2Type',
    });
  },
  osc2Oct (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc2Oct',
    });
  },
  osc2Note (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc2Note',
    });
  },
  osc2Fine (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc2Fine',
    });
  },
  osc2CtrlA (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc2CtrlA',
    });
  },
  osc2CtrlB (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc2CtrlB',
    });
  },
  osc2Phase (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc2Phase',
    });
  },
  osc2Wave (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc2Wave',
    });
  },
  osc2Wtmix (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc2Wtmix',
    });
  },
  osc2Udet (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc2Udet',
    });
  },
  osc2Uwid (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc2Uwid',
    });
  },
  osc2UnisonVoices (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc2UnisonVoices',
    });
  },
  osc2UnisonInterval (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc2UnisonInterval',
    });
  },
  osc2Uden (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc2Uden',
    });
  },
  osc2Pan (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc2Pan',
    });
  },
  osc2Ana (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc2Ana',
    });
  },
  osc2Inv (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc2Inv',
    });
  },
  osc2Key (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc2Key',
    });
  },
  osc2Mixto (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc2Mixto',
    });
  },
  osc3Type (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc3Type',
    });
  },
  osc3Oct (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc3Oct',
    });
  },
  osc3Note (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc3Note',
    });
  },
  osc3Fine (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc3Fine',
    });
  },
  osc3CtrlA (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc3CtrlA',
    });
  },
  osc3CtrlB (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc3CtrlB',
    });
  },
  osc3Phase (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc3Phase',
    });
  },
  osc3Wave (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc3Wave',
    });
  },
  osc3Wtmix (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc3Wtmix',
    });
  },
  osc3Udet (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc3Udet',
    });
  },
  osc3Uwid (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc3Uwid',
    });
  },
  osc3UnisonVoices (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc3UnisonVoices',
    });
  },
  osc3UnisonInterval (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc3UnisonInterval',
    });
  },
  osc3Uden (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc3Uden',
    });
  },
  osc3Pan (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc3Pan',
    });
  },
  osc3Ana (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc3Ana',
    });
  },
  osc3Inv (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc3Inv',
    });
  },
  osc3Key (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc3Key',
    });
  },
  osc3Mixto (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc3Mixto',
    });
  },
  osc4Type (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc4Type',
    });
  },
  osc4Oct (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc4Oct',
    });
  },
  osc4Note (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc4Note',
    });
  },
  osc4Fine (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc4Fine',
    });
  },
  osc4CtrlA (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc4CtrlA',
    });
  },
  osc4CtrlB (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc4CtrlB',
    });
  },
  osc4Phase (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc4Phase',
    });
  },
  osc4Wave (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc4Wave',
    });
  },
  osc4Wtmix (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc4Wtmix',
    });
  },
  osc4Udet (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc4Udet',
    });
  },
  osc4Uwid (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc4Uwid',
    });
  },
  osc4UnisonVoices (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc4UnisonVoices',
    });
  },
  osc4UnisonInterval (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc4UnisonInterval',
    });
  },
  osc4Uden (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc4Uden',
    });
  },
  osc4Pan (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc4Pan',
    });
  },
  osc4Ana (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc4Ana',
    });
  },
  osc4Inv (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc4Inv',
    });
  },
  osc4Key (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc4Key',
    });
  },
  osc4Mixto (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc4Mixto',
    });
  },
  flt1Type (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'flt1Type',
    });
  },
  flt1Mode (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'flt1Mode',
    });
  },
  flt1Cut (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'flt1Cut',
    });
  },
  flt1Res (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'flt1Res',
    });
  },
  flt2Type (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'flt2Type',
    });
  },
  flt2Mode (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'flt2Mode',
    });
  },
  flt2Cut (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'flt2Cut',
    });
  },
  flt2Res (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'flt2Res',
    });
  },
  fltRout (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'fltRout',
    });
  },
  fltLink (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'fltLink',
    });
  },
  fltBalance (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'fltBalance',
    });
  },
  fltKeytrack (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'fltKeytrack',
    });
  },
  env1Att (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env1Att',
    });
  },
  env1Dec (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env1Dec',
    });
  },
  env1Sus (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env1Sus',
    });
  },
  env1Slt (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env1Slt',
    });
  },
  env1Sll (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env1Sll',
    });
  },
  env1Rel (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env1Rel',
    });
  },
  env1AttCrv (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env1AttCrv',
    });
  },
  env1DecCrv (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env1DecCrv',
    });
  },
  env1SlpCrv (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env1SlpCrv',
    });
  },
  env1RelCrv (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env1RelCrv',
    });
  },
  env1Target1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env1Target1',
    });
  },
  env1Amt1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env1Amt1',
    });
  },
  env1Vel1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env1Vel1',
    });
  },
  env1Target2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env1Target2',
    });
  },
  env1Amt2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env1Amt2',
    });
  },
  env1Vel2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env1Vel2',
    });
  },
  env2Att (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env2Att',
    });
  },
  env2Dec (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env2Dec',
    });
  },
  env2Sus (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env2Sus',
    });
  },
  env2Slt (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env2Slt',
    });
  },
  env2Sll (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env2Sll',
    });
  },
  env2Rel (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env2Rel',
    });
  },
  env2AttCrv (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env2AttCrv',
    });
  },
  env2DecCrv (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env2DecCrv',
    });
  },
  env2SlpCrv (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env2SlpCrv',
    });
  },
  env2RelCrv (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env2RelCrv',
    });
  },
  env2Target1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env2Target1',
    });
  },
  env2Amt1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env2Amt1',
    });
  },
  env2Vel1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env2Vel1',
    });
  },
  env2Target2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env2Target2',
    });
  },
  env2Amt2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env2Amt2',
    });
  },
  env2Vel2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env2Vel2',
    });
  },
  env3Att (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env3Att',
    });
  },
  env3Dec (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env3Dec',
    });
  },
  env3Sus (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env3Sus',
    });
  },
  env3Slt (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env3Slt',
    });
  },
  env3Sll (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env3Sll',
    });
  },
  env3Rel (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env3Rel',
    });
  },
  env3AttCrv (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env3AttCrv',
    });
  },
  env3DecCrv (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env3DecCrv',
    });
  },
  env3SlpCrv (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env3SlpCrv',
    });
  },
  env3RelCrv (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env3RelCrv',
    });
  },
  env3Target1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env3Target1',
    });
  },
  env3Amt1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env3Amt1',
    });
  },
  env3Vel1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env3Vel1',
    });
  },
  env3Target2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env3Target2',
    });
  },
  env3Amt2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env3Amt2',
    });
  },
  env3Vel2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env3Vel2',
    });
  },
  env4Att (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env4Att',
    });
  },
  env4Dec (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env4Dec',
    });
  },
  env4Sus (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env4Sus',
    });
  },
  env4Slt (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env4Slt',
    });
  },
  env4Sll (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env4Sll',
    });
  },
  env4Rel (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env4Rel',
    });
  },
  env4AttCrv (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env4AttCrv',
    });
  },
  env4DecCrv (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env4DecCrv',
    });
  },
  env4SlpCrv (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env4SlpCrv',
    });
  },
  env4RelCrv (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env4RelCrv',
    });
  },
  env4Target1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env4Target1',
    });
  },
  env4Amt1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env4Amt1',
    });
  },
  env4Vel1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env4Vel1',
    });
  },
  env4Target2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env4Target2',
    });
  },
  env4Amt2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env4Amt2',
    });
  },
  env4Vel2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'env4Vel2',
    });
  },
  lfo1Rate (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo1Rate',
    });
  },
  lfo1Time (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo1Time',
    });
  },
  lfo1Sym (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo1Sym',
    });
  },
  lfo1Sync (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo1Sync',
    });
  },
  lfo1Mono (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo1Mono',
    });
  },
  lfo1Morph (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo1Morph',
    });
  },
  lfo1Phase (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo1Phase',
    });
  },
  lfo1Form (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo1Form',
    });
  },
  lfo1Amp (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo1Amp',
    });
  },
  lfo1Fadein (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo1Fadein',
    });
  },
  lfo1Target1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo1Target1',
    });
  },
  lfo1Amt1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo1Amt1',
    });
  },
  lfo1Vel1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo1Vel1',
    });
  },
  lfo1Target2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo1Target2',
    });
  },
  lfo1Amt2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo1Amt2',
    });
  },
  lfo1Vel2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo1Vel2',
    });
  },
  lfo2Rate (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo2Rate',
    });
  },
  lfo2Time (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo2Time',
    });
  },
  lfo2Sym (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo2Sym',
    });
  },
  lfo2Sync (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo2Sync',
    });
  },
  lfo2Mono (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo2Mono',
    });
  },
  lfo2Morph (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo2Morph',
    });
  },
  lfo2Phase (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo2Phase',
    });
  },
  lfo2Form (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo2Form',
    });
  },
  lfo2Amp (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo2Amp',
    });
  },
  lfo2Fadein (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo2Fadein',
    });
  },
  lfo2Target1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo2Target1',
    });
  },
  lfo2Amt1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo2Amt1',
    });
  },
  lfo2Vel1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo2Vel1',
    });
  },
  lfo2Target2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo2Target2',
    });
  },
  lfo2Amt2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo2Amt2',
    });
  },
  lfo2Vel2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo2Vel2',
    });
  },
  lfo3Rate (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo3Rate',
    });
  },
  lfo3Time (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo3Time',
    });
  },
  lfo3Sym (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo3Sym',
    });
  },
  lfo3Sync (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo3Sync',
    });
  },
  lfo3Mono (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo3Mono',
    });
  },
  lfo3Morph (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo3Morph',
    });
  },
  lfo3Phase (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo3Phase',
    });
  },
  lfo3Form (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo3Form',
    });
  },
  lfo3Amp (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo3Amp',
    });
  },
  lfo3Fadein (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo3Fadein',
    });
  },
  lfo3Target1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo3Target1',
    });
  },
  lfo3Amt1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo3Amt1',
    });
  },
  lfo3Vel1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo3Vel1',
    });
  },
  lfo3Target2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo3Target2',
    });
  },
  lfo3Amt2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo3Amt2',
    });
  },
  lfo3Vel2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo3Vel2',
    });
  },
  lfo4Rate (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo4Rate',
    });
  },
  lfo4Time (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo4Time',
    });
  },
  lfo4Sym (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo4Sym',
    });
  },
  lfo4Sync (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo4Sync',
    });
  },
  lfo4Mono (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo4Mono',
    });
  },
  lfo4Morph (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo4Morph',
    });
  },
  lfo4Phase (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo4Phase',
    });
  },
  lfo4Form (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo4Form',
    });
  },
  lfo4Amp (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo4Amp',
    });
  },
  lfo4Fadein (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo4Fadein',
    });
  },
  lfo4Target1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo4Target1',
    });
  },
  lfo4Amt1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo4Amt1',
    });
  },
  lfo4Vel1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo4Vel1',
    });
  },
  lfo4Target2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo4Target2',
    });
  },
  lfo4Amt2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo4Amt2',
    });
  },
  lfo4Vel2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfo4Vel2',
    });
  },
  shpMode (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'shpMode',
    });
  },
  shpBand (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'shpBand',
    });
  },
  shpDrive (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'shpDrive',
    });
  },
  shpBit (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'shpBit',
    });
  },
  shpSr (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'shpSr',
    });
  },
  shpHicut (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'shpHicut',
    });
  },
  shpLowcut (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'shpLowcut',
    });
  },
  shpWet (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'shpWet',
    });
  },
  shpHq (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'shpHq',
    });
  },
  phsStages (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'phsStages',
    });
  },
  phsFreq (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'phsFreq',
    });
  },
  phsFback (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'phsFback',
    });
  },
  phsSpread (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'phsSpread',
    });
  },
  phsRate (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'phsRate',
    });
  },
  phsDepth (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'phsDepth',
    });
  },
  phsWet (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'phsWet',
    });
  },
  phsPre (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'phsPre',
    });
  },
  chrDelay (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'chrDelay',
    });
  },
  chrMode (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'chrMode',
    });
  },
  chrFback (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'chrFback',
    });
  },
  chrRate (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'chrRate',
    });
  },
  chrDepth (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'chrDepth',
    });
  },
  chrWide (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'chrWide',
    });
  },
  chrHicut (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'chrHicut',
    });
  },
  chrLowcut (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'chrLowcut',
    });
  },
  chrWet (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'chrWet',
    });
  },
  delTimeL (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'delTimeL',
    });
  },
  delTimeR (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'delTimeR',
    });
  },
  delStimeL (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'delStimeL',
    });
  },
  delStimeR (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'delStimeR',
    });
  },
  delPingpong (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'delPingpong',
    });
  },
  delSync (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'delSync',
    });
  },
  delRate (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'delRate',
    });
  },
  delFback (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'delFback',
    });
  },
  delWide (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'delWide',
    });
  },
  delModulate (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'delModulate',
    });
  },
  delColor (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'delColor',
    });
  },
  delWet (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'delWet',
    });
  },
  revMode (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'revMode',
    });
  },
  revSync (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'revSync',
    });
  },
  revPretime (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'revPretime',
    });
  },
  revPretimeS (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'revPretimeS',
    });
  },
  revDamp (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'revDamp',
    });
  },
  revWide (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'revWide',
    });
  },
  revDecay (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'revDecay',
    });
  },
  revColor (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'revColor',
    });
  },
  revWet (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'revWet',
    });
  },
  slot1Src1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot1Src1',
    });
  },
  slot1Src2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot1Src2',
    });
  },
  slot1Amt1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot1Amt1',
    });
  },
  slot1Trg1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot1Trg1',
    });
  },
  slot1Amt2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot1Amt2',
    });
  },
  slot1Trg2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot1Trg2',
    });
  },
  slot1Amt3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot1Amt3',
    });
  },
  slot1Trg3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot1Trg3',
    });
  },
  slot1Amt4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot1Amt4',
    });
  },
  slot1Trg4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot1Trg4',
    });
  },
  slot2Src1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot2Src1',
    });
  },
  slot2Src2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot2Src2',
    });
  },
  slot2Amt1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot2Amt1',
    });
  },
  slot2Trg1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot2Trg1',
    });
  },
  slot2Amt2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot2Amt2',
    });
  },
  slot2Trg2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot2Trg2',
    });
  },
  slot2Amt3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot2Amt3',
    });
  },
  slot2Trg3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot2Trg3',
    });
  },
  slot2Amt4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot2Amt4',
    });
  },
  slot2Trg4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot2Trg4',
    });
  },
  slot3Src1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot3Src1',
    });
  },
  slot3Src2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot3Src2',
    });
  },
  slot3Amt1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot3Amt1',
    });
  },
  slot3Trg1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot3Trg1',
    });
  },
  slot3Amt2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot3Amt2',
    });
  },
  slot3Trg2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot3Trg2',
    });
  },
  slot3Amt3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot3Amt3',
    });
  },
  slot3Trg3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot3Trg3',
    });
  },
  slot3Amt4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot3Amt4',
    });
  },
  slot3Trg4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot3Trg4',
    });
  },
  slot4Src1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot4Src1',
    });
  },
  slot4Src2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot4Src2',
    });
  },
  slot4Amt1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot4Amt1',
    });
  },
  slot4Trg1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot4Trg1',
    });
  },
  slot4Amt2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot4Amt2',
    });
  },
  slot4Trg2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot4Trg2',
    });
  },
  slot4Amt3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot4Amt3',
    });
  },
  slot4Trg3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot4Trg3',
    });
  },
  slot4Amt4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot4Amt4',
    });
  },
  slot4Trg4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot4Trg4',
    });
  },
  slot5Src1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot5Src1',
    });
  },
  slot5Src2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot5Src2',
    });
  },
  slot5Amt1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot5Amt1',
    });
  },
  slot5Trg1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot5Trg1',
    });
  },
  slot5Amt2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot5Amt2',
    });
  },
  slot5Trg2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot5Trg2',
    });
  },
  slot5Amt3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot5Amt3',
    });
  },
  slot5Trg3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot5Trg3',
    });
  },
  slot5Amt4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot5Amt4',
    });
  },
  slot5Trg4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot5Trg4',
    });
  },
  slot6Src1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot6Src1',
    });
  },
  slot6Src2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot6Src2',
    });
  },
  slot6Amt1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot6Amt1',
    });
  },
  slot6Trg1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot6Trg1',
    });
  },
  slot6Amt2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot6Amt2',
    });
  },
  slot6Trg2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot6Trg2',
    });
  },
  slot6Amt3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot6Amt3',
    });
  },
  slot6Trg3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot6Trg3',
    });
  },
  slot6Amt4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot6Amt4',
    });
  },
  slot6Trg4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot6Trg4',
    });
  },
  slot7Src1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot7Src1',
    });
  },
  slot7Src2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot7Src2',
    });
  },
  slot7Amt1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot7Amt1',
    });
  },
  slot7Trg1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot7Trg1',
    });
  },
  slot7Amt2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot7Amt2',
    });
  },
  slot7Trg2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot7Trg2',
    });
  },
  slot7Amt3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot7Amt3',
    });
  },
  slot7Trg3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot7Trg3',
    });
  },
  slot7Amt4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot7Amt4',
    });
  },
  slot7Trg4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot7Trg4',
    });
  },
  slot8Src1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot8Src1',
    });
  },
  slot8Src2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot8Src2',
    });
  },
  slot8Amt1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot8Amt1',
    });
  },
  slot8Trg1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot8Trg1',
    });
  },
  slot8Amt2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot8Amt2',
    });
  },
  slot8Trg2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot8Trg2',
    });
  },
  slot8Amt3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot8Amt3',
    });
  },
  slot8Trg3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot8Trg3',
    });
  },
  slot8Amt4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot8Amt4',
    });
  },
  slot8Trg4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot8Trg4',
    });
  },
  slot9Src1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot9Src1',
    });
  },
  slot9Src2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot9Src2',
    });
  },
  slot9Amt1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot9Amt1',
    });
  },
  slot9Trg1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot9Trg1',
    });
  },
  slot9Amt2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot9Amt2',
    });
  },
  slot9Trg2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot9Trg2',
    });
  },
  slot9Amt3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot9Amt3',
    });
  },
  slot9Trg3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot9Trg3',
    });
  },
  slot9Amt4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot9Amt4',
    });
  },
  slot9Trg4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot9Trg4',
    });
  },
  slot10Src1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot10Src1',
    });
  },
  slot10Src2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot10Src2',
    });
  },
  slot10Amt1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot10Amt1',
    });
  },
  slot10Trg1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot10Trg1',
    });
  },
  slot10Amt2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot10Amt2',
    });
  },
  slot10Trg2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot10Trg2',
    });
  },
  slot10Amt3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot10Amt3',
    });
  },
  slot10Trg3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot10Trg3',
    });
  },
  slot10Amt4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot10Amt4',
    });
  },
  slot10Trg4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot10Trg4',
    });
  },
  slot11Src1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot11Src1',
    });
  },
  slot11Src2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot11Src2',
    });
  },
  slot11Amt1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot11Amt1',
    });
  },
  slot11Trg1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot11Trg1',
    });
  },
  slot11Amt2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot11Amt2',
    });
  },
  slot11Trg2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot11Trg2',
    });
  },
  slot11Amt3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot11Amt3',
    });
  },
  slot11Trg3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot11Trg3',
    });
  },
  slot11Amt4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot11Amt4',
    });
  },
  slot11Trg4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot11Trg4',
    });
  },
  slot12Src1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot12Src1',
    });
  },
  slot12Src2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot12Src2',
    });
  },
  slot12Amt1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot12Amt1',
    });
  },
  slot12Trg1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot12Trg1',
    });
  },
  slot12Amt2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot12Amt2',
    });
  },
  slot12Trg2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot12Trg2',
    });
  },
  slot12Amt3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot12Amt3',
    });
  },
  slot12Trg3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot12Trg3',
    });
  },
  slot12Amt4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot12Amt4',
    });
  },
  slot12Trg4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot12Trg4',
    });
  },
  slot13Src1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot13Src1',
    });
  },
  slot13Src2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot13Src2',
    });
  },
  slot13Amt1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot13Amt1',
    });
  },
  slot13Trg1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot13Trg1',
    });
  },
  slot13Amt2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot13Amt2',
    });
  },
  slot13Trg2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot13Trg2',
    });
  },
  slot13Amt3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot13Amt3',
    });
  },
  slot13Trg3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot13Trg3',
    });
  },
  slot13Amt4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot13Amt4',
    });
  },
  slot13Trg4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot13Trg4',
    });
  },
  slot14Src1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot14Src1',
    });
  },
  slot14Src2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot14Src2',
    });
  },
  slot14Amt1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot14Amt1',
    });
  },
  slot14Trg1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot14Trg1',
    });
  },
  slot14Amt2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot14Amt2',
    });
  },
  slot14Trg2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot14Trg2',
    });
  },
  slot14Amt3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot14Amt3',
    });
  },
  slot14Trg3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot14Trg3',
    });
  },
  slot14Amt4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot14Amt4',
    });
  },
  slot14Trg4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot14Trg4',
    });
  },
  slot15Src1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot15Src1',
    });
  },
  slot15Src2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot15Src2',
    });
  },
  slot15Amt1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot15Amt1',
    });
  },
  slot15Trg1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot15Trg1',
    });
  },
  slot15Amt2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot15Amt2',
    });
  },
  slot15Trg2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot15Trg2',
    });
  },
  slot15Amt3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot15Amt3',
    });
  },
  slot15Trg3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot15Trg3',
    });
  },
  slot15Amt4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot15Amt4',
    });
  },
  slot15Trg4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'slot15Trg4',
    });
  },
  osc1Mute (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc1Mute',
    });
  },
  osc2Mute (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc2Mute',
    });
  },
  osc3Mute (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc3Mute',
    });
  },
  osc4Mute (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'osc4Mute',
    });
  },
  stp1Rate (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp1Rate',
    });
  },
  stp1Mono (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp1Mono',
    });
  },
  stp1Rtrg (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp1Rtrg',
    });
  },
  stp1Loop (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp1Loop',
    });
  },
  stp1Hold1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp1Hold1',
    });
  },
  stp1Hold2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp1Hold2',
    });
  },
  stp1Hold3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp1Hold3',
    });
  },
  stp1Hold4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp1Hold4',
    });
  },
  stp1Hold5 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp1Hold5',
    });
  },
  stp1Hold6 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp1Hold6',
    });
  },
  stp1Hold7 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp1Hold7',
    });
  },
  stp1Hold8 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp1Hold8',
    });
  },
  stp1Hold9 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp1Hold9',
    });
  },
  stp1Hold10 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp1Hold10',
    });
  },
  stp1Hold11 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp1Hold11',
    });
  },
  stp1Hold12 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp1Hold12',
    });
  },
  stp1Hold13 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp1Hold13',
    });
  },
  stp1Hold14 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp1Hold14',
    });
  },
  stp1Hold15 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp1Hold15',
    });
  },
  stp1Hold16 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp1Hold16',
    });
  },
  stp2Rate (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp2Rate',
    });
  },
  stp2Mono (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp2Mono',
    });
  },
  stp2Rtrg (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp2Rtrg',
    });
  },
  stp2Loop (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp2Loop',
    });
  },
  stp2Hold1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp2Hold1',
    });
  },
  stp2Hold2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp2Hold2',
    });
  },
  stp2Hold3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp2Hold3',
    });
  },
  stp2Hold4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp2Hold4',
    });
  },
  stp2Hold5 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp2Hold5',
    });
  },
  stp2Hold6 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp2Hold6',
    });
  },
  stp2Hold7 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp2Hold7',
    });
  },
  stp2Hold8 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp2Hold8',
    });
  },
  stp2Hold9 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp2Hold9',
    });
  },
  stp2Hold10 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp2Hold10',
    });
  },
  stp2Hold11 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp2Hold11',
    });
  },
  stp2Hold12 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp2Hold12',
    });
  },
  stp2Hold13 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp2Hold13',
    });
  },
  stp2Hold14 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp2Hold14',
    });
  },
  stp2Hold15 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp2Hold15',
    });
  },
  stp2Hold16 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'stp2Hold16',
    });
  },
  arpOn (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'arpOn',
    });
  },
  arpLength (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'arpLength',
    });
  },
  arpSwing (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'arpSwing',
    });
  },
  shpMute (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'shpMute',
    });
  },
  phsMute (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'phsMute',
    });
  },
  chrMute (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'chrMute',
    });
  },
  delMute (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'delMute',
    });
  },
  revMute (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'revMute',
    });
  },
  warm (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'warm',
    });
  },
  boost (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'boost',
    });
  },
  soft (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'soft',
    });
  },
  macro1 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'macro1',
    });
  },
  macro2 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'macro2',
    });
  },
  macro3 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'macro3',
    });
  },
  macro4 (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'macro4',
    });
  },
  pitchShift (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'pitchShift',
    });
  },
  pitchFine (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'pitchFine',
    });
  },
  bendWheel (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'bendWheel',
    });
  },
  modWheel (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'modWheel',
    });
  },
  anticlick (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'anticlick',
    });
  },
  oscAllPt (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'oscAllPt',
    });
  },
  lfoAllRt (value? : number, curve = 0) {
    return new PluginAutomation({
      value,
      curve,
      plugin: { pluginName, pluginType },
      paramKey: 'lfoAllRt',
    });
  }
}
export class Spire15Vst2 extends FluidPlugin {
  constructor(
    public parameters : Spire15Vst2Parameters = {},
  ) {
    super(pluginName, pluginType)
    this.vst2.uid = 0
    this.vst2.vendor = 'Reveal Sound'
    this.numAudioInputChannels = 0
    this.numAudioOutputChannels = 2
    this.isSynth = true
  }

  readonly parameterLibrary = parameterLibrary;
  readonly makeAutomation = makeAutomation;

  // Static members
  static readonly parameterLibrary = parameterLibrary;
  static readonly makeAutomation = makeAutomation;
}
