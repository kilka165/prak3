import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore("category", () => {
    const categories = ref([
"Fruits",
"Vegetables",
"Berries",
    ]);
    return{
        categories
    }
})