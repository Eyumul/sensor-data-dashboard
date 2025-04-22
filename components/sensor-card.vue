<template>
    <div class="flex gap-[8px] h-fit">
        <div class="rounded-[11px] flex justify-center items-center font-bold size-[80px] text-3xl" :class="`text-${cardColor}-1 bg-${cardColor}-2`">{{ number }}</div>
        <div class="flex flex-col justify-between p-2">
            <p class="text-[#92959E]">{{ sensorLabel(number) }}</p>
            <p class="text-2xl">{{ amount }}</p>
        </div>
    </div>
</template>
<script setup>
import { sensorLabel } from '~/composables/functions/digitLabel'
const props = defineProps([
    'number',
    'amount',
    'cardColor'
])
</script>