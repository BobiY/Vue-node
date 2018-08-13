<template>
  <div class="hello">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
  <div class="box">
    <ul>
      <li class="item"></li>
      <li class="item"></li>
      <li class="item"></li>
      <li class="item"></li>
    </ul>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      activeIndex2: '1'
    }
  },
  created () {
    this.setApi()
  },
  methods: {
    handleSelect (key, keyPath) {
    },
    setApi () {
      // console.log('axios:', axios)
      axios.get('/news').then(res => {
        console.log('res:', res)
      })
      axios.get('/QuerySug/getQuerySug?keyword=数学').then(res => {
        console.log('keyword:', res)
      })
      axios.get('/exam/reportAnalysi/').then(res => {
        console.log('reportAnalysi:', res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/css">
 .box{
   width:auto;
   height:auto;
   margin:0 auto;
   ul{
     li.item{
       display: inline-block;
       width:400px;
       margin-right:20px;
       background:green;
       border:2px solid skyblue;
       height:40px;
       &:last-child{
         margin-right:20px;
       }
     }
   }
 }

</style>
