<template>
    <div v-html="data"></div>
</template>


<script>
import {marked} from "marked"
export default {
    props:["content"],
    computed: {
        data() {
            return marked(this.content)
        },
    }
}
</script>