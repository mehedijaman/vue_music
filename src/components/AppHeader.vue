<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
<header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
        <RouterLink class="text-white font-bold uppercase text-2xl mr-4" to="/">Music</RouterLink>

        <div class="flex flex-grow items-center">
            <ul class="flex flex-row mt-1">
                <li><a class="px-2 text-white" href="#">Login / Register</a></li>
                <li><a class="px-2 text-white" href="#">Manage</a></li>
            </ul>
        </div>
    </nav>
</header>
</template>