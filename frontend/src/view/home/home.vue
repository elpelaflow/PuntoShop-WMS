<template>
  <div class="HomeContainer">
    <!-- Backdrop for mobile drawer -->
    <div
      v-if="isMobileSidebarOpen"
      class="mobileSidebarBackdrop"
      @click="closeSidebar"
    ></div>

    <!-- Sidebar wrapper -->
    <div class="sidebarWrapper" :class="{ 'mobile-open': isMobileSidebarOpen }">
      <HomeSideBar />
    </div>

    <div class="homeRight">
      <HomeHeader />
      <div class="homeRouterContainer pt-2">
        <RouterView v-slot="{ Component }">
          <keep-alive :include="openedMenus">
            <component :is="Component"></component>
          </keep-alive>
        </RouterView>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { store } from '@/store'
import HomeHeader from './homeHeader.vue'
import HomeSideBar from './homeSideBar.vue'

const openedMenus = computed(() => store.getters['system/openedMenus'])
const isMobileSidebarOpen = computed(() => store.getters['system/isMobileSidebarOpen'])

const closeSidebar = () => {
  store.commit('system/setMobileSidebarOpen', false)
}
</script>

<style scoped lang="less">
@headerHeight: 60px;
@sideBarWidth: 300px;
@sideBarTitleHeight: 80px;

.HomeContainer {
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;

  .mobileSidebarBackdrop {
    display: none;
  }

  .sidebarWrapper {
    width: @sideBarWidth;
    height: 100%;
    flex-shrink: 0;
    z-index: 100;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .homeRight {
    width: calc(100% - @sideBarWidth);
    height: 100%;
    padding: 0 clamp(16px, 2.5vw, 40px);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .homeRouterContainer {
      flex: 1;
      height: calc(100% - @headerHeight);
      box-sizing: border-box;
      overflow-y: auto;
      overflow-x: hidden;
    }
  }

  @media (max-width: 960px) {
    .mobileSidebarBackdrop {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.45);
      z-index: 998;
      backdrop-filter: blur(2px);
    }

    .sidebarWrapper {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: 999;
      background-color: var(--bg-card, #ffffff);
      box-shadow: 4px 0 20px rgba(0, 0, 0, 0.25);
      transform: translateX(-100%);

      &.mobile-open {
        transform: translateX(0);
      }
    }

    .homeRight {
      width: 100%;
      padding: 0 8px;
    }
  }
}
</style>
