<template>
<v-row>
  <v-col
    cols="12"
    xl="10"
  >
    <v-text-field
      v-model="weaponProperty"
      v-bind="$attrs"
    ></v-text-field>
  </v-col>
</v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PropertyInput extends Vue {
  @Prop() private weaponKey!: string;

  private get weaponProperty(): string {
    return this.$store.state.weaponData.get(this.weaponKey)
  }
  private set weaponProperty(value: string) {
    this.$store.state.weaponData.set(this.weaponKey, value)
  }
}
</script>