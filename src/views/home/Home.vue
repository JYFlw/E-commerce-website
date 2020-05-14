<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banner="banner"></home-swiper>
    <!--推荐版块 -->
    <recommend :recommend="recommend"></recommend>
    <!--介绍版块-->
    <feature-view/>
    <!--特色-->
    <tab-control :title="['流行','新款','精选']"/>
    <!-- tabControl下面的商品 -->
    <goods-list :goods="goods[currentType].list"></goods-list>
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
  import {getHomeMultidata,
  getHomeGoods} from 'network/home'

  //home子组件
  import HomeSwiper from "./childComps/HomeSwiper.vue"; //轮播图
  import Recommend from './childComps/Recommend'//推荐版块
  import FeatureView from './childComps/FeatureView'//特色版块
  
  //公用组件
  // import TabControl from 'components/content/TabControl'
  //公共组件
  import TabControl from "@/components/content/TabControl.vue";
  import GoodsList from "@/components/content/goods/GoodsList.vue";

  export default {
    name:"Home",
    components: {
      NavBar,
      HomeSwiper,
      Recommend,
      FeatureView,
      TabControl,
      GoodsList
    },
    data() {
      return {
        res: [],
        banner: [],
        recommend: [],
        goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
        },
        currentType: "pop" //页面默认渲染当前类型
      }
    },
    mounted() {
       //1.请求多个数据
      getHomeMultidata().then(res => {
        console.log(res);
         //获取轮播图数据
            this.banner = res.data.banner.list;
            //获取轮播图下面的推荐数据;
            this.recommend = res.data.recommend.list;
      }),
      this.getHomeGoods("pop");
      this.getHomeGoods('new');
      this.getHomeGoods('sell');    
    },
    methods: {
        // 请求函数
        getHomeGoods(currentType) {
            var page = this.goods[currentType].page + 1;
            getHomeGoods(currentType, page).then(res => {
                this.goods[currentType].list.push(...res.data.list);
                // this.goods[type].list = res.data.list 不能这样写，不然永远只有三十条数据
                this.goods[currentType].page++;
                console.log(this.goods[currentType].list);
            });
          
        },
        //点击tabControll切换
        titleChange(index){
            switch(index){
                case 0:
                    this.currentType = 'pop';
                    break;
                case 1:
                    this.currentType = 'new';
                    break;
                case 2:
                    this.currentType = 'sell';
            }
            console.log(index)
        },
    },  
        
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