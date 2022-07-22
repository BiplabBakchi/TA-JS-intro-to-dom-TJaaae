
let ul = document.querySelector('ul');
got.houses.forEach((house)=> {
    house.people.forEach((person) => {
        let li = document.createElement('li');
        let div = document.createElement('div');
        let img = document.createElement("img");
        img.src = person.image
        let h2 = document.createElement('h2');
        h2.innerText = person.name;
        let p = document.createElement('p');
        p.innerText = person.description;
        let a = document.createElement('a');
        a.innerText = 'Learn More!';
        a.href = person.wikiLink;
        div.append(img, h2);
        li.append(div, p, a); 
        ul.append(li);     
    })
})



