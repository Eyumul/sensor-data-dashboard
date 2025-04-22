<template>
    <div class="flex gap-[71px] h-full">
        <div class="flex flex-col gap-[25px] w-[75%] h-full">
            <div class="flex items-center justify-center gap-[28px] bg-white rounded-[14px] shadow-md w-full h-1/4">
                <template v-for="(sensor, index) in sensorsData" :key="sensor.number">
                    <SensorCard
                        :number="sensor.number"
                        :amount="sensor.amount"
                        :cardColor="sensor.cardColor"
                    />
                    <!-- Add divider between cards except after the last one -->
                    <div
                        v-if="index < sensorsData.length - 1"
                        class="w-px h-4/5 rounded-full bg-[#D0D2DA]"
                    ></div>
                </template>
            </div>
            <div class="bg-white rounded-[14px] shadow-md w-full h-3/4"></div>
        </div>
        <div class="flex flex-col gap-[21px] bg-white p-[24px] rounded-[14px] shadow-md w-[25%] h-full">
            <p class="text-xl mb-8">Details</p>
            <template v-for="(sensor, index) in sensorsData" :key="sensor.number">
                <SensorDetailCard
                    :number="sensor.number"
                    :amount="sensor.amount"
                    :cardColor="sensor.cardColor"
                    :sensorName="sensor.sensorName"
                    :physicalQuantity="sensor.physicalQuantity"
                    :unit="sensor.unit"
                />
                <!-- Add divider between cards except after the last one -->
                <div 
                    v-if="index < sensorsData.length - 1"
                    class="h-px rounded-full bg-[#D0D2DA]"
                ></div>
            </template>
        </div>
    </div>
</template>
<script setup>
import { sensorsData } from '~/composables/constants/sensorDummyData.js'
</script>