<template>
    <div class="container mt-5">
        <!-- <div> -->
        <Carousel></Carousel>
        <hr />
        <div class="">
            <div class="row mb-2">
                <div
                    v-for="(number, index) in 24"
                    :key="index"
                    class="col-md-4"
                >
                    <PostPreview></PostPreview>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        PostPreview: () => import('@/components/PostPreview.vue'),
        Carousel: () => import('@/components/Carousel.vue')
    }
}
</script>
