<template>
    <div class="category-view">
        <dl class="category-box">
            <dt class="category-title">技术相关：</dt>
            <dd class="category-con" v-for="(label_item,label_index) in label_arr">
                <a :href="'#/article/'+ label_item.label" v-text="label_item.label"></a>
            </dd>
        </dl>
    </div>
</template>
<script>
    import types from '../../../store/mutation-types'
    import Util from '../../../assets/lib/Util'
    export default {
        name: 'category',
        data() {
            return {
                label_arr: []
            }
        },
        created () {
            this.fetchLabel();
            this.$store.commit( types.SET_TITLE, '分类：' )
        },
        methods: {
            fetchLabel () {
                Util.fetchLabel((result) => {
                    if(result.status){
                        this.label_arr = result.data.labels;
                    }
                })
            }
        }
    }
</script>
<style lang="scss">
    @import "../../../assets/scss/define";
    .category-view{
        line-height: 1.8;
    }
    .category-list-con{
        a{
            @extend %db;
            @extend %f16;
            @extend %c6;
            line-height: 1.8;
        }
    }
</style>
