<template>
  <transition name="slide-fade">
    <div class="screen" v-if="active">
      <div class="background"  @click="$emit('close')"></div>
      <div class="window">
        <div class="header" v-if="typeof header === 'string' && header.length > 0">
          {{header}}
          <span class="close-icon" @click="$emit('close')" style="cursor: pointer;padding: 0.45em;">
                        <e-icon color="#555" size="1.8em" icon="times"></e-icon>
                    </span>
        </div>
        <div class="content">
          <slot name="default"></slot>
        </div>
        <div class="buttons">
          <button
            v-for="(btn, i) in buttons"
            :key="'btn-' + i"
            type="button"
            :disabled="btnDisabled(btn)"
            :class="btnClass(btn)"
            @click="clickBtn(btn)"
          >
            {{ btnTitle(btn) }}
          </button>
          <button type="button" @click="$emit('close')"
                  :class="btnClass('close')">CLOSE</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
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
    },
    computed: {
      btnClass: () => btn => {
        let c = typeof btn === "string" ? "btn btn-default" : "btn btn-" + btn.class;
        if(typeof btn !== "string" && btn.disabled) {
          c += " btn-disabled";
        }
        return c;
      },
      btnDisabled: () => btn => {
        return typeof btn === "string" ? false : btn.disabled;
      },
      btnTitle: () => btn => {
        return typeof btn === "string" ? btn.toUpperCase() : btn.name.toUpperCase();
      }
    },
    methods: {
      clickBtn(btn) {
        if(typeof btn === "string") {
          this.$emit(btn);
        } else {
          this.$emit(btn.name);
        }
      }
    }
  }
</script>

<style>
  .close-icon svg {
    fill: #767676;
  }
  .close-icon:hover svg {
    fill: #222;
  }

</style>
