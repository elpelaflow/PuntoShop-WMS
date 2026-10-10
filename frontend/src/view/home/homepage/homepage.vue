<template>
  <div class="container">
    <div class="textBox">
      <div class="brandLogoWrapper">
        <div class="brandTitle">
          <span class="letterDark">WM</span><span class="letterRed">S</span>
        </div>
        <div class="brandTagline">
          by punto<span class="taglineRed">shop</span>.ar
        </div>
      </div>
      <div class="subTitle">{{ i18n.global.t('homepage.subTitle') }}</div>
    </div>
    <div class="content">
      <div class="lottieBox">
        <lottie :src="dataJson"></lottie>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import lottie from '@/components/lottie.vue'
import dataJson from '@/assets/warehouse.json'
import i18n from '@/languages/i18n'
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
}
.VWMS{
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  width: 40%;
  z-index: 999999999;
}

.content {
  width: 60%;
}

.textBox {
  width: 100%;
  position: absolute;
  left: 50%;
  top: 4%;
  transform: translate(-50%, 0);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.brandLogoWrapper {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
}

.brandTitle {
  font-family: var(--font-title);
  font-size: clamp(52px, 12vw, 130px);
  font-weight: var(--font-weight-black);
  line-height: 0.95;
  letter-spacing: -2px;

  .letterDark {
    color: var(--text-primary);
  }

  .letterRed {
    color: var(--brand-primary);
  }
}

.brandTagline {
  font-family: var(--font-main);
  font-size: clamp(16px, 3.5vw, 32px);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin-top: -6px;
  letter-spacing: -0.5px;
  user-select: none;

  .taglineRed {
    color: var(--brand-primary);
  }
}

.subTitle {
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: clamp(13px, 2.5vw, 20px);
  font-weight: var(--font-weight-medium);
  letter-spacing: 2px;
  color: var(--text-muted);
  margin-top: 15px;
  text-align: center;
  padding: 0 16px;
}

.lottieBox {
  min-width: 100%;
  max-width: 100%;
}

@media (max-width: 960px) {
  .content {
    width: 95%;
  }

  .textBox {
    top: 8%;
  }
}
</style>
