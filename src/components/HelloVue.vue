<template>
  <div>
    <h1>{{ msg }}</h1>

    <div class="container">
      <div class="block">
        <h3>官方资料</h3>
        <a href="https://cn.vuejs.org/" target="_blank">vue-js</a>
        <a href="https://cli.vuejs.org/guide/" target="_blank">vue-cli</a>
        <a href="https://router.vuejs.org/" target="_blank">vue-router</a>
        <a href="https://vuex.vuejs.org" target="_blank">vuex</a>
        <a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank">vue-devtools</a>
        <a href="https://vue-loader.vuejs.org" target="_blank">vue-loader</a>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue（vue学习资料汇总）</a>
      </div>

      <div class="block">
        <h3>插件库</h3>
        <a href="https://github.com/imcvampire/vue-axios" target="_blank">vue-axios（异步请求库）</a>
        <a href="https://lodash.com/" target="_blank">lodash（javascript实用工具库）</a>
        <a href="http://element.eleme.io/#/zh-CN" target="_blank">Element（UI组件库）</a>
      </div>

      <div class="block">
        <h3>基础语法</h3>
        <router-link to="/demo1">{{ findNameById(1) }}</router-link>
        <router-link to="/demo2">{{ findNameById(2) }}</router-link>
        <router-link to="/demo3">{{ findNameById(3) }}</router-link>
        <router-link to="/demo4">{{ findNameById(4) }}</router-link>
        <router-link to="/demo5">{{ findNameById(5) }}</router-link>
        <router-link to="/demo6">{{ findNameById(6) }}</router-link>
      </div>

      <div class="block">
        <h3>基础语法（2）</h3>
        <router-link to="/demo7">{{ findNameById(7) }}</router-link>
        <router-link to="/demo8">{{ findNameById(8) }}</router-link>
        <router-link to="/demo12">{{ findNameById(12) }}</router-link>
        <router-link to="/demo13">{{ findNameById(13) }}</router-link>
        <router-link to="/demo14">{{ findNameById(14) }}</router-link>
        <router-link to="/demo15">{{ findNameById(15) }}</router-link>
      </div>

      <div class="block">
        <h3>官方示例</h3>
        <router-link to="/demo9">{{ findNameById(9) }}</router-link>
        <router-link to="/demo10">{{ findNameById(10) }}</router-link>
        <router-link to="/demo11">{{ findNameById(11) }}</router-link>
      </div>

      <div class="block">
        <h3>Vuex</h3>
        <router-link to="/demo16">{{ findNameById(16) }}</router-link>
        <router-link to="/demo17">{{ findNameById(17) }}</router-link>
        <router-link to="/demo18">{{ findNameById(18) }}</router-link>
        <router-link to="/demo19">{{ findNameById(19) }}</router-link>
        <router-link to="/demo20">{{ findNameById(20) }}</router-link>
      </div>

      <div class="block">
        <h3>进阶语法</h3>
        <router-link to="/demo21">{{ findNameById(21) }}</router-link>
        <router-link to="/demo22">{{ findNameById(22) }}</router-link>
        <router-link to="/demo23">{{ findNameById(23) }}</router-link>
        <router-link to="/demo24">{{ findNameById(24) }}</router-link>
        <router-link to="/demo25">{{ findNameById(25) }}</router-link>
        <router-link to="/demo26">{{ findNameById(26) }}</router-link>
        <router-link to="/demo27">{{ findNameById(27) }}</router-link>
        <router-link to="/demo28">{{ findNameById(28) }}</router-link>
        <router-link to="/demo29">{{ findNameById(29) }}</router-link>
        <router-link to="/demo42">{{ findNameById(42) }}</router-link>
        <router-link to="/demo45">{{ findNameById(45) }}</router-link>
        <router-link to="/demo46">{{ findNameById(46) }}</router-link>
        <router-link to="/demo47">{{ findNameById(47) }}</router-link>
      </div>
      <div class="block">
        <h3>高级语法</h3>
        <router-link to="/demo30">{{ findNameById(30) }}</router-link>
        <router-link to="/demo31">{{ findNameById(31) }}</router-link>
        <router-link to="/demo32">{{ findNameById(32) }}</router-link>
        <router-link to="/demo33">{{ findNameById(33) }}</router-link>
      </div>

      <div class="block">
        <h3>组件设计模式</h3>
        <router-link to="/demo34">{{ findNameById(34) }}</router-link>
        <router-link to="/demo35">{{ findNameById(35) }}</router-link>
        <router-link to="/demo36">{{ findNameById(36) }}</router-link>
        <router-link to="/demo37">{{ findNameById(37) }}</router-link>
        <router-link to="/demo38">{{ findNameById(38) }}</router-link>
        <router-link to="/demo39">{{ findNameById(39) }}</router-link>
        <router-link to="/demo40">{{ findNameById(40) }}</router-link>
        <router-link to="/demo41">{{ findNameById(41) }}</router-link>
        <router-link to="/demo48">{{ findNameById(48) }}</router-link>
        <router-link to="/demo49">{{ findNameById(49) }}</router-link>
      </div>

      <div class="block">
        <h3>第三方库的使用</h3>
        <router-link to="/demo43">{{ findNameById(43) }}</router-link>
        <router-link to="/demo44">{{ findNameById(44) }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { findNameById } from '@/demo-config'
export default {
  name: 'HelloVue',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  methods: {
    findNameById(id) {
      return findNameById(id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}

.block {
  background: #fff;
  flex: 1 0 auto;
  margin: 12px;
  flex-basis: 20%;
}

h3 {
  margin: 4px 0 8px;
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
  padding: 4px;
  display: block;
}
</style>
