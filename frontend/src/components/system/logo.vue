<template>
  <img
    class="SysTitleLogo"
    :style="{ height: height + 'px', top: top + 'px', left: left + 'px' }"
    :src="logoSrc"
    alt="PuntoShop WMS"
  />
</template>
<script setup lang="ts">
import { computed } from 'vue'
import logoSidebar from '@/assets/img/by_puntoshop.gif'
import logoWhite from '@/assets/img/by_puntoshop_white.gif'

const props = defineProps({
  height: {
    type: Number,
    default: 55
  },
  top: {
    type: Number,
    default: 20
  },
  left: {
    type: Number,
    default: 20
  },
  variant: {
    type: String,
    default: 'sidebar'
  }
})

const logoSrc = computed(() => {
  return props.variant === 'white' ? logoWhite : logoSidebar
})
</script>
<style lang="less">
.SysTitleLogo {
  position: absolute;
  object-fit: contain;
  user-select: none;
}
</style>
