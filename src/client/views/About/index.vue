<template>
  <div>
    <h1 class="about-h1">关于</h1>
    <ul>
      <li>{{userInfo.name}}</li>
      <li>{{userInfo.address}}</li>
    </ul>
  </div>
</template>

<script>
// setup = setup中默认return
import { useStore } from "vuex";
import { computed } from '@vue/reactivity';

export default {
  name: "About",
  setup() {
    const { getters } = useStore();
    // const userInfo = getters["demo/getData"];
    const userInfo = computed(()=>getters['demo/getData'])
    return {
      userInfo,
    };
  },
};
</script>

<style scoped>
.about-h1 {
  color: yellowgreen;
}
</style>
