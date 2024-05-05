<script setup lang="ts">
  import { Ref } from "vue";

  const props = defineProps<{
    hasError: boolean;
    errorMessage: string | Ref<string>;
  }>();
</script>

<template>
  <div v-if="props.hasError" class="error-message">
    {{ props.errorMessage }}
  </div>
</template>


<style lang="scss">
  @import '@/scss/main.scss';

  .error-message {
    color: $red;
    font-size: 12px;
    padding-left: 12px;
  }

</style>