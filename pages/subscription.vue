<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <ul class="nav">
                <li class="nav-item">
                    <router-link
                        class="nav-link"
                        :to="'/subscription/plans'"
                        :active-class="'active'"
                    >
                        選方案與付款方式
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                        class="nav-link"
                        :to="'/subscription/invoice'"
                        :active-class="'active'"
                    >
                        發票與資料填寫
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                        class="nav-link"
                        :to="'/subscription/result'"
                        :active-class="'active'"
                    >
                        交易結果
                    </router-link>
                </li>
            </ul>
        </div>
        <hr />
        <NuxtChild />
    </div>
</template>
<script>
export default {
    components: {
        PostPreview: () => import('@/components/PostPreview.vue'),
    },
}
</script>