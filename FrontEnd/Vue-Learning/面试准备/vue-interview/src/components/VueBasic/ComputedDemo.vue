<template>
    <div>
     
        <p>Num: {{num}}</p>
        <p>Double Number : {{doubleNum}}</p>
        <input v-model="doubleNum1" />
    </div>
</template>

<script>
export default {
    name:"ComputedDemo",
    data(){
        return {
            num:20
        }
    },
    computed:{
        doubleNum(){
            return this.num * 2
        },
        //v-model里面还有get和set
        doubleNum1:{
            get(){
                return this.num * 2 
            },
            set(val){
                this.num = val / 2
            }
        }
    }
}
</script>

<style>

</style>