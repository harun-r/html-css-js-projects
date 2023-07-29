// const posts = [
//     {
//         title: 'post title 1',
//         desc: 'post body 1'
//     },
//     {
//         title: 'post title 2',
//         desc: 'post body 2'
//     },
//     {
//         title: 'post title 3',
//         desc: 'post body 3'
//     },
//     {
//         title: 'post title 4',
//         desc: 'post body 4'
//     }, {
//         title: 'post title 5',
//         desc: 'post body 5'
//     },
//     {
//         title: 'post title 6',
//         desc: 'post body 6'
//     },
//     {
//         title: 'post title 7',
//         desc: 'post body 7'
//     },
//     {
//         title: 'post title 8',
//         desc: 'post body 8'
//     }
// ];

const getData = async (config) =>{
    try {
        const res = await axios(config);

        return res.data;

    } catch (error){
        throw Error('data is not fetch')
    }
}

const postsEl = document.querySelector('.posts');

const loadPosts = async () => {
    const posts = await getData('https://jsonplaceholder.typicode.com/posts');
    posts.map((post)=>{
        const postEl = document.createElement('div');
        postEl.classList.add('post');
        postEl.innerHTML = `
            <h4 class="post-title">${post.title}</h4>
            <p class="post-body">${post.body}</p>
        `;

        postsEl.appendChild(postEl)
    })
}

loadPosts();