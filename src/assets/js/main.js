sections.forEach(section => {
    const liElement = document.createElement('li');
    liElement.id = section.id;
    liElement.innerHTML = `<a class="dropdown-item" href="#">${section.name}</a>`;
    document.querySelector('.dropdown-menu').appendChild(liElement);

    liElement.addEventListener('click', () => {
        document.querySelector('#iptSection').value = section.name;
        document.querySelector('#iptSubsection').value = '';
        document.querySelector('#list-of-subsections').innerHTML = '';
        document.querySelector('#main-container').innerHTML = '';

        section.subsections.forEach(subsection => {
            const liElement = document.createElement('li');
            liElement.id = subsection.id;
            liElement.innerHTML = `<a class="dropdown-item" href="#">${subsection.name}</a>`;
            document.querySelector('#list-of-subsections').appendChild(liElement);

            liElement.addEventListener('click', () => {
                document.querySelector('#iptSubsection').value = subsection.name;
                document.querySelector('#main-container').innerHTML = '';

                subsection.blocks.forEach(block => {
                    const h5Element = document.createElement('h5');
                    h5Element.innerHTML = block.title;
                    h5Element.classList.add('mt-5');
                    document.querySelector('#main-container').appendChild(h5Element);

                    if (block.paragraphs) {
                        const divElement = document.createElement('div');
                        divElement.classList.add('list-group', 'mt-3');

                        block.paragraphs.forEach(paragraph => {
                            const buttonElement = document.createElement('button');
                            buttonElement.innerHTML = paragraph;
                            buttonElement.classList.add('list-group-item', 'list-group-item-action');
                            buttonElement.type = 'button';

                            buttonElement.addEventListener('click', function () {
                                const textToCopy = this.innerText;
                                navigator.clipboard.writeText(textToCopy)
                            });

                            divElement.appendChild(buttonElement);
                        });

                        document.querySelector('#main-container').appendChild(divElement);
                    }
                });
            });
        });
    });
});