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
    <div>
      <h3>/assets/img/logo.png</h3>
      <!-- <img src="static/img/logo.png" alt=""> -->
      <div class="img first"></div>
      <hr>
      <h3>assets/class/logo.png   assets/class/vature.png</h3>
        <div class="img second"></div>
        <div class="img three"></div>
       <!-- <img src="static/classes/logo.png" alt="">
       <img src="static/classes/vature.png" alt=""> -->
        <hr>
      <h3>static/img/favico</h3>
      <!-- <img src="static/img/favico.png" alt=""> -->
      <div class="img four"></div>
       <h3>static/class/favico   static/class/vature.png</h3>
         <!-- <img src="static/class/favico.png" alt="">
         <img src="static/class/vature.png" alt=""> -->

        <div class="img five"></div>
        <div class="img six"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.img{
  width:300px;
  height:300px;
  background-size: cover;
}
.first{
  background: url('../assets/img/logo.png')

}
.second{
   background: url('../assets/classes/logo.png') center no-repeat;

}
.three{
   background: url('../assets/classes/vature.png') center no-repeat;

}
.four{
   background: url('../../static/img/favico.png') center no-repeat;

}
.five{
   background: url('../../static/class/favico.png') center no-repeat;

}
.six{
   background: url('../../static/class/vature.png') center no-repeat;

}

</style>
