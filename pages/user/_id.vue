<template>
    <div class="container mt-5">
        <div class="userInfo__form m-auto">
            <div class="text-center mb-4">
                <img
                    class="mb-4"
                    src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                    alt=""
                    width="72"
                    height="72"
                />
                <h1 class="h3 mb-3 font-weight-normal">朱老闆和他的大頭貼</h1>
            </div>
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm"
                        >帳號</span
                    >
                </div>
                <input
                    type="text"
                    class="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                />
            </div>
            <div class="input-group input-group-sm mb-3">
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
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm"
                        >常用電子郵件</span
                    >
                </div>
                <input
                    type="text"
                    class="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                />
            </div>
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm"
                        >收款方式</span
                    >
                </div>
                <input
                    type="text"
                    class="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                />
            </div>
            <div class="row justify-content-center mt-5">
                <router-link
                    class="btn btn-primary"
                    :to="'/subscription/invoice'"
                    :active-class="'active'"
                >
                    儲存
                </router-link>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.userInfo__form {
    width: 420px;
}
</style>