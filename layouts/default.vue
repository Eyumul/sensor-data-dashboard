<template>
    <div class="min-h-dvh bg-background p-[64px] pb-0 flex justify-between gap-[71px]">
        <div class="w-[15%] flex flex-col gap-[36px] pt-[90px]">
            <div @click="router.push('/')" :class="route.fullPath === '/' ? 'bg-violet-2 text-violet-1' : 'bg-white text-[#92959E]'" class="rounded-[72px] w-full flex gap-[14px] hover:text-violet-1 cursor-pointer font-bold text-lg pl-[20%] items-center py-[18px]">
                <icon name="mdi:chart-pie"/>
                <p>Data Stats</p>
            </div>
            <div @click="router.push('/powerUsage')" :class="route.fullPath === '/powerUsage' ? 'bg-violet-2 text-violet-1' : 'bg-white text-[#92959E]'" class="rounded-[72px] w-full flex gap-[14px] hover:text-violet-1 cursor-pointer font-bold text-lg pl-[20%] items-center py-[18px]">
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
                <p class="text-4xl font-medium">{{ route.fullPath === '/' ? 'Data Stats' : 'Power Usage' }}</p>
                <p class="text-lg text-[#92959E] mt-[4px]">{{ route.fullPath === '/' ? 'Information about Sensors Reading' : 'A comprehensive analysis of the energy consumption' }}</p>
            </div>
            <div class="w-full h-[calc(100dvh-154px)] overflow-auto py-6 pr-6">
                <slot/>
            </div>
        </div>
    </div>
</template>
<script setup>
const route = useRoute();
const router = useRouter();
const currentPath = ref(route.fullPath)
</script>