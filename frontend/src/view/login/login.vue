<template>
  <div class="loginContainer">
    <div class="desktopLogo">
      <Logo variant="white" :height="55" :top="20" :left="20" />
    </div>
    <div class="loginLeft">
      <img src="../../assets/img/loginLeft.png" style="width: 80%" />
    </div>
    <div class="loginRight">
      <div class="LanguagesSwitchContainer">
        <LanguagesSwitch />
      </div>
      <div class="mobileLogo">
        <Logo :height="44" :top="0" :left="0" />
      </div>
      <LoginForm />
      <div class="mobileFooter">
        <a href="https://modernwms.ikeyly.com" target="_blank">CopyRight © 2023 ModernWMS All Rights Reserve</a>
      </div>
    </div>

    <div class="copyRight desktopOnly">
      <a href="https://modernwms.ikeyly.com" target="_blank">CopyRight © 2023 ModernWMS All Rights Reserve</a>
    </div>
    <div class="ICP desktopOnly" @click="method.toICP"> 闽ICP备2021008548号 </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import LoginForm from '@/components/login/login-form.vue'
import LanguagesSwitch from '@/components/system/languages.vue'
import Logo from '@/components/system/logo.vue'
import { emitter } from '@/utils/bus'

const method = reactive({
  toICP: () => {
    window.open('https://beian.miit.gov.cn/', '_blank')
  }
})

// Return to the login interface to clear the status
onMounted(() => {
  emitter.emit('closeLoading')
})
</script>

<style scoped lang="less">
.LanguagesSwitchContainer {
  position: absolute;
  right: 16px;
  top: 16px;
  z-index: 10;
}

.loginContainer {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #fff;
  position: relative;
  overflow: hidden;

  .mobileLogo {
    display: none;
  }

  .mobileFooter {
    display: none;
  }

  .loginLeft {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loginRight {
    width: 30%;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
  }
}

.copyRight {
  width: 100%;
  color: #bbb;
  display: flex;
  justify-content: center;
  font-size: 12px;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ICP {
  color: #999;
  font-size: 12px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    cursor: pointer;
    color: #aaa;
  }
}

@media (max-width: 960px) {
  .loginContainer {
    flex-direction: column;
    overflow-y: auto;

    .desktopLogo {
      display: none;
    }

    .desktopOnly {
      display: none;
    }

    .loginLeft {
      display: none;
    }

    .loginRight {
      width: 100%;
      min-height: 100%;
      background-color: #ffffff;
      padding: 60px 16px 24px 16px;
      justify-content: space-between;

      .mobileLogo {
        display: block;
        position: relative;
        width: 180px;
        height: 48px;
        margin-bottom: 8px;
      }

      .mobileFooter {
        display: block;
        margin-top: 24px;
        font-size: 11px;
        color: #bbb;
        text-align: center;

        a {
          color: #bbb;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
