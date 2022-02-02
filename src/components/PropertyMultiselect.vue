<template>
<v-row>
  <v-col
    cols="12"
    xl="10"
  >
    <v-select
      v-model="weaponProperty"
      :items="items"
      multiple
      chips
      @change="(selection) => changeSelection(selection)"
      v-bind="$attrs"
    >
      <template v-slot:selection="data">
        <v-chip>
          <span>{{ $t(data.item.text) }}</span>
        </v-chip>
      </template>
      <template v-slot:item="data">
        <v-simple-checkbox
          readonly
          v-bind:value="selected[data.item.value]"
        ></v-simple-checkbox>
        {{ $t(data.item.text) }}
      </template>
    </v-select>
  </v-col>
</v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

interface Item {
  [key: string]: string
  text: string;
  value: string;
}

@Component
export default class PropertyMultiselect extends Vue {
  @Prop() private weaponKey!: string;
  @Prop() private items!: Array<Item>;

  private previousSelection: string[] = []
  private selected: Record<string, boolean> = {}

  private get weaponProperty(): string[] {
    return this.$store.state.weaponData.get(this.weaponKey)
  }
  private set weaponProperty(value: string[]) {
    this.$store.state.weaponData.set(this.weaponKey, value)
  }

  created() {
    for (const v of this.items) {
      this.selected[v.value] = false
    }
    console.log(this.selected)
  }

  changeSelection(selection: string[]): void {
    console.log(`previous: ${this.previousSelection}`)

    let selected = ''
    let state = null
    if (this.previousSelection.length < selection.length) {
      selected = selection.filter(x => !this.previousSelection.includes(x))[0]
      state = true
    } else if (this.previousSelection.length > selection.length) {
      selected = this.previousSelection.filter(x => !selection.includes(x))[0]
      state = false
    }

    console.log(`selected: ${selected}`)

    if (state !== null) {
      for (const v of this.items) {
        if (selected === v.value) {
          this.selected[v.value] = state
          console.log(`this.selected[${v.value}] = ${this.selected[v.value]}`)
        }
      }
    }

    console.log(`selection: ${selection}`)
    this.previousSelection = selection
  }
}
</script>