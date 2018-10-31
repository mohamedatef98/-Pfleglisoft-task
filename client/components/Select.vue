<template>
        <v-select
          :items="items"
          :value="items[0]"
        ></v-select>
</template>

<script>
export default {
    name: 'select-component',
    data(){
        return {
            items : ['Company']
        }
    }
    
}
</script>

<style scoped>

</style>
