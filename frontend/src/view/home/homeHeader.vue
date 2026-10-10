<template>
  <div class="homeHeader">
    <div class="headerLeft">
      <v-btn
        icon="mdi-menu"
        variant="text"
        size="small"
        class="menuToggleBtn mr-1"
        @click="method.toggleSidebar"
      ></v-btn>
      <div class="menuTitle">
        <v-breadcrumbs :items="data.breadcrumbItems">
          <template #prepend>
            <v-icon :color="lightGrey" size="small" icon="mdi-form-select"></v-icon>
          </template>
        </v-breadcrumbs>
      </div>
    </div>
    <div class="toolsBar">
      <div class="gitSrc mr-4">
        <img src="@/assets/img/github.png" alt="GitHub" @click="method.toGit()" />
      </div>
      <LanguagesSwitch />
      <v-menu>
        <template #activator="{ props }">
          <div class="toolItems headPortrait ml-4" v-bind="props">
            <p class="firstName">{{ firstName }}</p>
            <div class="alive"></div>
          </div>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in data.userOperationMenu" :key="index" :value="index" @click="method.operation(item.value)">
            <v-list-item-title :title="item.title">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <ChangePwd ref="ChangePwdRef" />

    <ViewLogDialog ref="ViewLogDialogRef" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import LanguagesSwitch from '@/components/system/languages.vue'
import { lightGrey } from '@/constant/style'
import i18n from '@/languages/i18n'
import { router } from '@/router'
import { store } from '@/store'
import { DataProps } from '@/types/Home/HomeHeader'
import ChangePwd from '@/components/system/change-pwd.vue'
import ViewLogDialog from '@/components/system/view-log-dialog.vue'

const routerInfo = useRouter()
const ChangePwdRef = ref()
const ViewLogDialogRef = ref()

const data: DataProps = reactive({
  breadcrumbItems: [],
  // User Action List
  userOperationMenu: [
    {
      title: i18n.global.t('system.homeHeader.changePwd'),
      value: 'changePwd'
    },
    {
      title: i18n.global.t('system.homeHeader.log'),
      value: 'viewLog'
    },
    {
      title: i18n.global.t('system.homeHeader.logout'),
      value: 'logout'
    }
  ]
})

// Get current page route info
watch(
  () => routerInfo,
  (newValue) => {
    const MODULE = i18n.global.t(`router.sideBar.${ newValue.currentRoute.value.meta.menuModule }`)
    const PATH = i18n.global.t(`router.sideBar.${ newValue.currentRoute.value.meta.menuPath }`)

    data.breadcrumbItems = [
      {
        title: PATH,
        disabled: true
      }
    ]

    if (newValue.currentRoute.value.meta.menuModule) {
      data.breadcrumbItems.unshift({
        title: MODULE,
        disabled: true
      })
    }
  },
  { immediate: true, deep: true }
)

const method = reactive({
  // User operation method
  operation: (value: string) => {
    if (value === 'logout') {
      store.commit('system/clearOpenedMenu')
      store.commit('system/setCurrentRouterPath', '')

      router.push('/login')
    } else if (value === 'changePwd') {
      ChangePwdRef.value.open()
    } else if (value === 'viewLog') {
      ViewLogDialogRef.value.openDialog()
    }
  },
  toGit: () => {
    window.open('https://github.com/elpelaflow/PuntoShop-WMS', '_blank')
  },
  toggleSidebar: () => {
    store.commit('system/toggleMobileSidebar')
  }
})

const firstName = computed(() => {
  const userInfo = store.getters['user/userInfo']
  return userInfo?.user_name?.charAt(0) || ''
})
</script>

<style scoped lang="less">
@headerHeight: 60px;

.homeHeader {
  width: 100%;
  height: @headerHeight;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  border-radius: 0 0 10px 10px;
  transition: all 0.5s;

  box-shadow: 0 3px 3px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0 3px 4px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0 1px 8px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
  background-color: rgba(255, 255, 255, 0.5);

  .headerLeft {
    display: flex;
    align-items: center;
    overflow: hidden;

    .menuToggleBtn {
      display: none !important;
      color: var(--text-primary);
    }
  }

  .menuTitle {
    display: flex;

    .v-icon {
      margin-right: 10px;
    }

    span {
      color: #b9b8bc;
    }
  }

  .gitSrc {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    > img {
      width: 24px;
      height: 24px;
      opacity: 0.5;
    }

    :hover {
      cursor: pointer;
      opacity: 1;
      scale: 1.1;
      transition: all ease-in-out 0.2s;
    }
  }
  .toolsBar {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .toolItems {
      height: 40px;
      width: 40px;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s;
      border-radius: 40px;
      margin-right: 10px;
      cursor: pointer;

      &:hover {
        background-color: var(--bg-tool-hover);
      }

      &:active {
        background-color: var(--bg-tool-active);
      }
    }

    .bell {
      position: relative;

      .hasNotify {
        margin: 0;
        width: 11px;
        height: 11px;
        border-radius: 11px;
        background-color: var(--status-error-vibrant);
        border: 1px solid #fff;
        position: absolute;
        top: 5px;
        right: 7px;
      }
    }

    .headPortrait {
      border-radius: 40px;
      width: 40px;
      height: 40px;
      background-color: var(--brand-primary-subtle);
      position: relative;

      .alive {
        margin: 0;
        width: 11px;
        height: 11px;
        border-radius: 11px;
        background-color: var(--status-success);
        border: 1px solid #fff;
        position: absolute;
        bottom: 1px;
        right: 1px;
      }
    }
  }
}

.firstName {
  font-weight: 600;
  color: var(--brand-primary);
}

@media (max-width: 960px) {
  .homeHeader {
    padding: 0 10px;
    border-radius: 0 0 6px 6px;

    .headerLeft {
      .menuToggleBtn {
        display: inline-flex !important;
      }
    }

    .menuTitle {
      max-width: 140px;
      overflow: hidden;

      :deep(.v-breadcrumbs) {
        padding: 0;

        .v-breadcrumbs-item {
          font-size: 13px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .v-breadcrumbs-divider {
          padding: 0 4px;
        }
      }
    }

    .gitSrc {
      display: none !important;
    }

    .toolsBar {
      .toolItems.headPortrait {
        margin-left: 6px !important;
        width: 36px;
        height: 36px;
      }
    }
  }
}
</style>
