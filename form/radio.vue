<template>
    <div class="e-form radio" :class="{ disabled: disabled }">
        <div class="header">{{label}}</div>
        <label v-for="value in values"
               :key="value"
               :class="{ checked: selected.toLowerCase() === value.toLowerCase(), inline: inline }"
        >
            <input
                   type="radio"
                   :name="name"
                   :value="value"
                   :checked="selected.toLowerCase() === value.toLowerCase()"
                   @change="onChange"
            />
            <span class="checkmark"></span>
            {{value}}
        </label>
    </div>
</template>

<script>
    export default {
        props: {
            label: {
                "default": "",
                "type": String
            },
            name: {
                "default": "radio",
                "type": String
            },
            values: {
                "default": [],
                "type": Array
            },
            checked: {
                "default": null,
                "type": String
            },
            disabled: {
                "default": false,
                "type": Boolean
            },
            inline: {
                "default": false,
                "type": Boolean
            }
        },
        data() {
            return {
                selected: this.checked
            }
        },
        methods: {
            onChange(evt) {
                this.selected = evt.target.value;
                this.$emit('set', evt.target.value);
            }
        }
    }
</script>