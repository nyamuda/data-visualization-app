import Vue from "vue";
import Vuex from "vuex";
import { moduleA } from "./modules/moduleA";
import { moduleB } from "./modules/moduleB";
import { moduleC } from "./modules/moduleC";
import { moduleD } from "./modules/moduleD";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB,
        c: moduleC,
        d: moduleD
    }
});