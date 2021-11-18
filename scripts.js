
fetch('https://theblackwomanhistory.firebaseio.com/content/33.json')
.then(response => response.json())
    .then(data => {
        document.querySelector('.photo').src = data.metadata.image.url;
        document.querySelector('.photo').alt = data.title;
        document.querySelector('.photo').title = data.title;
        document.querySelector('.name').innerHTML = data.title;
        document.querySelector('.description').innerHTML = data.description;
        document.querySelector('.credits').innerHTML = data.metadata.credits;
    })
    .catch(err => {
        console.error('Ocorreu um erro no servidor', err);
    });
