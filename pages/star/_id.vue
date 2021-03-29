<template>
    <div>
        <div class="px-3">
            <div class="media text-muted pt-3">
                <img
                    class="mb-4"
                    src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                    alt=""
                    width="72"
                    height="72"
                />
                <!-- Button trigger modal -->
                <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                >
                    建立貼文
                </button>

                <!-- Modal -->
                <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div
                        class="modal-dialog modal-dialog-scrollable"
                        role="document"
                    >
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">
                                    模仿FB建立貼文
                                </h5>
                                <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <textarea class="w-100"></textarea>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    取消
                                </button>
                                <button type="button" class="btn btn-primary">
                                    發布
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading">朱老闆的財傷桌遊</h1>
                <p class="lead text-muted">模仿Pinkoi超大的畫布，繪師應該會很愛？</p>
            </div>
        </section>
        <div class="container">
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
import $ from 'jquery'
export default {
    components: {
        Carousel: () => import('@/components/Carousel.vue'),
        PostPreview: () => import('@/components/PostPreview.vue')
    },
    mounted() {
        // $('#myModal').on('shown.bs.modal', function () {
        //     $('#myInput').trigger('focus')
        // })
    }
}
</script>