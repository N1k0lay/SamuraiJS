import profileReducer, {addPostCreator, deletePost, updateNewPostTextCreator} from "./profile-reducer";

// 1. Исходные данные
let state = {
    posts: [
        {id: 1, post: 'Hi, how are you?!', likesCount: '122'},
        {id: 2, post: `It's my first post`, likesCount: '32'},
        {id: 3, post: `LOOOOL`, likesCount: 'xD'},
        {id: 4, post: `YEEEEEEAAAAH`, likesCount: '2022'},
    ],
   // newPostText: 'it-kamasutra.ru',
};


it('Количество постов должно увеличиваться', ()=> {
    // 2. Экшен

    let action = addPostCreator();
    let newState = profileReducer(state, action);

    // 3. Ожидание
    expect(newState.posts.length).toBe(5);

})

it('Проверка добавления текста', ()=> {
    // 2. Экшен
    let addTextAction = updateNewPostTextCreator('it-kamasutra.ru');
    let newTextState = profileReducer(state, addTextAction);

    let action = addPostCreator();
    let newState = profileReducer(newTextState, action);

    // 3. Ожидание
    expect(newState.posts[4].post).toBe('it-kamasutra.ru');

})

it('Удаление поста', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.post.length).toBe(3);
})

it('Если передали некорректный айди для удаления', () => {
    let action = deletePost(100);

    let newState = profileReducer(state, action);

    expect(newState.post.length).toBe(4);
})



