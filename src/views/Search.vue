<template>
    <div id="Search">
            <Header/>
        <div id="Conteudo" :style="{ backgroundImage: 'url(' + backgroundimg + ')' }">
                     
            <b-img id="img"
                :src="require('../assets/imgs/logo2.png')"
                fluid
                alt="Responsive image">
            </b-img>

            <HomeSearch backgroundColor="rgba(255, 205, 3, 0.8)" 
                BtnColor="#212529"/>
        </div>
    </div>
</template>

<script>
import {Header, HomeSearch} from '@/components'
export default {
    name: 'Search',
    components:{
        Header,
        HomeSearch
    },
    data(){
        return{
            backgroundimg: require('@/assets/imgs/dj-1.jpg')
        }
    },
    props:{
    }
}
</script>

<style scoped>
    #Conteudo{
        height: auto;
        min-height: 100vh;
        background-size: cover;
        background-repeat: no-repeat;
        text-align: center;
    }
    #img{
        padding: 10px;
        width: 70%;
        height: 65%;
        margin: 180px auto;
    }
</style>