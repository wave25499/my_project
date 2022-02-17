<template>
  <div class="container">
    <div class="header">
        <h1>แบบทดสอบ</h1>
        <h2>
            <router-link class="link" :to="{ name: 'Quiz1' }">แบบทดสอบที่ 1</router-link>
            <router-link class="link" :to="{ name: 'Quiz2' }">แบบทดสอบที่ 2</router-link>
            <router-link class="link" :to="{ name: 'Quiz3' }">แบบทดสอบที่ 3</router-link>
        </h2>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Quiz',
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
}

.link {
        font-weight: 500;
        padding: 0 8px;
        transition: 0.3s color ease;
        text-decoration: underline;

        &:hover {
            color: #1eb8b8;
        }
    }
</style>