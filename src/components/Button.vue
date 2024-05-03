<script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps({
    label: String,
    as: {
      type: String,
      default: 'button',
      validator: (type: string) => [
        'button',
        'a',
      ].includes(type),
    },
    href: String,
    display: {
      type: String,
      default: 'narrow',
      validator: (display: string) => [
        'narrow',
        'block',
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

  const handleClick = () => {
    console.log('Button clicked')
  }

  const isLink = computed(() => props.as === 'a')
</script>

<template>
  <Button
    :as="as"
    class="button"
    :class="classes"
    :label="label"
    :href="href"
    :display="display"
    :background="color"
    :disabled="disabled"
  ></Button>
</template>

<style lang="scss">
  @import '@/assets/main.scss';

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

      @if $displayType == 'narrow' {
        
      } @else if $displayType == 'block' {
        width: 100%;
      } @else if $displayType == 'close' {
        background: none;
        border-radius: $buttonHeightWidth;
        padding: 4px 4px 4px 8px;

        &:hover {
          background-color: darken($white, 5%);
        }
      }
    }
  }

  .button {
    border: none;
    border-radius: 24px;
    padding: 12px 24px;
    font-family: Inter;
    color: $purple;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  @include buttonColors('light', $lightYellow);
  @include buttonColors('purple', $lightPurple);

  @include buttonDisplays('narrow');
  @include buttonDisplays('block');
  @include buttonDisplays('close');
</style>