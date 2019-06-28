<template>
    <div>
        <h1>Profile PAGE</h1>
        <ul>
            <li v-for="link in links">
                <nuxt-link :to='link'>link to '{{ link }}'</nuxt-link>
            </li>
        </ul>
        <nuxt-child/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                '/profile/',
                '/profile/menu',
                '/profile/settings',
            ]
        }
    }
}
</script>

