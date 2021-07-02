fetch('https://polar-woodland-31196.herokuapp.com/getContacts')
    .then(data => data.json())
    .then((res) => {
        const ul = document.getElementById('list');
        for (let i = 0; i < res.length; i++) {
            let list_header = document.createElement('li');
            list_header.className = 'list-group-item';
            let h4 = document.createElement('h4');
            h4.innerHTML = res[i].name;
            list_header.appendChild(h4);

            ul.appendChild(list_header);

            for (let j = 0; j < res[i].content.length; j++) {
                // li
                const li = document.createElement('li');
                li.className = 'list-group-item';

                // span
                let span = document.createElement('span');
                span.innerHTML = 'Name: ' + res[i].content[j].Name;
                span.style.fontWeight = "bold";
                li.appendChild(span);

                // span
                span = document.createElement('span');
                span.style.fontWeight = "bold";
                span.innerHTML = ', Number: ' + res[i].content[j].Number;
                li.appendChild(span);

                if (res[i].content[j].Phone) {
                    // span
                    span = document.createElement('span');
                    span.style.fontWeight = "bold";
                    span.innerHTML = ', Phone: ' + res[i].content[j].Phone;
                    li.appendChild(span);
                }
                
                ul.appendChild(li);
            }
        }
    })