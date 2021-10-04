<template>
<v-row>
  <v-col
    cols="12"
    sm="4"
  >
    <v-checkbox
      :label="label"
      v-model="weaponProperty"
      :disabled="disabled"
    ></v-checkbox>
  </v-col>
</v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PropertyInput extends Vue {
  @Prop() private label!: string;
  @Prop() private weaponKey!: string;
  @Prop({ default: false }) private disabled!: boolean;

  private get weaponProperty(): boolean {
    if (this.$store.state.weapon[this.weaponKey] == '1') {
      return true
    } else {
      return false
    }
  }
  private set weaponProperty(value: boolean) {
    let convertValue = '0'
    if (value) {
      convertValue = '1'
    }
    const args: string[] = [this.weaponKey, convertValue]
    this.$store.commit('weaponPropertyUpdate', args)
  }
}
</script>