# Fluid Music adapter for [Spire](https://www.reveal-sound.com/plug-ins/spire) VST2 Synth by Reveal Sound

**Under Construction**

```javascript
const { Spire15Vst2 } = require('@fluid-music/spire')
const spire = new Spire15Vst2({
  osc1UnisonInterval: Spire15Vst2.parameterLibrary.osc1UnisonInterval.choices.dim7th,
  osc2UnisonInterval: Spire15Vst2.parameterLibrary.osc2UnisonInterval.choices.p5th,

  osc1UnisonVoices: Spire15Vst2.parameterLibrary.osc1UnisonVoices.choices['5'],
  osc2UnisonVoices: Spire15Vst2.parameterLibrary.osc2UnisonVoices.choices['9'],

  osc1Type: Spire15Vst2.parameterLibrary.osc1Type.choices.noise,
  osc2Type: Spire15Vst2.parameterLibrary.osc1Type.choices.classic,

  xComp: 788,
})
```
