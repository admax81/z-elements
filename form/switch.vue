<template>
    <div class="e-form switch" :class="{ disabled: disabled }">
        <label :class="{ checked: value }">
            <span class="switch">
                <input type="checkbox" v-model="checked" @change="setChecked"/>
                <span class="slider"></span>
            </span>
            <span class="label">{{label}}</span>
        </label>
    </div>

</template>

<script>
    export default {
        props: {
            value: {
                default: true,
                type: Boolean
            },
            label: {
                default: "",
                type: String
            },
            disabled: {
                default: false,
                type: Boolean
            }
        },
        data() {
            return {
                checked: this.value
            }
        },
        methods: {
            setChecked(evt) {
                this.$emit('set', evt.target.checked);
            }
        }
    }
</script>
