<template>
    <div class="main">
        <header>
            <span class="search"> <strong>Best</strong>Search </span>
            <div v-if="isSearch" class="header_search">
                <div class="input_bar">
                    <v-text-field
                        v-model="searchContent"
                        variant="outlined"
                        single-line
                        dense
                        placeholder="Search for new products in 961K stores"
                    ></v-text-field>
                </div>
                <v-btn variant="outlined">
                    <v-icon> mdi-magnify </v-icon>
                </v-btn>
            </div>
        </header>
        <div class="body_bar">
            <router-view v-if="isSearch"></router-view>
            <div v-else>
                <h2>Search Trends</h2>
                <div class="search_input">
                    <div class="input_bar">
                        <v-text-field
                            v-model="searchContent"
                            variant="outlined"
                            single-line
                            dense
                            placeholder="Search for new products in 961K stores"
                        ></v-text-field>
                    </div>
                    <v-btn variant="outlined" @click="search">
                        <v-icon> mdi-magnify </v-icon>
                    </v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { watch, ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    const { params } = useRoute();
    const searchContent = ref('');
    const router = useRouter();
    const isSearch = ref(params.value);
    watch(
        () => router.currentRoute.value,
        (count, prevCount) => {
            console.log(count, prevCount);
            isSearch.value = count.params.value;
        }
    );
    // router.beforeEach((to, form, next) => {
    //     console.log(to, form, next);
    //     next();
    // });
    const search = () => {
        router.push(`/search/${searchContent.value}`);
    };
</script>

<style lang="less" scoped>
    .main {
        width: 100vw;
        height: 100vh;
        background-color: #f9f6e9;
    }
    header {
        height: 60px;
        border-bottom: 1px solid #ccc;
        text-align: left;
        display: flex;
        align-items: center;
        .search {
            line-height: 60px;
            font-size: 24px;
            margin-left: 100px;
        }
        .header_search {
            height: 36px;
            display: flex;
            width: 800px;
            margin-left: 100px;
            justify-content: space-between;
            .input_bar {
                width: 720px;
                :deep(.v-field__field) {
                    padding: 0;
                }
                :deep(.v-field--single-line) {
                    height: 36px;
                }
                :deep(.v-field__input) {
                    height: 36px;
                }
            }
        }
    }
    .body_bar {
        padding: 100px;
        h2 {
            width: 100%;
        }
    }
    .search_input {
        display: flex;
        width: 800px;
        margin: 100px auto;
        justify-content: space-between;
        .input_bar {
            width: 720px;
            :deep(.v-field__field) {
                padding: 0;
            }
            :deep(.v-field--single-line) {
                height: 36px;
            }
            :deep(.v-field__input) {
                height: 36px;
            }
        }
    }
</style>
