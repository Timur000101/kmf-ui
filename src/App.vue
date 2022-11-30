<script setup lang="ts">
import { Button } from './components'
</script>
<template>
	<div class="container">
		<Button variant="primary">Primary</Button>
		<Button variant="secondary" class="row">Secondary</Button>
		<Button variant="primary" size="lg" class="row">Large Primary</Button>
		<Button variant="secondary" size="lg" class="row">Large Secondary</Button>
		<Button variant="primary" size="sm" class="row">Small Primary</Button>
		<Button variant="secondary" size="sm" class="row">Small Secondary</Button>
		<Button variant="primary" :rounded="false" class="row">Primary without radius</Button>
		<Button variant="secondary" size="sm" :rounded="false" class="row">Small Secondary without radius</Button>
	</div>
</template>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.container {
	padding: 16px;
}
.row {
	margin-top: 15px;
}
</style>
