<template>
  <div class="e-form textarea">
    <label :class="{ small: small }">{{label}}</label>
    <textarea v-model="text"
              @focusin="focus = true"
              @focusout="focus = false"
              :disabled="disabled"
    ></textarea>
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        default: "",
        required: true,
        type: String
      },
      value: {
        default: "",
        type: String,
        required: true
      },
      disabled: {
        default: false,
        type: Boolean
      }
    },
    data () {
      return {
        text: this.value,
        focus: false,
        small: this.value.length > 0
      }
    },
    watch: {
      focus(v) {
        this.small = v ? true : this.text.length > 0;
      },
      text($val) {
        this.$emit('input', $val);
      }
    },
  }
</script>
