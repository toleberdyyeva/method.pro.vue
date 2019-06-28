<template>
    <div class="mp_post">
        <div class="mp_image" :style="{ 'background-image': 'url('+ image +')' }" ></div>
        {{ title }}
        <button @click='increaselike()'>
            <img src='~/assets/heart-solid.svg' width="14px" height="auto">            
            {{ likes }}    
        </button>  
    </div>
</template>

<script>
export default {
    props: ['image','title','likes'],
    methods: {
      
    }
}
</script>


<style>
    .mp_post{
        padding: 10px;
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 5px;
        width: 150px;
        display: inline-block;
        margin:10px
        
    }
    .mp_image{
        border-radius: 5px;
        margin-down: 5px;
        height: 150px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    
    
</style>
