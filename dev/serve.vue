<script lang="ts">
import { defineComponent } from 'vue';
import Vue3VirtualTable from '@/vue3-virtual-table.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    Vue3VirtualTable
  }
});
</script>

<template>
  <div id="app">
    <vue3-virtual-table />
  </div>
</template>
