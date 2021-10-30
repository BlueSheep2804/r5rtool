<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-title>R5RTool</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click.stop="dialog = true">
            <v-list-item-icon>
              <v-icon>{{ menuitem[0].icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t(menuitem[0].name) }}</v-list-item-title>
          </v-list-item>
          <v-list-item
            v-for="i in menuitem.slice(1)"
            :key="i.name"
            :href="i.link"
            target="_blank"
          >
            <v-list-item-icon>
              <v-icon>{{ i.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t(i.name) }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-card-title>
            {{ $t('appbar.select_lang') }}
          </v-card-title>

          <v-card-actions>
            <v-select
              :items="langs"
              v-model="$i18n.locale"
              @change="dialog = false"
            >
              <template v-slot:selection="data">
                {{ $t(data.item.text) }}
              </template>
              <template v-slot:item="data">
                {{ $t(data.item.text) }}
              </template>
            </v-select>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    dialog: false,
    langs: [
      { text: 'appbar.langs.ja', value: 'ja' },
      { text: 'appbar.langs.en', value: 'en' },
    ],
    menuitem: [
      {
        icon: 'mdi-translate',
        name: 'appbar.lang',
        link: '__dialog',
      },
      {
        icon: 'mdi-update',
        name: 'appbar.changelog',
        link: 'https://github.com/BlueSheep2804/r5rtool/blob/master/Changelog.md',
      },
      {
        icon: 'mdi-github',
        name: 'appbar.source_code',
        link: 'https://github.com/BlueSheep2804/r5rtool',
      },
      {
        icon: 'mdi-twitter',
        name: 'appbar.twitter_author',
        link: 'https://twitter.com/BlueSheep2804',
      },
    ],
  }),
});
</script>
