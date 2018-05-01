<template>
    <div class="header clearfix">
        <nav>
            <ul class="nav nav-pills pull-right">
                <li role="presentation" v-for="item in items" v-if="item.show">
                    <router-link :to="item.to">{{item.title}}</router-link>
                </li>
                <li v-if="isLoggedIn">
                    <button class="btn navbar-btn" v-on:click="logOut()" >Logout</button>
                </li>



            </ul>
        </nav>
        <h3 class="text-muted">xForum</h3>
    </div>
</template>

<script>
    import User from '../helpers/User.js'
    export default{
        data(){
            return {
               items:[
                   {title:'Home',to:'/',show:true},
                   {title:'Forum',to:'/xforum',show:true},
                   {title:'Ask Question',to:'/ask',show:User.loggedIn()},
                   {title:'Category',to:'/category',show:User.loggedIn()},
                   {title:'Login',to:'/login',show:!User.loggedIn()},
                   {title:'Signup',to:'/signup',show:!User.loggedIn()},

               ],
                isLoggedIn:User.loggedIn(),
            }
        },
        created(){
           EventBus.$on('logout',()=>{
              User.logOut();
           });
        },
        methods:{
            logOut(){
                User.logOut();
            }
        }

    }
</script>

<style>

</style>