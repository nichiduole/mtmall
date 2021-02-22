<template>
  <div>
    <MainHeader>
      <template #center>
        <span>订单</span>
      </template>
    </MainHeader>
  </div>
</template>

<script>

import MainHeader from '@/components/MainHeader.vue'

export default {
  name: 'Order',
  components: {
    MainHeader
  },
}

</script>
<style lang='less' scoped>
span {
  letter-spacing: 3px;
}
</style>
