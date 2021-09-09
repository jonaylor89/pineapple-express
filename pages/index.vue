<template>
  <div>
    <Waveform :id="1" />
    <Waveform :id="2"/>
    <Waveform :id="3"/>
    <TestAudioPlayer />
  </div>
  
</template>

<script>
export default {
  layout: 'authenticated',
};
</script>