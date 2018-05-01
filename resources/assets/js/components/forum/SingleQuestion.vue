<template>
    <div>
        <h1>
            <span class="glyphicon glyphicon-question-sign"></span>
            {{question.title}}

        </h1>

        <blockquote>
            <b>{{question.user}}</b>
            <span class="pull-right">{{question.category}}</span>
            <br>
            <small style="color: silver">{{question.created_at}}</small>
        </blockquote>

        <hr>
        {{question.body}}

    </div>
</template>

<script>

    export default{

        data(){
            return{
                question:axios.get('api/question/'+this.$route.params.slug)
                    .then(res=>this.question=res.data.data)
                    .catch(console.log(error=>error.response.data)),
            }
        }




    }

</script>

<style>

</style>