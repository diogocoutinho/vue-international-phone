import VueInputPhone from "@/components/VueInputPhone.vue";

export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("VueInputPhone", VueInputPhone);
}

const plugin = {
    install
}

let GlobalVue = null;
if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
    GlobalVue = global.vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

VueInputPhone.install = install;

export default VueInputPhone;
