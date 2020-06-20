<template>
    <div>
        <p>{{name}}</p>
        <p>{{info}}</p>

    </div>
</template>

<script>
export default {
    name:"WatchDemo",
    data(){
        return {
            name:"名字",
            info:{
                city:"海南"
            }
        }
    },
    watch:{
        name(oldVal,val){
            console.log("name : "+ oldVal + " " + val) //值类型可以拿到oldValue
        },
        info:{
            handler(oldVal,val){
                console.log("info" + oldVal + " " + val) //引用类型拿不到oldValue
            },
            deep:true
        }
    }
}
</script>

<style>

</style>