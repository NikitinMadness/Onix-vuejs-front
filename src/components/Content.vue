<template lang="pug">
     div.main_content
        div.inner_cont
          keep-alive
            router-view
</template>
<script lang="ts">
import {
  Vue, Component, Prop
} from 'vue-property-decorator'
@Component({
  name: 'contentArea'
})
export default class contentArea extends Vue {

}
</script>
