<template>
<v-container fluid class="overflow-y-hidden" style="max-height: 89vh;">
  <v-card class="overflow-y-visible" style="max-height: 100vh">
    <v-tabs v-model="model" grow>
      <v-tab href="#tab-1">Tab 1</v-tab>
      <v-tab href="#tab-2">Tab 2</v-tab>
      <v-tab href="#tab-3">Tab 3</v-tab>
    </v-tabs>

    <v-tabs-items v-model="model">
      <v-tab-item value="tab-1" class="ma-4">
        <v-row no-gutters>
          <v-col cols="12">
            <v-text-field label="yay"></v-text-field>
            <v-text-field label="yay"></v-text-field>
            <v-text-field label="yay"></v-text-field>
            <v-text-field label="yay"></v-text-field>
            <v-text-field label="yay"></v-text-field>
            <v-text-field label="yay"></v-text-field>
            <v-text-field label="yay"></v-text-field>
            <v-text-field label="yay"></v-text-field>
            <v-text-field label="yay"></v-text-field>
          </v-col>
        </v-row>
      </v-tab-item>
      <v-tab-item value="tab-2" class="ma-4">
        Tab 2
      </v-tab-item>
      <v-tab-item value="tab-3" class="ma-4">
        Tab 3
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import PropertyCheckbox from '../components/PropertyCheckbox.vue'
import PropertyInput from '../components/PropertyInput.vue'
import PropertySelect from '../components/PropertySelect.vue'

export default Vue.extend({
  name: 'TabWeapons',
  components: {
    //PropertyCheckbox,
    //PropertyInput,
    //PropertySelect,
  },
  data: () => ({
    model: 'tab-1'
  })
})
</script>