<template>
  <div class="vue3-virtual-table">
    <VirtualList :data="[]"></VirtualList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VirtualList } from 'vue3-virtual-list';

export default /*#__PURE__*/ defineComponent({
  name: 'Vue3VirtualTable',
  components: { VirtualList },
});
</script>

<style scoped>
.vue3-virtual-table {
  display: block;
  width: 400px;
  margin: 25px auto;
  border: 1px solid #ccc;
  background: #eaeaea;
  text-align: center;
  padding: 25px;
}
</style>
