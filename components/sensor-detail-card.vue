<template>
    <div class="flex justify-between">
        <div class="flex flex-col gap-2">
            <p :class="`text-${cardColor}-1`">{{ sensorLabel }} <span class="text-black">({{ sensorName }})</span></p>
            <div class="flex flex-col gap-2 font-bold">
                <p>{{ physicalQuantity }}: <span :class="`text-${cardColor}-1 text-2xl font-bold`">{{ amount }}{{ unit }}</span></p>
            </div>
        </div>
        <p :class="`text-${cardColor}-1 font-medium`">{{ unit }}</p>
    </div>
</template>
<script setup>
const props = defineProps([
    'number',
    'sensorName',
    'physicalQuantity',
    'cardColor',
    'unit',
    'amount'
])
const sensorLabel = computed(() => {
  const words = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]
  return `Sensor ${words[props.number - 1]}`
})
</script>