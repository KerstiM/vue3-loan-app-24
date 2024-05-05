<script setup lang="ts">
  import { computed } from 'vue';
  import { useGrid } from 'vue-screen';
  import { gridBreakpoints } from '@/utils/constants';

  const grid = useGrid(gridBreakpoints);

  const props = defineProps({
    smallLabel: String,
    largeLabelCursive: [String, Object],
    largeLabel: [String, Object],
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

  const largeLabelText = typeof props.largeLabel === 'string'
    ? props.largeLabel
    : props.largeLabel?.text;

  const largeLabelCursiveText = typeof props.largeLabelCursive === 'string'
    ? props.largeLabelCursive
    : props.largeLabelCursive?.text;

  const computedLabelSize = computed(() => {
    return (typeof props.largeLabel === 'object' && props.largeLabel.small) ||
    (typeof props.largeLabelCursive === 'object' && props.largeLabelCursive.small)
      ? grid.md
        ? '48px'
        : '32px'
      : grid.md
        ? '68px'
        : '32px';
  })
</script>

<template>
  <div class="info__wrapper">
    <p
      v-if="smallLabel"
      class="info__small-label"
    >
      {{ smallLabel }}
    </p>

    <div v-if="cursiveFirst">
      <span
        class="info__large-label-cursive"
        :style="{ fontSize: computedLabelSize }"
      >
        {{ largeLabelCursiveText }}
      </span>
      <span
        class="info__large-label"
        :style="{ fontSize: computedLabelSize }"
      >
        {{ largeLabelText }}
      </span>
    </div>
    <div v-else>
      <span
        class="info__large-label"
        :style="{ fontSize: computedLabelSize }"
      >
        {{ largeLabelText }}
      </span>
      <span
        class="info__large-label-cursive"
        :style="{ fontSize: computedLabelSize }"
      >
        {{ largeLabelCursiveText }}
      </span>
    </div>

    <slot name="default"/>
    <slot name="button" />
  </div>
</template>

<style lang="scss">
  @import '@/scss/main.scss';

  .info {
    &__small-label,
    &__large-label,
    &__large-label-cursive {
      text-align: center;
    }

    &__small-label {
      line-height: 24px;
      font-weight: 500;
    }

    &__large-label,
    &__large-label-cursive {
      font-family: Bitter;
      font-weight: 400;
      line-height: 36px;
    }

    &__large-label-cursive {
      font-style: italic;
    }

    @media (min-width: $breakpoint-md) {
      &__large-label,
      &__large-label-cursive {
        line-height: 72px;
      }
    }
  }
</style>