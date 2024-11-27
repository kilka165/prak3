import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useProductStore = defineStore('product', () =>{
    const product = ref([
        {
        id: 1,
        Name: "Banana",
        img: "https://avatars.mds.yandex.net/i?id=48d963be940d8043a6019e2e256a02b0_l-9657256-images-thumbs&n=13",
        prise: 15,
        category: "fruit",
        description: "Описание",
        publish_at: "27.11.2024"
        },
        {
        id: 2,
        Name: "Apple",
        img: "https://avatars.mds.yandex.net/i?id=cd4f131d0f7e64b65f5b9b3b19f929d6_l-4613903-images-thumbs&n=13",
        prise: 10,
        category: "fruit",
        description: "Описание",
        publish_at: "27.11.2024"
        },
        {
        id: 3,
        Name: "kiwi",
        img: "https://avatars.mds.yandex.net/i?id=3ca8b9b796dcd3417635516c3ad05f44_l-11869273-images-thumbs&n=13",
        prise: 25,
        category: "fruit",
        description: "Описание",
        publish_at: "27.11.2024"
        },
        {
        id: 4,
        Name: "WaterMelon",
        img: "https://avatars.mds.yandex.net/i?id=757aa1c0a11964ea25a760294467c4cf_l-5630042-images-thumbs&n=13",
        prise: 7,
        category: "berry",
        description: "Описание",
        publish_at: "27.11.2024"
        },
        {
        id: 5,
        Name: "strawberry",
        img: "https://avatars.mds.yandex.net/i?id=19afe26d43934673ec344c107da87815_l-8497407-images-thumbs&n=13",
        prise: 50,
        category: "berry",
        description: "Описание",
        publish_at: "27.11.2024"
        },
        {
        id: 6,
        Name: "raspberry",
        img: "https://img.razrisyika.ru/kart/144/573273-yagoda-malina-9.jpg",
        prise: 45,
        category: "berry",
        description: "Описание",
        publish_at: "27.11.2024"
        },
        {
        id: 7,
        Name: "beet",
        img: "https://images.herzindagi.info/image/2024/Jul/beetroot-for-bp.jpg",
        prise: 5,
        category: "Vegetable",
        description: "Описание",
        publish_at: "27.11.2024"
        },
        {
        id: 8,
        Name: "cucumber",
        img: "https://avatars.mds.yandex.net/i?id=df6f398a44eea2b8b6ede8260d9d83aa_l-7543473-images-thumbs&n=13",
        prise: 7,
        category: "Vegetable",
        description: "Описание",
        publish_at: "27.11.2024"
        },
        {
        id: 9,
        Name: "tomato",
        img: "https://avatars.mds.yandex.net/i?id=6426b2f5067b7b37678cd670658da480_l-7761267-images-thumbs&n=13",
        prise: 8,
        category: "Vegetable",
        description: "Описание",
        publish_at: "27.11.2024"
        },

    ]);
const filterProductCategoryName= computed(() => {
    return (category, search) => {
        if (category) {
            return product.value.filter((product) => product.category == category);
        }
        if (search) {
            return product.value.filter((product) => product.Name.includes(search));
        }
        return product.value
    }
})







return {
    product,
    filterProductCategoryName,
}
});