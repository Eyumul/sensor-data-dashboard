<template>
    <div class="flex gap-[8px] h-fit">
        <div class="rounded-[11px] flex justify-center items-center font-bold size-[80px] text-3xl" :class="`text-${cardColor}-1 bg-${cardColor}-2`">{{ number }}</div>
        <div class="flex flex-col justify-between p-2">
            <p class="text-[#92959E]">{{ sensorLabel }}</p>
            <p class="text-2xl">{{ amount }}</p>
        </div>
    </div>
</template>
<script setup>
const props = defineProps([
    'number',
    'amount',
    'cardColor'
])
const sensorLabel = computed(() => {
  const words = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]
  return `Sensor ${words[props.number - 1]}`
})
</script>