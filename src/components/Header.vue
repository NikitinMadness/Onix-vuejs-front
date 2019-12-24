 <template lang="pug">
  div.content
        div.inner_content
            div.wrapper
              h1.tittle_text Website Redesign
                button.toggle_btn
            div.humns
              p.first_human
              p.second_human
              p.thirthd_human
            div.btn
              button.shr Share
              button.cht Chat
        nav
            div.main_nav
              .nav_pages#tasksPage
                router-link.link(to='/tasks') Tasks
              .nav_pages#kanbanPage
                router-link.link(to='/kanban') Kanban
              .nav_pages#activityPage
                router-link.link(to='/activity') Activity
              .nav_pages#calendarPage
                router-link.link(to='/calendar') Calendar
              .nav_pages#filesPage
                router-link.link(to='/files') Files
                //example
 </template>

<script lang="ts">

</script>

 <style lang="css">

.shr{
  cursor:pointer;
}

.cht
{
  cursor:pointer;
}
.toggle_btn{
  cursor:pointer;
}

.nav_pages>a {
  color: #7a7a7a;
  text-align: center;
  padding-bottom: 12px;
  font-size: 1.2vw;
  text-decoration: none;
  height: 3vh;
  display:flex;
  list-style:none;
  padding-right:3px;
  cursor: pointer;
  }
    .nav_pages .router-link-active {
        border-bottom: 2px solid;
        border-color: #ffc200;
        color: #131313; }

@media screen and (max-width: 1024px){
.nav_pages>a {
  color: #7a7a7a;
  text-align: center;
  padding-bottom: 12px;
  font-size: 2vw;
  text-decoration: none;
  height: 3vh;
  display:flex;
  list-style:none;
  padding-right:3px;
  }
.nav_pages--active{
    text-align: center;
    padding-bottom: 12px;
    height: 3vh;
    border-bottom: 2px solid;
    border-color: #ffc200;
    color: #131313; }
        .nav_pages .router-link-active{
            border-bottom: 2px solid;
            border-color: #ffc200;
            padding-right:4px;
            padding-left:4px;
            color: #131313;
    }
}
@media screen and (min-width: 630px) and (max-width: 769px){
.nav_pages>a{
  color: #7a7a7a;
  text-align: center;
  padding-bottom: 12px;
  font-size: 2vw;
  text-decoration: none;
  height: 1.99vh;
  display:flex;
  list-style:none;
  padding-right:3px;
  }
.nav_pages--active {
    padding-bottom: 12px;
    height: 1.9vh; }
    .nav_pages .router-link-active {
      border-bottom: 2px solid;
      border-color: #ffc200;
      color: #131313; }
}
@media screen and (min-width: 300px) and (max-width: 426px){
  .nav_pages>a {
    color: #7a7a7a;
    text-align: center;
    padding-bottom: 12px;
    font-size: 5vw;
    text-decoration: none;
    height: 3vh; }
    .nav_pages .router-link-active {
      border-bottom: 2px solid;
      border-color: #ffc200;
      color: white; }
}
 </style>
