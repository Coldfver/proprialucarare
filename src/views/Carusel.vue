<template>
    <div >
        <VueSlickCarousel
                v-bind="slickOptions"
                v-if="carousel.length"
        >

            <div v-for="p in carousel" :key="p.id">
                <img :src="p.thumbnailUrl" >
            </div>

        </VueSlickCarousel>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    export default {
        props: ['carousel'],
        data(){
            return{
                item:[],
                slickOptions: {
                    "infinite": false,
                    "speed": 500,
                    "slidesToShow": 4,
                    "slidesToScroll": 4,
                    "initialSlide": 0,
                    "responsive": [
                        {
                            "breakpoint": 1024,
                            "settings": {
                                "slidesToShow": 3,
                                "slidesToScroll": 3,
                                "infinite": true,
                            }
                        },
                        {
                            "breakpoint": 600,
                            "settings": {
                                "slidesToShow": 2,
                                "slidesToScroll": 2,
                                "initialSlide": 2
                            }
                        },
                        {
                            "breakpoint": 480,
                            "settings": {
                                "slidesToShow": 1,
                                "slidesToScroll": 1
                            }
                        }
                    ]
                }
            }
        },
        components: { VueSlickCarousel },


    }
</script>

<style>
    button.slick-prev:before, button.slick-next:before {
        color: black !important;
    }
</style>
