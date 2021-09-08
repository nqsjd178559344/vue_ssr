<template>
  <div>
    <h1 class="home-h1">首页</h1>
    <div>
      {{ userInfo.name }}
      --
      {{ userInfo.address }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
// import { onServerPrefetch } from '@vue/runtime-core';
// https://www.fastmock.site/mock/a33b3b55295040c0a3ae24168f12e6ca/ssrData/api/ssr
export default {
  // 注:
  name: "Home",
  setup() {
    // 服务端会执行
    const { commit, getters } = useStore();
    const userInfo = computed(() => getters["demo/getData"]);
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://www.fastmock.site/mock/a33b3b55295040c0a3ae24168f12e6ca/ssrData/api/ssr"
      );
      commit("demo/setData", data);
    };
    if (userInfo.value.name === "张发发" && typeof window !== "undefined") {
      //! 首屏为/about,故之前未获取数据,故在客户端时重新获取数据
      //   console.log('符合情况')
      fetchData();
    }
    return {
      userInfo,
      fetchData,
    };
  },
  // ! regeneratorRuntime is not defined报错 => 安装@babel/plugin-transform-runtime
  // ! 每次都刷新路由 && 请求服务端,没有走本地的路由 => 静态资源服务器未配置好[app.use(server(resolve(__dirname,'../../dist')))]
  // ? 仅在/about时使用旧数据,点击首页后重新调取数据

  async serverPrefetch() {
    //!仅服务端执行,客户端不执行[vue3]
    console.log("serverPrefetch 服务端执行");
    await this.fetchData();
  },
};
</script>

<style scoped>
.home-h1 {
  color: red;
}
</style>
