<template>
<v-row>
  <v-col
    cols="10"
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
  <remove-property :weaponKey="weaponKey" v-if="showRemove"></remove-property>
</v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import RemoveProperty from './RemoveProperty.vue';

@Component({
  components: {
    RemoveProperty
  }
})
export default class PropertySelect extends Vue {
  @Prop() private weaponKey!: string;
  @Prop({default: true}) private showRemove!: boolean;

  private get weaponProperty(): string {
    return this.$store.state.weaponData.get(this.weaponKey)
  }
  private set weaponProperty(value: string) {
    this.$store.dispatch('updateWeaponProperty', [this.weaponKey, value])
  }
}
</script>