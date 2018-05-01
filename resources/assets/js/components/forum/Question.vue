<template>
    <div class="panel panel-default">
        <div class="panel-body">
            <div>
                <div>
                    <b>{{data.user}}</b>
                    <span class="pull-right">{{data.category}}</span>
                    <br>
                    <small style="color: silver">{{data.created_at}}</small>

                </div>
                <h4>
                    <span class="glyphicon glyphicon-question-sign"></span>
                    <router-link :to="/question/+data.path">{{data.title}}</router-link>

                </h4>


            </div>
            <hr>
            {{data.body}}

        </div>
    </div>

</template>

<script>
    export default{
        props:['data']




    }

</script>

<style>

</style>