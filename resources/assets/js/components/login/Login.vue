<template>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <form class="form-signin"  v-on:submit.prevent="login">
                <h2 class="form-signin-heading">Please sign in</h2>
                <div class="form-group">
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input type="email" v-model="form.email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                </div>
                <div class="form-group">
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" v-model="form.password" id="inputPassword" class="form-control" placeholder="Password" required>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me"> Remember me
                        </label>
                    </div>
                </div>

                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
            <div ><br></div>
        </div>

    </div>

</template>

<script>
    export default{
        data(){
           return{
               form:{
                   email:null,
                   password:null,
               }
           }
        },
        methods:{
            login(){
                //alert("this is login")
                axios.post('api/auth/login',this.form).then(res=>console.log(res.data))
                .catch(console.log(error=>error.response.data));

            }
        }

    }

</script>

<style>

</style>