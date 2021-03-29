<template>
    <div>
        <nav
            id="myNavigation"
            class="fixed-top navbar navbar-expand-md navbar-light bg-light"
            aria-label="breadscrumb"
        >
            <a class="navbar-brand js-scroll-trigger" :href="`/`">
                Illucloud
                <!-- <img
                    class="navbar__brand"
                    src="@/assets/logo-letter-black.png"
                    alt="logo"
                /> -->
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li>
                        <form class="form-inline">
                            <input
                                class="form-control mr-sm-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <router-link
                                class="btn btn-outline-success my-2 my-sm-0"
                                :to="'/search'"
                                tag="button"
                                :active-class="'active'"
                            >
                                Search
                            </router-link>
                        </form>
                    </li>
                    <li>
                        <div class="dropdown">
                            <button
                                class="btn dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                個人大頭貼
                            </button>
                            <div
                                class="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <router-link
                                    class="dropdown-item"
                                    :to="'/user/ian'"
                                    :active-class="'active'"
                                >
                                    編輯個人資料
                                </router-link>
                                <router-link
                                    class="dropdown-item"
                                    :to="'/subscription/plans'"
                                    :active-class="'active'"
                                >
                                    訂閱方案
                                </router-link>
                                <router-link
                                    class="dropdown-item"
                                    :to="'/star/ian'"
                                    :active-class="'active'"
                                >
                                    個人頁面
                                </router-link>
                                <router-link class="dropdown-item" :to="'/'">
                                    登出
                                </router-link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
import $ from "jquery";
export default {
    data: () => ({
        currentRoutes: [],
        isLightBoxOpen: false,
    }),
    props: {
        routes: {
            type: Array,
        },
    },
    mounted() {
        this.toggleClickOutside(true)
    },
    beforeDestroy() {
        this.toggleClickOutside(false)
    },
    methods: {
        collapseNavbar() {
            $('.navbar-collapse').collapse('hide');
        },
        toggleClickOutside(isOn) {
            const nuxtElement = document.getElementById('__nuxt')
            if (isOn) {
                nuxtElement.addEventListener('click', this.handleClickoutSide)
            } else {
                nuxtElement.removeEventListener('click', this.handleClickoutSide)
            }
        },
        handleClickoutSide(event) {
            const clickedTarget = event.target
            const navigation = document.getElementById('myNavigation')
            if (!navigation.contains(clickedTarget)) {
                $('.navbar-collapse').collapse('hide');
            }
        },
    }
};
</script>
<style lang="scss" scoped>
#myNavigation {
    opacity: 0.9;
    .navigation__brItem {
        color: black;
        display: block;
        padding: 0.5rem;
        cursor: default;
    }
    .myNavigation__aboutMe {
        overflow: hidden;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        .aboutMe__avatar {
            border-radius: 50%;
            width: 44px;
        }
    }
}
.navbar {
    .navbar__brand {
        width: 40px;
    }
    .navbar-brand {
        font-size: 24px;
    }
}

@media screen and (min-width: 768px) {
    #myNavigation {
        .myNavigation__aboutMe {
            position: absolute;
            right: 1rem;
            display: flex;
            justify-content: space-between;
            padding: 0;
            .aboutMe__description {
                display: none;
            }
        }
    }
}
</style>
