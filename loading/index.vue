<template>
    <div class="loading-wrap" :class="{'active': $store.state.loading.show }">
        <div class="loading">
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            <div style="font-size: 130%;color: #999999">
                Loading.. Please wait..
            </div>
            <div style="padding-top: 1em;">
                {{ $store.state.loading.message }}
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Loading",
    data () {
      return {
      }
    }
  }
</script>
