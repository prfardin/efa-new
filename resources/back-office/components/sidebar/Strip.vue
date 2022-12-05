<script setup lang="ts">

</script>

<template>
    <div class="pr-sidebar-strip uk-flex">
        <div class="pr-logo-area uk-flex uk-flex-top uk-flex-center">
            <img src="@b/src/images/logo.svg" alt="Vue logo" height="56" uk-svg>
        </div>
        <div class="pr-sidebar-strip-container">
            <nav class="">
                <ul class="uk-nav">
                    <li class="a uk-active">
                        <a href="#" uk-tooltip="title: داشبورد; pos: left; offset: 3;duration: 200"><span>A</span></a>
                    </li>
                    <li class="b">
                        <a href="#" uk-tooltip="title: نمونه; pos: left; offset: 3;duration: 200"><span>B</span></a>
                    </li>
                    <li class="c">
                        <a href="#" uk-tooltip="title: نمونه; pos: left; offset: 3;duration: 200"><span>C</span></a>
                    </li>
                    <li class="pr-nav-default">
                        <a href="#" uk-tooltip="title: نمونه; pos: left; offset: 3;duration: 200"><span>+</span></a>
                    </li>
                </ul>
                <div class="line" style="top: 0; height: 52px;"></div></nav>
        </div>
    </div>
</template>
