const posts = [
    { title: "post 1", body: "this is post 1" },
    { title: "post 2", body: "this is post 2" }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: you dun messed up');
            }
        }, 2000);
    })
}

// createPost({title: 'post 3', body:'tis post trwee'})
//     .then(getPosts)
//     .catch(err => console.log(err));

//fetch await

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

fetchUsers();

//----------------------------------------------------------------------

//Async/await

// async function init() {
//     await createPost({title: 'post 3', body:'tis post trweeeeee'});
//     getPosts();
// }

// init();

//----------------------------------------------------------------------

//promise.all

// const pomise1 = Promise.resolve('hewwo world');
// const promis2 = 10;
// const promis3 = new Promise((resolve, reject) =>
//     setTimeout(resolve, 2000, 'See ya l8r s8r'));

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json());

// Promise.all([pomise1, promis2, promis3, promise4])
//     .then((values) => console.log(values));