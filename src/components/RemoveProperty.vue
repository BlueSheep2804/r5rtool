<template>
<v-col
  cols="2"
>
  <v-tooltip bottom>
    <template v-slot:activator="{on, attrs}">
      <v-btn
        icon
        v-bind="attrs"
        v-on="on"
        @click="onRemoveProperty"
        class="mt-2"
      >
        <v-icon>mdi-close-circle-outline</v-icon>
      </v-btn>
    </template>
    <span>{{ $t('delete') }}</span>
  </v-tooltip>
</v-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class RemoveProperty extends Vue {
  @Prop() private weaponKey!: string;

  onRemoveProperty(): void {
    const isExceptionValue = this.$store.state.weaponData.delete(this.weaponKey)
    if (!isExceptionValue) {
      this.$delete(this.$store.state.weaponData.dict, this.weaponKey)
    }
  }
}
</script>