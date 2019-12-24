<template lang="pug">
    div.inner_header
        p.logoimg
        p.pname Projectus
        p.search
        div.log_in
            p.acc_pto
            p.user_name {{user.userName}}
            p.user_level {{user.userLevel}}
            a.icon(href="#") ...
        div.side_nav
            div.CMT(@click="taskChangeCounter()")
                p.cnt_com_tks {{this.closeTasksNum}}
                p.cmp_tsk Completed Tasks
            div.OPT(@click="openTasksArea()")
                p.cnt_opn_tsk {{this.openTasksNum}}
                p.opn_tsk Open Tasks
            a(class='side_menu_nav', href='#') Menu
            a(class='side_home_nav', href='#') Home
            a(class='side_tsk_nav', href='#') My Tasks
            a(class='side_ntfc_nav', href='#') Notifications
                p.ntfc {{ this.notification}}
</template>
<script lang="ts">
import {
  Vue, Component, Prop
} from 'vue-property-decorator'

@Component({
  name: 'sidebarArea'
})

export default class sidebarArea extends Vue {
    @Prop(Number) openTasksNum: number;
    @Prop(Number) notification!: number;
    user = {
      userName: 'John Taylor',
      userLevel: 'HR Manager'
    };
    closeTasksNum: number = 372;
    openTasksNum: number = 3;
    notification: number = 3;
    taskChangeCounter (): void {
      if (this.openTasksNum > 0) {
        this.$router.push('/Tasks')
        if (confirm('Are you sure you want to change the number of tasks?')) {
          this.openTasksNum--
          this.closeTasksNum++
        }
      } else {
        alert('You have no tasks to close')
      }
    }
    openTasksArea (): void {
      if (this.openTasksNum === 0) {
        alert('No more open tasks')
        return
      }
      this.$router.push('/Tasks')
    }
}
</script>

<style lang="css">
    .CMT{
        cursor: pointer;
    }
    .OPT{
        cursor: pointer;
    }
    .cnt_opn_tsk:hover{
        cursor:pointer;
        color: #ffc200;
    }
    .cnt_com_tks:hover{
        cursor:pointer;
        color: #ffc200;
    }
    .search{
        cursor:pointer;
    }
</style>
