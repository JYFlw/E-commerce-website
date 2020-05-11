<template>
    <div class="tab-control">
        <span 
        v-for="(item,index) in title" :key="index"
        class="tab-control-item"
        >

         {{ item }}
         
         </span>
         <span v-for="item in title" :key="item"></span>
    </div>

</template>
<script>
export default {
    name: "TabControl",
    props: {
        title: {
            type: Array,
            detafult() {
                return [];
            }
        }
    },
    data() {
        return {
            contorlIndex:0
        }
    },
    methods:{
        contorlChange(index) {
            this.contorlIndex = index;
            this.$emit('titleChange',index);    //触发父组件的自定义事件
        }
    }
};
</script>
<style lang="less" scoped>
    .tab-control {
        display: flex;
        text-align: center;
        font-size: 15px;
        .tab-control-item {
            flex: 1;
            height: 40px;
            line-height: 40px;
        }
    }
</style>