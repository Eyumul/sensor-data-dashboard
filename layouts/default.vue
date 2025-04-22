<template>
    <div class="min-h-dvh bg-background p-[64px] flex justify-between gap-[71px]">
        <div class="w-[15%] flex flex-col gap-[36px] pt-[90px]">
            <div class="bg-violet-2 rounded-[72px] w-full flex gap-[14px] text-violet-1 font-bold text-lg pl-14 items-center py-[18px]">
                <icon name="mdi:chart-pie"/>
                <p>Data Stats</p>
            </div>
            <div class="bg-white rounded-[72px] w-full flex gap-[14px] text-[#D0D2DA] hover:text-violet-1 cursor-pointer font-bold text-lg pl-14 items-center py-[18px]">
                <icon name="material-symbols:bolt-rounded"/>
                <p>Power Usage</p>
            </div>
            <div class="h-px rounded-full bg-[#D0D2DA] mx-6"></div>
            <div class="w-full flex gap-[14px] text-[#92959E] hover:text-violet-1 cursor-pointer font-bold text-lg justify-center items-center py-[18px]">
                <icon name="ion:log-out"/>
                <p>Logout</p>
            </div>
        </div>
        <div class="w-[85%] flex flex-col gap-[35px]">
            <div class="w-full h-[55px]">
                <p class="text-4xl font-medium">Data Stats</p>
                <p class="text-lg text-[#92959E] mt-[4px]">Information about Sensors Reading</p>
            </div>
            <div class="w-full flex-1">
                <slot/>
            </div>
        </div>
    </div>
</template>