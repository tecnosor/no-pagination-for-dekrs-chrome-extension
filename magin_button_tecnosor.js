const createButton_2 = () => {
    // Create the div
    const button = document.createElement('div');
    button.id = 'toggleButton';
    button.textContent = 'Show all rows';

    // Style the button
    button.style.position = 'fixed';
    button.style.zIndex = 1001;
    button.style.bottom = '20px';
    button.style.left = '250px';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#007bff';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    document.body.appendChild(button);
    return button;
}

const addButton_2_handler = (btn) => {
    
    btn.addEventListener('click', () => {
        if (document.querySelectorAll('tr[data-id][style*="display: none"]').length > 0)
        {
            isShowing = false;
        }

        if (isShowing) {
            const rows = document.querySelectorAll('tr[tecnosor-btn-restaurar]');
            rows.forEach(row => {
                row.style.display = 'none';
                row.removeAttribute('tecnosor-btn-restaurar'); // Optional: clean up attribute
            });
            btn.textContent = 'Show all rows';
        } else {
            const rows = document.querySelectorAll('tr[data-id][style*="display: none"]');
            rows.forEach(row => {
                row.setAttribute("tecnosor-btn-restaurar", "1");
                row.style.display = 'table-row';
            });
            btn.textContent = 'Restore';
        }

        isShowing = !isShowing;
    });
}

const createButton_1 = () => {
    // Create the author element
    const authorElement = document.createElement('div');
    authorElement.innerHTML = 'Created by <a id="authorLink">Alfonso Soria</a>';

    // Style the author element
    authorElement.style.position = 'fixed';
    authorElement.style.zIndex = 1001;
    authorElement.style.bottom = '20px';
    authorElement.style.left = '20px';
    authorElement.style.padding = '10px 20px';
    authorElement.style.backgroundColor = '#34C759';
    authorElement.style.border = 'none';
    authorElement.style.color = 'white';
    authorElement.style.borderRadius = '5px';
    authorElement.style.cursor = 'pointer';
    document.body.appendChild(authorElement);
    return authorElement;
}

const addButton_1_handler = (btn) => {
        btn.addEventListener('click', () => {
            window.open("https://www.tecnosor.es/", '_blank', 'width=1200,height=600');
        });
}

const createButton_3 = () => {
    // Create the div
    const button = document.createElement('div');
    button.id = 'toggleButton';
    button.textContent = 'Show only availables';

    // Style the button
    button.style.position = 'fixed';
    button.style.zIndex = 1001;
    button.style.bottom = '80px';
    button.style.left = '250px';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#DE3511';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    document.body.appendChild(button);
    return button;
}


const addButton_3_handler = (btn) => {
    
    btn.addEventListener('click', () => {
        const filas = document.querySelectorAll('tr[data-id]');

        filas.forEach(fila => {
            const celdas = fila.querySelectorAll('td[title][data-th="Estado"]');
            celdas.forEach(celda => {
                if (celda.getAttribute('title') !== 'Disponible') {
                    fila.style.display = 'none';
                }
            });
        });
    });
}

const initialize = () => {        
        const btn_1 = createButton_1();
        const btn_2 = createButton_2();
        const btn_3 = createButton_3();
        addButton_1_handler(btn_1);
        addButton_2_handler(btn_2);
        addButton_3_handler(btn_3);
}

let isShowing = false;
const url = new URL(location.href);
const domain = url.hostname;
const validHostname = ".dekrs.com";

if ( domain.includes(validHostname) ) {
    initialize();
}
