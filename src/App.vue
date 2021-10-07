<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-title>R5RTool</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-menu
        bottom
        left
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="i in menuitem"
            v-bind:key="i.link"
            v-bind:href="i.link"
            target="_blank"
          >
            <v-list-item-icon>
              <v-icon>{{ i.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ i.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    menuitem: [
      {
        icon: 'mdi-github',
        name: 'ソースコード',
        link: 'https://github.com/BlueSheep2804/r5rtool'
      },
      {
        icon: 'mdi-twitter',
        name: '作者のTwitter',
        link: 'https://twitter.com/BlueSheep2804'
      }
    ]
  }),
});
</script>
