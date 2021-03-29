<template>
    <div>
        <h3 class="text-center">發票資訊</h3>
        <div class="row justify-content-center">
            <div class="input-group input-group-sm mb-3 col-12 col-md-6">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm"
                        >暱稱</span
                    >
                </div>
                <input
                    type="text"
                    class="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                />
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-12 col-md-6">
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                    />
                    <label class="form-check-label" for="inlineCheckbox1"
                        >個人</label
                    >
                </div>
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                    />
                    <label class="form-check-label" for="inlineCheckbox2"
                        >公司</label
                    >
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-12 col-md-6">
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                    />
                    <label class="form-check-label" for="inlineCheckbox1"
                        >電子發票</label
                    >
                </div>
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                    />
                    <label class="form-check-label" for="inlineCheckbox2"
                        >捐贈發票</label
                    >
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-12 col-md-6">
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="radio"
                        id="inlineCheckbox1"
                        value="option1"
                    />
                    <label class="form-check-label" for="inlineCheckbox1"
                        >手機條碼</label
                    >
                </div>
                <div class="form-check form-check-inline">
                    <input
                        class="form-check-input"
                        type="radio"
                        id="inlineCheckbox2"
                        value="option2"
                    />
                    <label class="form-check-label" for="inlineCheckbox2"
                        >自然人憑證</label
                    >
                </div>
            </div>
        </div>
        <div class="row justify-content-center mt-5">
            <router-link
                class="btn btn-primary mx-2"
                :to="'/subscription/plans'"
                :active-class="'active'"
            >
                上一步
            </router-link>
            <router-link
                class="btn btn-primary mx-2"
                :to="'/subscription/result'"
                :active-class="'active'"
            >
                下一步
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    components: {
        Card: () => import('./Card.vue')
    },
}
</script>