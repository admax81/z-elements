<template>
  <span v-html="getImage()" v-once></span>
</template>

<script>
  import icons from './icons-list';

  export default {
    props: {
      icon: {
        default: "eye-slash",
        required: true,
        type: String
      },
      size: {
        default: "calculate",
        required: false,
        type: String
      },
      color: {
        default: "#000",
        required: false,
        type: String
      }
    },
    data() {
      return {
        wh: null
      }
    },
    methods: {
      getImage() {
        let icon = this.icon;
        if(icons.indexOf(icon) === -1) {
          icon = "eye-slash";
        }

        return require('!!html-loader!@/assets/images/icons/' + icon + '.svg');
      }
    },
    mounted() {
      if(this.size === "calculate") {
        this.wh = Math.max(this.$el.offsetHeight, this.$el.offsetWidth) + "px";
      } else {
        this.wh = this.size;
      }
      let svg = this.$el.querySelector("svg");
      svg.setAttribute("width", this.wh);
      svg.setAttribute("height", this.wh);
      svg.setAttribute("fill", this.color);
      this.$el.outerHTML = this.$el.innerHTML;
    }
  }
</script>

