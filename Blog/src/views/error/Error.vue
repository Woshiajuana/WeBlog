<template>
    <p class="result-null-prompt">
        <svg class="null-icon">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#null-icon"></use>
        </svg>
        <span>没有这篇文章哦</span>
    </p>
</template>
<script>
    import types from '../../store/mutation-types'
    export default {
        name: 'error',
        created () {
            this.$store.commit( types.SET_TITLE, '错误：' );
        }
    }
</script>
