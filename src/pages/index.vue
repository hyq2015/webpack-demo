<template>
    <div>
        <p>this is home page</p>
        <p>{{fullName}}</p>
        <input type="text" v-model="firstName">
        <input type="text" v-model="lastName">
        <p>this is test</p>
        <router-view/>
    </div>

</template>
<script>
    export default{
        name:"homePage",
        data(){
            return{
                firstName:"ricky",
                lastName:"huang"
            }
        },
        computed:{
            fullName:function () {
                console.log(11111)
                return this.firstName+this.lastName
            }
        }
    }
</script>
<style>

</style>