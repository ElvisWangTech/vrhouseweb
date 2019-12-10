import Vue from 'vue'
import Vuex from 'vuex'
import {LoadingStatus} from '../constrant'
import viewDataMaker from './viewDataMaker'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        title: "123看房:在线VR看房与虚拟家装的技术提供者，通过全景图生成3D模型的技术创造者，国内主流看房技术方案定义者。",
        loadingStatus: LoadingStatus.START,
        loadingProgress: 0,
        viewData: null,
        thumbnails: [],
    },
    getters: {
        thumbnails: state => {
            return viewDataMaker.getHotSpotThumbnailList(state.viewData);
        }
    },
    mutations: {
        setTitle(state, newTitle) {
            state.title = newTitle;
        },
        setLoadingStatus(state, params){
            state.loadingStatus = params.status;
            let progress = params.progress || 0;
            // 0 - 1
            state.loadingProgress = progress;
        },
        setViewData(state, viewData) {
            state.viewData = viewData;
            state.thumbnails = viewDataMaker.getHotSpotThumbnailList(viewData);
        }
    },
    actions: {
        startLoading(context) {
            context.commit('setLoadingStatus', {status: LoadingStatus.START});
        },
        progressLoading(context, progress) {
            context.commit('setLoadingStatus', {status: LoadingStatus.PROGRESS, progress});
        },
        endLoading(context) {
            context.commit('setLoadingStatus', {status: LoadingStatus.END});
        },
        abortLoading(context) {
            context.commit('setLoadingStatus', {status: LoadingStatus.ABORT});
        },
        setViewData(context, viewData) {
            context.commit('setViewData', viewData);
        }
    }
});

export default store;
