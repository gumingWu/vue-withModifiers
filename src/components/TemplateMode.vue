<script setup lang="ts">
const click = () => {
  alert(1);
}
</script>

<template>
  <div style="width: 120px; height: 120px; background-color: red;" @click.right.prevent="click">TemplateMode</div>
</template>

<style scoped></style>
