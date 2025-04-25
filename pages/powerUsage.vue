<template>
    <div class="h-full flex flex-col gap-12">
        <div class="flex gap-12 w-full h-[480px]">
            <div class="h-full w-1/2 bg-white group shadow-md rounded-[14px] p-[24px]">
                <h2 class="text-xl text-[#888888] group-hover:text-violet-1 font-bold mb-2">Total Power Saved</h2>
                <apexchart
                    width="100%"
                    height="400"
                    type="radialBar"
                    :options="radialOptions"
                    :series="radialSeries"
                />
            </div>
            <div class="h-full w-1/2 bg-white group shadow-md rounded-[14px] p-[24px]">
                <h2 class="text-xl text-[#888888] group-hover:text-violet-1 font-bold mb-2">Sensor Power Consumption</h2>
                <apexchart
                    width="100%"
                    height="350"
                    type="bar"
                    :options="barOptions"
                    :series="barSeries"
                />
            </div>
        </div>
        <div class="bg-white group shadow-md rounded-[14px] p-[24px] w-full h-[600px]">
            <h2 class="text-xl text-[#888888] group-hover:text-violet-1 font-bold mb-2">Transmission Efficiency Over Time</h2>
            <apexchart
                width="100%"
                height="500"
                type="area"
                :options="areaOptions"
                :series="areaSeries"
            />
        </div>
        <!-- for bottom spacing -->
        <div><div class="h-6"></div></div>

    </div>
</template>
<script setup>
import { radialOptions, radialSeries, barOptions, barSeries, areaOptions, areaSeries } from '~/composables/constants/powerUsageDummyData';
</script>