<template>
<v-row>
  <v-col
    cols="10"
  >
    <v-checkbox
      v-model="weaponProperty"
      v-bind="$attrs"
    ></v-checkbox>
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
export default class PropertyInput extends Vue {
  @Prop() private weaponKey!: string;
  @Prop({default: true}) private showRemove!: boolean;

  private get weaponProperty(): boolean {
    if (this.$store.state.weaponData.get(this.weaponKey) == '1') {
      return true
    } else {
      return false
    }
  }
  private set weaponProperty(value: boolean) {
    this.$store.dispatch('updateWeaponProperty', [this.weaponKey, value ? '1' : '0'])
  }
}
</script>