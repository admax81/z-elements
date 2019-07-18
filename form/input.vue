<template>
  <div class="e-form input" :class="{ disabled: disabled }">
    <label>
      <span :class="{ small: small }">{{ label }}</span>
        <input
        :type="type"
        v-model="localValue"
        @focusin="focus = true"
        @focusout="focus = false"
        :disabled="disabled"
      />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      default: "Label",
      type: String
    },
    type: {
      default: "text",
      type: String
    },
    value: {
      default: "",
      type: [String, Number ]
    },
    disabled: {
      default: false,
      type: Boolean
    },
  },
  data() {
    return {
      localValue: this.value,
      small: this.value.toString().length > 0,
      focus: false
    };
  },
  watch: {
    focus(v) {
      this.small = v ? true : this.localValue.toString().length > 0;
    },
    localValue($val) {
      this.$emit('input', $val);
    }
  }
};
</script>
