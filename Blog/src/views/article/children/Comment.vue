<template>
    <div class="comment-view">

    </div>
</template>
<script>
    import types from '../../../store/mutation-types'
    export default {
        name: 'comment',
        created () {
            this.$store.commit( types.SET_TITLE, '评论：' );
        }
    }
</script>
