<template>
    <div id="app-box">首页</div>
    <router-link to="/">跳转至首页</router-link>
    <router-link to="/about">跳转至About</router-link>
    <router-view />
</template>

<script>
export default {
    name:'APP'
}
</script>
