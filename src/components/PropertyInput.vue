<template>
<v-row>
  <v-col
    cols="12"
    sm="4"
  >
    <v-text-field
      :label="label"
      :placeholder="placeholder"
      :type="type"
      v-model="weaponProperty"
      :disabled="disabled"
    ></v-text-field>
  </v-col>
</v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PropertyInput extends Vue {
  @Prop() private label!: string;
  @Prop({ default: '' }) private placeholder!: string;
  @Prop({ default: 'text' }) private type!: string;
  @Prop() private weaponKey!: string;
  @Prop({ default: false }) private disabled!: boolean;

  private get weaponProperty(): string {
    return this.$store.state.weapon[this.weaponKey]
  }
  private set weaponProperty(value: string) {
    const args: string[] = [this.weaponKey, value]
    this.$store.commit('weaponPropertyUpdate', args)
  }
}
</script>