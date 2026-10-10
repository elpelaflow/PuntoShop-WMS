import { store } from '@/store'

interface pageHasElement {
  hasPager?: boolean
  hasTab?: boolean
  hasOperateBtn?: boolean
  hasToolBar?: boolean
}

export const primaryColor = '#D61C22'
export const primaryLightColor = '#FDE8E9'
export const lightGrey = '#999999'
export const errorColor = '#BA2828'

// The low resolution of the selection box ADAPTS to solve the problem that the scroll bar of the selection box button causes the button to disappear
let select_table_height = 445
if (window?.innerHeight) {
  if (window.innerHeight > 740) {
    select_table_height = 500
  } else {
    const computed_table_height = window.innerHeight - 48 - 64 - 52 - 24 - 74

    if (computed_table_height > 200) {
      select_table_height = computed_table_height
    }
  }
}

export const SYSTEM_HEIGHT = {
  HEADER: 60,
  TAB: 70,
  OPERATE_BAR: 52,
  VXE_PAGER: 48,
  SELECT_TABLE: select_table_height,
  TOOLBAR: 40
}

// The height of the content card
export const computedCardHeight = ({ hasTab = true, hasOperateBtn = true }: pageHasElement) => {
  const clientHeight = store.getters['system/clientHeight'] || window.innerHeight || 800
  const clientWidth = store.getters['system/clientWidth'] || window.innerWidth || 1200
  const isMobile = clientWidth <= 960
  const EXTRA_MARGIN = isMobile ? 60 : 100

  let res = clientHeight - SYSTEM_HEIGHT.HEADER - EXTRA_MARGIN

  if (hasTab) {
    res -= SYSTEM_HEIGHT.TAB
  }
  if (hasOperateBtn) {
    res -= isMobile ? 160 : SYSTEM_HEIGHT.OPERATE_BAR
  }

  if (res < 280) {
    res = 280
  }

  return `${ res }px`
}

// The height of the table
export const computedTableHeight = ({ hasPager = true, hasTab = true, hasOperateBtn = true }: pageHasElement) => {
  const clientHeight = store.getters['system/clientHeight'] || window.innerHeight || 800
  const clientWidth = store.getters['system/clientWidth'] || window.innerWidth || 1200
  const isMobile = clientWidth <= 960
  const EXTRA_MARGIN = isMobile ? 60 : 100

  let res = clientHeight - SYSTEM_HEIGHT.HEADER - EXTRA_MARGIN

  if (hasPager) {
    res -= SYSTEM_HEIGHT.VXE_PAGER
  }
  if (hasTab) {
    res -= SYSTEM_HEIGHT.TAB
  }
  if (hasOperateBtn) {
    res -= isMobile ? 160 : SYSTEM_HEIGHT.OPERATE_BAR
  }

  if (res < 240) {
    res = 240
  }

  return `${ res }px`
}

// The height of the table container in select modal.
export const computedSelectTableSearchHeight = ({ hasPager = true, hasToolBar = false }: pageHasElement) => {
  let res = SYSTEM_HEIGHT.SELECT_TABLE

  if (hasPager) {
    res += SYSTEM_HEIGHT.VXE_PAGER
  }
  if (hasToolBar) {
    res += SYSTEM_HEIGHT.TOOLBAR
  }

  return `${ res }px`
}
