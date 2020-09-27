<template>
<div class="container" id="carousel">
    <div class="row">
        <div class="col-12"><h2>Do que está à procura?</h2></div>
        <div class="col-12">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <b-carousel
                    id="carousel-1"
                    v-model="slide"
                    :interval="4000"
                    controls
                    indicators
                    background="#ababab"
                    img-width="200"
                    img-height="200"
                    style="text-shadow: 1px 1px 2px #333;"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
                >
                    <div class="carousel-item active">
                        <div class="row">
                            <div class="col-sm-4 div-img">
                                <img src="@/assets/imgs/dj-1.jpg" class="img-fluid" alt imagem="...">
                            </div>

                            <div class="col-sm-4 div-img">
                                <img src="@/assets/imgs/dj-1.jpg" class="img-fluid" alt imagem="...">
                            </div>

                            <div class="col-sm-4 div-img">
                                <img src="@/assets/imgs/dj-1.jpg" class="img-fluid" alt imagem="...">
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-sm-4 div-img">
                                <img src="@/assets/imgs/services.jpg" class="img-fluid" imagem alt="...">
                            </div>

                            <div class="col-sm-4 div-img">
                                <img src="@/assets/imgs/services.jpg" class="img-fluid" imagem alt="...">
                            </div>

                            <div class="col-sm-4 div-img">
                                <img src="@/assets/imgs/services.jpg" class="img-fluid" imagem alt="...">
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-sm-4 div-img">
                                <img src="@/assets/imgs/profile-1.jpg" class="img-fluid imagem" alt="...">
                            </div>

                            <div class="col-sm-4 div-img">
                                <img src="@/assets/imgs/profile-1.jpg" class="img-fluid imagem" alt="...">
                            </div>

                            <div class="col-sm-4 div-img">
                                <img src="@/assets/imgs/profile-1.jpg" class="img-fluid imagem" alt="...">
                            </div>
                        </div>
                    </div>
                    
                </b-carousel>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        console.log(slide)
        this.sliding = true
      },
      onSlideEnd(slide) {
        console.log(slide)
        this.sliding = false
      }
    }
}
</script>

<style scoped>
    #carousel{
        margin: 30px auto;
    }
    .div-img{
        height: 300px;
    }
    .imagem{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
</style>