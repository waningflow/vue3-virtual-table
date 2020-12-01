import { DefineComponent, Plugin } from 'vue';

declare const Vue3VirtualTable: DefineComponent & { install: Exclude<Plugin['install'], undefined> };
export default Vue3VirtualTable;
