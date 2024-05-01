<script setup lang="ts">
  import { computed, defineProps } from 'vue';
  import { useGrid } from 'vue-screen';
  import { gridBreakpoints } from '@/utils/constants';

  const grid = useGrid(gridBreakpoints);

  const props = defineProps({
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
    <p class="info__small-label">
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

    <p class="info__sub-info">
      {{ subInfo }}
    </p>
    <slot name="default"/>
    <slot name="button" />
  </div>
</template>

<style lang="scss">
  @import '@/assets/main.scss';

  .info {
    &__sub-info,
    &__small-label,
    &__large-label,
    &__large-label-cursive {
      font-family: Inter;
      text-align: center;
    }

    &__sub-info,
    &__small-label {
      line-height: 24px;
    }

    &__sub-info {
      font-weight: 400;
    }

    &__small-label {
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