<script setup lang="ts">
  import { Info, Button } from '@/components'

  import { useRouter } from 'vue-router';

  const router = useRouter();

  defineProps({
    firstName: String,
    smallLabel: String,
    largeLabelCursive: [String, Object],
    largeLabel: [String, Object],
    subInfo: String,
    buttonText: String,
    link: {
      type: String,
      default: '#calculator',
    },
    cursiveFirst: {
      type: Boolean,
      default: true,
    }
  });

  const toTitleCase = (firstName?: string) => {
    const words = firstName?.split(/[ -]/);
  
    const capitalizedWords = words?.map(word =>
      word.charAt(0).toUpperCase() +
      word.slice(1).toLowerCase()
    );

    return capitalizedWords?.join(" ");
  }

  const onClick = () => {
    router.push('/');
  };
</script>

<template>
  <div class="card">
    <slot></slot>
    <Info
      :largeLabelCursive="{
        text: 'Dear ',
        small: true
      }"
      :largeLabel="{
        text: toTitleCase(firstName),
        small: true
      }"
    >
      <div class="card__sub-info">
        <p>
          Unfortunately, your loan was denied.
        </p>
        <span class="card__separator"></span>
        <p >
          In addition to your income and expenses, a number of other factors play a role in loan decisions.
        </p>
        <span class="card__separator"></span>
      </div>
      <template #button>
        <Button
          class="card__button"
          label="Exit"
          @click="onClick"
        ></Button>
      </template>
    </Info>
  </div>
</template>

<style scoped lang="scss">
  @import '@/assets/main.scss';

  body {
    background-color: $lightGray;
  }

  .card {
    background: $white;
    border-radius: 0;
    max-width: 792px;
    height: 100vh;
    padding: 40px;
    text-align: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;

    &__sub-info {
      font-family: Inter;
      text-align: center;
    }

    &__sub-info {
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
    }

    &__separator {
      display: block;
      width: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    }

    &__button {
      margin-top: 40px;
      padding: 12px 24px;
      width: 100%;
    }

    @media (min-width: $breakpoint-md) {
      padding: 80px 204px;
      border-radius: 20px;
      height: auto;
    }
  }
</style>