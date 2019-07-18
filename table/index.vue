<template>
  <div class="m-table">
    <div class="table-header">
      <div class="f-table">
        <div class="f-head-row">
          <div class="f-cell" v-for="(header, idx) in headers" :key="idx">
            {{ header.text }}
          </div>
          <div class="f-cell" v-if="actions"></div>
        </div>
      </div>
    </div>
    <div class="table-data">
      <div class="f-table">
        <!-- Заголовок таблицы -->
        <div class="f-head-row" style="visibility: hidden;opacity: 0;">
          <div class="f-cell"
               v-for="(header, idx) in headers"
               :key="idx"
               :class="{circle: header.type === 'circle'}"
          >
            <div>{{ header.text }}</div>
          </div>
          <div class="f-cell" v-if="actions">
            <div></div>
          </div>
        </div>

        <!-- Строка в таблице -->
        <div
          v-for="(record, idx) in rows"
          :key="idx"
          class="f-row"
          :class="{ 'row-hover': hoverable.indexOf('row') !== -1 }"
          @click="$emit('onRowClick', record)"
        >
          <!-- Ячейка таблицы -->
          <div class="f-cell"
               v-for="(header, idx) in headers"
               :key="idx"
               :class="{circle: header.type === 'circle'}"
          >
            <template v-if="header.type === 'circle'">
              <div><circle-value :colors="header.colors" :value="recordValue(record, header.value)"></circle-value></div>
            </template>
            <template v-else>
              <div>{{ recordValue(record, header.value) }}</div>
            </template>
          </div>

          <!-- Кнопки действий для строки если они есть -->
          <div class="f-cell f-cell-actions" v-if="actions">
            <div>
              <button
                v-for="(action, idx) in actions"
                class="action-button"
                :key="idx"
                @click="$emit(action.name, record)"
              >
                <e-icon
                  size="14px"
                  color="#fff"
                  :icon="action.icon"
                  v-if="action.icon"
                ></e-icon>
                <div v-if="action.title">{{ action.title }}</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as dom from "@/helpers/dom";
import CircleValue from "./circle.vue";

export default {
  components: {
    CircleValue
  },
  props: {
    headers: {
      type: Array,
      required: true
    },
    getter: {
      type: String
    },
    actions: {
      type: Array,
      required: false,
      default: () => []
    },
    hoverable: {
      default: () => [],
      type: Array,
      required: false
    }
  },
  computed: {
    rows() { return this.$store.getters[this.getter] }
  },
  methods: {
    recordValue(record, value) {
      let r = this.copyObject(record);
      let a = value.split(".");
      try {
        a.map(k => (r = r[k]));
      }
      catch(error) {
        if (process.env.NODE_ENV === "development") {
          // eslint-disable-next-line
          console.warn(
            `Catch error while try to get property: %c${value}%c of object:\n${JSON.stringify(record)}`,
            'font-weight: bold',
            'font-weight: normal'
          );
        }
      }
      return r;
    }
  },
  mounted() {
    let header = this.$el.getElementsByClassName("table-header")[0];
    let table = this.$el.getElementsByClassName("table-data")[0];

    setInterval(() => {
      let ths = dom.selector(this.$el, [".table-header", ".f-cell"]);
      let f = dom.selector(this.$el, [".table-data", ".f-row"]);

      if (f.length > 0) {
        let tds = dom.selector(f[0], [".f-cell"]);
        for (let i = 0; i < ths.length; i++) {
          let w = tds[i].offsetWidth;
          ["width"].forEach(prop => {
            ths[i].style[prop] = `${w}px`;
          });
        }
      }
      let t = dom.selector(this.$el, [".table-data"]);
      let sbw = t[0].offsetWidth - t[0].clientWidth;
      let h = dom.selector(this.$el, [".table-header"]);
      h[0].style["right"] = `${sbw}px`;
    }, 100);

    table.addEventListener("scroll", e => {
      header.scrollLeft = e.target.scrollLeft;
    });
  }
};
</script>
