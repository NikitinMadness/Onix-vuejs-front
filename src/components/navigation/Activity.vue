<template lang="pug">
  div
    h3.tdy today
    p.usr_cmt Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users
    p.comment_1 Emilee Simchenko commented on Account for teams and personal in bottom style
    div.post2
      p.post_2 During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes
    div.upload
      p.upload_post Darika Samak uploaded 4 files on An option to search in current projects or in all projects
        div.uplimgs
          p.la
          p.ny
          p.lublin
          p.norway
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
    @Component({
      name: 'Activity'
    })
export default class Activity extends Vue {

}
</script>

    <style lang="css">
      .uplimgs>p:hover{
        cursor:pointer;
        transform: scale(1.2);
      }
    </style>
