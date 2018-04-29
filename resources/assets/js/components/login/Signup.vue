<template>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <form class="form-signin"  v-on:submit.prevent="signup">
                <h2 class="form-signin-heading">Sign UP</h2>
                <div class="form-group">
                    <label for="inputName" class="sr-only">Email address</label>
                    <input type="text" v-model="form.name" id="inputName" class="form-control" placeholder="Your Name" required autofocus>
                </div>
                <div class="form-group">
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input type="email" v-model="form.email" id="inputEmail" class="form-control" placeholder="Email address" required>
                </div>
                <div class="form-group">
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" v-model="form.password" id="inputPassword" class="form-control" placeholder="Password" required>
                </div>
                <div class="form-group">
                    <label for="inputConPassword" class="sr-only">Password</label>
                    <input type="password" v-model="form.conPassword" id="inputConPassword" class="form-control" placeholder="Confirm Password" required>
                </div>

                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign UP</button>
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
                    name:null,
                    email:null,
                    password:null,
                    conPassword:null,
                }
            }
        },
        methods:{
            signup(){
                axios.post('api/auth/signup',this.form)
                    .then(res=>{
                        User.resAfterLogin(res),
                        this.$router.push({name:'xforum'})
                    })
                    .catch(console.log(error=>error.response.data));

            }
        }

    }

</script>

<style>

</style>