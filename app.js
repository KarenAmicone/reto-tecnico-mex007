const list = document.getElementById('list');

fetch('https://retos-tecnicos-backend.lizzie136.now.sh/bands')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {

   replacingArticle = (name) => {
       return name.replace( /^(an?|the)\s/i, '' );
   }; 

   let sorting = myJson.sort((a, b) => {
        if(replacingArticle(a) > replacingArticle(b)){
            return 1
        }else{
            return -1
        }
    });

    let mapping = sorting.map(name => 
        `<li class="collection-item">${name}</li>`).join('');

    list.insertAdjacentHTML('beforeend', mapping)
})

