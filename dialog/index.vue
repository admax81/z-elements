<template>
  <transition name="slide-fade">
    <div class="dialog" v-if="active">
      <div class="background" @click="$emit('close')"></div>
      <div class="window">
        <div
          class="header"
          v-if="typeof header === 'string' && header.length > 0"
        >
          {{ header }}
        </div>
        <div class="content">
          <slot name="default"></slot>
        </div>
        <div class="buttons">
          <button
            v-for="(btn, i) in buttons"
            :key="'btn-' + i"
            type="button"
            @click="$emit(btn)"
          >
            {{ btn.toUpperCase() }}
          </button>
          <button type="button" @click="$emit('close')">CLOSE</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    header: {
      type: String,
      default: null
    },
    active: {
      type: Boolean,
      default: false
    },
    buttons: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style></style>
