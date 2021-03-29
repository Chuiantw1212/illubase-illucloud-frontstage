<template>
    <div class="container pt-5">
        <div class="row">
            <!-- <form class="form-inline"> -->
            <div class="col">
                <h2>模仿Vocus大搜尋</h2>
                <input
                    class="form-control mr-sm-2 w-100"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="col-3">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01"
                            >篩選條件</label
                        >
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                        <option selected>請選擇</option>
                        <option value="1">電繪</option>
                        <option value="2">手繪</option>
                        <option value="3">腳繪</option>
                    </select>
                </div>
            </div>
            <div class="col-3">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01"
                            >篩選條件</label
                        >
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                        <option selected>請選擇</option>
                        <option value="1">美式</option>
                        <option value="2">日式</option>
                        <option value="3">歐式</option>
                    </select>
                </div>
            </div>
            <div class="col-3">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01"
                            >篩選條件</label
                        >
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                        <option selected>請選擇</option>
                        <option value="1">電繪</option>
                        <option value="2">手繪</option>
                        <option value="3">腳繪</option>
                    </select>
                </div>
            </div>
            <div class="col-3">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01"
                            >篩選條件</label
                        >
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                        <option selected>請選擇</option>
                        <option value="1">美式</option>
                        <option value="2">日式</option>
                        <option value="3">歐式</option>
                    </select>
                </div>
            </div>
        </div>
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
        PostPreview: () => import('@/components/PostPreview.vue')
    }
}
</script>
<style lang="scss" scoped>
</style>