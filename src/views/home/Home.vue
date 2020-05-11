<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banner="banner"></home-swiper>
    <recommend :recommend="recommend"></recommend>
    <feature-view/>
    <tab-control :title="['流行','新款','精选']"/>

    <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ul>
  </div>
</template>

<script>
  //引入导航栏
  import NavBar from 'components/common/navbar/NavBav'
  //网络请求 js 模块
  import {getHomeMultidata} from 'network/home'

  //home子组件
  import HomeSwiper from "./childComps/HomeSwiper.vue"; //轮播图
  import Recommend from './childComps/Recommend'//推荐版块
  import FeatureView from './childComps/FeatureView'//特色版块
  
  //公用组件
  // import TabControl from 'components/content/TabControl'
  //公共组件
  import TabControl from "@/components/content/TabControl.vue";

  export default {
    name:"Home",
    components: {
      NavBar,
      HomeSwiper,
      Recommend,
      FeatureView,
      TabControl
    },
    data() {
      return {
        res: [],
        banner: [],
        recommend: []
      }
    },
    created() {
      //1.请求多个数据
      getHomeMultidata().then(res => {
        console.log(res);
         //获取轮播图数据
            this.banner = res.data.banner.list;
            //获取轮播图下面的推荐数据;
            this.recommend = res.data.recommend.list;
      })
    }
  }
</script>

<style>
  #home {
    padding-top: 44px;
  }

  .home-nav {
    background-color:pink;
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 12;
  }
</style>