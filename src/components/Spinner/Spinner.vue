<template>
	<span
		:class="computedClasses"
		:style="`
		  width: ${props.size ? props.size : ''}px;
		  height: ${props.size ? props.size : ''}px;
      border-width: ${props.borderSize ? props.borderSize : ''}
	`"
	></span>
</template>

<script setup lang="ts">
import ColorVariant from '@/types/ColorVariant'
import { computed } from 'vue'

interface SpinnerProps {
	type: string
	variant: ColorVariant
	size: string
	borderSize: string
}

const props = withDefaults(defineProps<SpinnerProps>(), {
	type: 'border',
	variant: 'gray',
	size: '30',
	borderSize: '4px'
})

const computedClasses = computed(() => ({
	'spinner-border': props.type === 'border',
	'spinner-grow': props.type === 'grow',
	[`border-${props.variant}`]: props.variant
}))
</script>

<style lang="scss" scoped>
.spinner-border {
	display: inline-block;
	vertical-align: -0.125em;
	border-style: solid;
	border-right: solid transparent !important;
	border-radius: 50%;
	-webkit-animation: spinner-border 0.75s linear infinite;
	animation: spinner-border 0.75s linear infinite;
}

@keyframes spinner-border {
	100% {
		transform: rotate(360deg);
	}
}
</style>
