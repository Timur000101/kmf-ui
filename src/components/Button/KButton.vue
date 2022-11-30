<template>
	<component :is="computedTag" class="btn" :class="computedClasses" v-bind="computedAttrs" @click="clicked">
		<spinner v-if="loading" size="30" variant="gray"></spinner>
		<template v-if="!loading">
			<slot></slot>
		</template>
	</component>
</template>

<script setup lang="ts">
import Spinner from '@/components/Spinner'
import type ButtonType from '@/types/ButtonType'
import type ColorVariant from '@/types/ColorVariant'
import type SizeVariant from '@/types/SizeVariant'
import { isTag } from '@/utils/dom'
import { isLink as isLinkStrict } from '@/utils/inspect'
import { computed } from 'vue'

interface ButtonProps {
	tag?: 'button' | 'link'
	href?: string
	variant?: ColorVariant
	size?: SizeVariant
	rounded?: boolean
	loading?: boolean
	disabled?: boolean
	type: ButtonType
}

const props = withDefaults(defineProps<ButtonProps>(), {
	tag: 'button',
	variant: 'primary',
	size: 'md',
	rounded: true,
	loading: false,
	disabled: false,
	type: 'button'
})

const emit = defineEmits<{
	(e: 'click', event: MouseEvent): void
}>()

const isLink = (props: ButtonProps): boolean => isLinkStrict(props) || isTag(props.tag || 'button', 'a')
const isButton = computed<boolean>(() => props.tag === 'button' && props.href === undefined)

// Determine a component tag
const computedTag = computed(() => (isLink(props) ? 'a' : 'button'))

const computedClasses = computed(() => ({
	[`btn-${props.variant}`]: props.variant,
	[`btn-${props.size}`]: props.size,
	'btn-border-radius': props.rounded,
	'btn-disabled': props.disabled
}))

const computedAttrs = computed(() => ({
	disabled: isButton.value ? props.disabled : null,
	href: props.href,
	type: isButton.value ? props.type : null
}))

const clicked = (e: MouseEvent): void => {
	if (props.disabled) {
		e.preventDefault()
		e.stopPropagation()
		return
	}
	emit('click', e)
}
</script>

<style lang="scss" scoped>
@import 'index';
</style>
