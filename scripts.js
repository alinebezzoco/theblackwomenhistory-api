fetch('https://api.cosmicjs.com/v1/blackwomenhistory/object/dandara?pretty=true&hide_metafields=true')
    .then(response => response.json())
    .then(data => {
        document.getElementById("photo").src = data.object.metadata.image.url;
        document.getElementById("name").innerHTML = data.object.title;
        document.getElementById("description").innerHTML = data.object.content;
        document.getElementById("credits").innerHTML = data.object.metadata.credits;
    })
    .catch(err => {
        console.error('An error ocurred', err);
    });