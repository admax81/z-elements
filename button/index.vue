<template>
  <div :class="getClass" @click="onClick">
    <div class="overlay"></div>
    <slot name="default"></slot>
  </div>
</template>
<script>
  export default {
    props: {
      type: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      getClass: function() {
        let btn='btn';
        if(this.type.length > 0) btn += ' btn-' + this.type;
        if(this.disabled) btn += ' disabled';
        return btn;
      }
    },
    methods: {
      onClick() {
        if(!this.disabled)
          this.$emit('click');
      }
    }
  }
</script>
