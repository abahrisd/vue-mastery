<script>
export default {
  name: "Slots"
}
</script>

<template>
<div>
  <header>
    <div>And the header is:</div>
    <slot name="header"></slot>
  </header>
  <span class="slot-data">
    <slot></slot>
  </span>
</div>
</template>

<style scoped>
header {
  margin: 20px;
  background-color: #cccccc;
  font-size: 16px;
}

.slot-data {
  color: red;
  background-color: #00a876;
}

</style>