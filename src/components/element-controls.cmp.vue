<template>
    <div class="element-controls flex">
        <button @click.stop="moveUp"> <i class="fas fa-arrow-up"></i> </button>
        <button @click.stop="moveDown"> <i class="fas fa-arrow-down"></i> </button>
        <button @click.stop="clone"> <i class="fas fa-clone"></i> </button>
        <button @click.stop="edit"> <i class="fas fa-edit"></i> </button>
        <button @click.stop="remove"> <i class="fas fa-trash"></i> </button>
    </div>
</template>

<script>
export default {
methods: {
    moveUp() {
        this.$emit('moveUp')
    },
    moveDown() {
        this.$emit('moveDown')
    },
    clone() {
        this.$emit('clone')
    },
    edit() {
        this.$emit('edit')
    },
    remove() {
        this.$emit('remove')
    }
}
}
</script>

<style>

</style>