<template>
    <div>
        <h3 class="text-center">請選擇方案</h3>
        <div class="row justify-content-center">
            <div class="col-md-3">
                <Card></Card>
            </div>
            <div class="col-md-3">
                <Card></Card>
            </div>
        </div>
        <h3 class="text-center mt-5">請選擇付款方式</h3>
        <div class="row justify-content-center">
            <div class="col-6">
                <ul class="list-group">
                    <li class="list-group-item">信用卡付款</li>
                    <li class="list-group-item">Paypal付款</li>
                </ul>
            </div>
        </div>
        <div class="row justify-content-center mt-5">
            <router-link
                class="btn btn-primary"
                :to="'/subscription/invoice'"
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