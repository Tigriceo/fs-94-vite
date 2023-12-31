//https://github.com/bluzky/nice-select2
function customSelect() {
    const customSelects = document.querySelectorAll('.js-select');

    if (customSelects.length > 0) {
        customSelects.forEach(select => {
            NiceSelect.bind(select, {
                searchable: true, // false
                placeholder: 'select',
                searchtext: 'Пошук',
                selectedtext: 'geselecteerd'
            });
        })
    }
}

window.addEventListener("load", (event) => {
    customSelect();
});