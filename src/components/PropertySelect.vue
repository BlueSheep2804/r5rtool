<template>
<v-row>
  <v-col
    cols="12"
    sm="4"
  >
    <v-select
      :label="label"
      :items="items"
      v-model="weaponProperty"
    ></v-select>
  </v-col>
</v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PropertySelect extends Vue {
  @Prop() private label!: string;
  @Prop() private items!: string;
  @Prop() private weaponKey!: string;

  private get weaponProperty(): string {
    return this.$store.state.weapon[this.weaponKey]
  }
  private set weaponProperty(value: string) {
    const args: string[] = [this.weaponKey, value]
    this.$store.commit('weaponPropertyUpdate', args)
  }
}
</script>