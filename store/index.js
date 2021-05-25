import cookies from 'vue-cookies';

export const state = () => ({
    counter: 0,
    homepage_category_seleted:'fry',
    food_info_upload_data:{},
    lang:false,
    user: {
        username: "visitor",
        icon:"https://homedelicious.ml/img/uploadImgs/2021424_user_avatar.png"
    },
    sharePageContent:'infoUpload',
    // sharePageContent:'methodUpload',
    foodInfo_default:{
        username: 'visitor',
        food_name: 'food name',
        food_description: 'food description',
        cooking_time: 'min',
        food_location: 'location',
        food_category: 'category',
        tag: 'tag',
        cooking_way: 'cook_way',
        difficulty: 'difficulty',
        image: 'images',
        icon: "https://homedelicious.ml/img/uploadImgs/2021424_user_avatar.png",
        collection: false,
    },
    foodInfo_temp: null,
    foodUpload_Id:32,
    foodIngredients_temp:null,
    foodMethods_temp:null,
    userPageToggle: true,
    collectionList:[],
    searchParams:{},
    searchRes:[],

})

export const mutations = {
    increment(state) {
        console.log(state.counter)
        state.counter++
    },
    select_homepage_category(state,data) {
        state.homepage_category_seleted = data
    },
    setUser(state, data) {
        state.user = data
    },
    setLang(state, data) {
        state.lang = data
    },
    sharePageContentToggle(state, data){
        state.sharePageContent = data
    },
    foodInfo_temp_Edit(state, data){
        state.foodInfo_temp = data
    },
    setFoodUploadId(state,data){
        state.foodUpload_Id = data
    },
    foodIngredients_temp_Edit(state, data){
        state.foodIngredients_temp = data
    },
    foodMethods_temp_Edit(state, data){
        state.foodMethods_temp = data
    },
    userPage_shift(state, data){
        state.userPageToggle =data
    },
    setCollectionList(state, data) {
        state.collectionList = data
    },
    removeCollectionList(state, index){
        for(let val in state.collectionList){
            if (state.collectionList[val].food_id == index) {
                state.collectionList.splice(val, 1);
            }
        }
    },
    addCollectionList(state,data){
        state.collectionList.unshift(data);
    },
    setSearchParams(state,data) {
        state.searchParams = data
    },
    setSearchRes(state,data) {
        state.searchRes = data
    }
    
    
}

export const getters = {
    Date() {
        const date = new Date();
        return String(date.getFullYear()) + String(date.getMonth()+1) + String(date.getDate())
    },
    lan(state) {
        return state.lang
    },
    defaultUser(state) {   
        if (cookies.get('user')){
            return cookies.get('user')
        } else {
            return state.user }
    },
    foodInfo_preview(state) {
        let data = JSON.parse(JSON.stringify(state.foodInfo_temp))
        if (data!=null) {
            let list = data.image.split("<###^^&&###>");
            list.pop()
            let newlist = list.map((value, index) => {
                let newValue = {
                    id: index,
                    url: value,
                }
                return newValue
            })   
            data.image = newlist          
        }
        return data;
    },
    ingredient_preview(state) {
        let data = state.foodIngredients_temp;
        if (data) {
            let list = data.split("<###**^^###>");
            list.pop()
            let newlist = list.map((value, index) => {
                let subValue = value.split('<###**%%###>');
                let newValue = {
                    id: index,
                    ingredient: subValue[0],
                    amount: subValue[1],
                }
                return newValue
            })
            return newlist
        } else {
            return null
        }
    },
    method_preview(state) {
        let data = state.foodMethods_temp;
        if (data) {
            let list = data.split("<###**^^###>");
            list.pop()
            let newlist = list.map((value, index) => {
               let subValue = value.split('<###**%%###>');
                let newValue = {
                    id: index,
                    text: subValue[0],
                    img: subValue[1],
                }
                return newValue
            })
            return newlist
        } else {
            return null
        }
    },
    production_class(state) {
        if (state.userPageToggle) {    
                return "w-full"
        } else {
            return "w-0";
        }
    },
    collection_class(state) {
        if (state.userPageToggle == false) {    
                return "w-full"
        } else {
            return "w-0";
        }
    },
    collection_id_list(state) {
        const data = state.collectionList.map(
            x => { return x.food_id} 
        )
        return data
    }
    
}