<template>
    <div class="row">
        <div class="col-md-8">

                <question v-for="question in questions" :key="question.id" :data="question"></question>


        </div>
        <div class="col-ms-4">Category area</div>

    </div>

</template>

<script>
    import Question from './Question'

    export default{
        data(){
            return {
                questions:axios.get('api/question').then(res=>this.questions=res.data.data)
                    .catch(console.log(error=>error.response.data))
            }
        },
        components:{Question}




    }

</script>

<style>

</style>