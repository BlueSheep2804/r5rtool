<template>
<v-row>
  <v-col
    cols="12"
    xl="10"
  >
    <v-checkbox
      v-model="weaponProperty"
      v-bind="$attrs"
    ></v-checkbox>
  </v-col>
</v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PropertyInput extends Vue {
  @Prop() private weaponKey!: string;

  private get weaponProperty(): boolean {
    if (this.$store.state.weaponData.get(this.weaponKey) == '1') {
      return true
    } else {
      return false
    }
  }
  private set weaponProperty(value: boolean) {
    this.$store.state.weaponData.set(this.weaponKey, value ? '1' : '0')
  }
}
</script>