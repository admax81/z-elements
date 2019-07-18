<template>
    <div class="e-tabs">
        <header class="tabs-header">
            <ul>
                <li
                        v-for="tab in tabs"
                        :key="'tab-header-' + tab"
                        :class="{ active: activeTab === tab }"
                        @click="switchTab(tab)"
                >
                    <slot :name="tabHeadSlotName(tab)">{{tab}}</slot>
                </li>
            </ul>
        </header>
        <main>
            <div class="tab-panel">
                <slot :name="tabPanelSlotName"></slot>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        props: {
            tabs: {
                "default": [],
                type: Array
            },
            initialTab: {
                "default": "",
                type: String
            }
        },
        data() {
            return {
                activeTab: this.initialTab
            }
        },
        computed: {
            tabPanelSlotName() {
                return `tab-panel-${this.activeTab}`;
            }
        },
        methods: {
            tabHeadSlotName(tab) {
                return `tab-head-${tab}`
            },
            switchTab(tab) {
                this.activeTab = tab;
            }
        }
    }
</script>
