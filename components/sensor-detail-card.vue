<template>
    <div class="flex justify-between">
        <div class="flex flex-col gap-2">
            <p :class="`text-${cardColor}-1`">{{ sensorLabel(number) }} <span class="text-black">({{ sensorName }})</span></p>
            <div class="flex flex-col gap-2 font-bold">
                <p>{{ physicalQuantity }}: <span :class="`text-${cardColor}-1 text-2xl font-bold`">{{ amount }}{{ unit }}</span></p>
            </div>
        </div>
        <p :class="`text-${cardColor}-1 font-medium`">{{ unit }}</p>
    </div>
</template>
<script setup>
import { sensorLabel } from '~/composables/functions/digitLabel'
const props = defineProps([
    'number',
    'sensorName',
    'physicalQuantity',
    'cardColor',
    'unit',
    'amount'
])
</script>