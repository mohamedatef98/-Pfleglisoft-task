<template>
    <div>
        <div class="img-container">
            <img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" alt="">
        </div>
        <h1>{{card.percentage}}</h1>
        <h4>{{card.title}}</h4>
        <p v-for="(paragraph, i) in card.paragraphs" :key="i">{{paragraph.title}} {{paragraph.value}}</p>
    </div>

</template>

<script>
export default {
    name: 'card-component',
    props: ['card']
};
</script>

<style scoped>
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .img-container img{
        width: 100%;
    }

    h1, h4{
        margin: 0.5rem 0;
    }
    p{
        margin: 0;
    }
</style>