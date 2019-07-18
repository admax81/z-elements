<template>
  <e-icon icon="circle-filled" size="0.9em" :color="colors[value]"></e-icon>
</template>

<script>
  export default {
    props: {
      colors: {
        type: Object,
        required: true
      },
      value: {
        type: String,
        required: true
      }
    }
  }
</script>
