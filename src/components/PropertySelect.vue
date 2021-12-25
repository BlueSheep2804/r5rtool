<template>
<v-row>
  <v-col
    cols="12"
    xl="10"
  >
    <v-select
      v-model="weaponProperty"
      v-bind="$attrs"
    >
      <template v-slot:selection="data">
        {{ $t(data.item.text) }}
      </template>
      <template v-slot:item="data">
        {{ $t(data.item.text) }}
      </template>
    </v-select>
  </v-col>
</v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PropertySelect extends Vue {
  @Prop() private weaponKey!: string;

  private get weaponProperty(): string {
    return this.$store.state.weaponData.get(this.weaponKey)
  }
  private set weaponProperty(value: string) {
    const args: string[] = [this.weaponKey, value]
    this.$store.commit('weaponPropertyUpdate', args)
  }
}
</script>