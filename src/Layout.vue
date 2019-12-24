<template lang="pug">
  #app
    headerArea
    sidebarArea
    contentArea
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import headerArea from '@/components/Header.vue'
import sidebarArea from '@/components/Sidebar.vue'
import contentArea from '@/components/Content.vue'

@Component({
  name: 'App',
  components: { headerArea, sidebarArea, contentArea }
})
export default class Layout extends Vue {
  notificationCounter: number = 3;
}
</script>
