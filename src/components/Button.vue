<script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps({
    label: String,
    display: {
      type: String,
      default: 'default',
      validator: (display: string) => [
        'default',
        'close'
      ].includes(display),
    },
    color: {
      type: String,
      default: 'purple',
      validator: (color: string) => [
        'purple',
        'light',
      ].includes(color),
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  })

  const classes = computed(() => {
    return {
      [`button--${props.display}`]: props.display,
      [`button--${props.color}`]: props.color,
    };
  });
</script>

<template>
  <Button
    class="button"
    :class="classes"
    :label="label"
    :display="display"
    :background="color"
    :disabled="disabled"
  ></Button>
</template>

<style lang="scss">
  @import '@/scss/main.scss';

  $button__color--disabled: lighten(gray, 30%);
  $buttonHeightWidth: 24px;

  @mixin buttonColors($colorName, $color) {
    $hoverColor: darken($color, 5%);
    $focusColor: darken($color, 10%);

    .button--#{$colorName} {
      background-color: $color;
      box-shadow: 0 0 0 0 transparent;

      &:hover {
        background-color: $hoverColor;
      }

      &:focus,
      &:active {
        background-color: $focusColor;
      }

      &[disabled],
      .button--disabled {
        background-color: $button__color--disabled;
      }
    }
  }

  @mixin buttonDisplays($displayType) {

    .button--#{$displayType} {

      @if $displayType == 'close' {
        background: none;
        border-radius: $buttonHeightWidth;
        width: auto;
        padding: 0 4px;

        &:hover {
          background-color: darken($white, 5%);
        }
      }
    }
  }

  .button {
    border: none;
    border-radius: $border-radius-24;
    padding: 12px 24px;
    font-family: Inter;
    color: $purple;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    .p-button-label {
      font-weight: 400;
    }
  }

  @include buttonColors('light', $yellow-20);
  @include buttonColors('purple', $purple-60);

  @include buttonDisplays('narrow');
  @include buttonDisplays('block');
  @include buttonDisplays('close');
</style>