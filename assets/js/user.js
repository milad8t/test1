document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});




    const adduserbutton = document.getElementById('add-user-button')
    adduserbutton.addEventListener('click', () => {
        Document.querySelector('.add-user-modal').classlist.add('show')
        Document.querySelector('.add-user-modal-back').classlist.remove('dis-none')
    })

    document.querySelector('.add-user-modal-back').addEventListener('click', (e) => {
        document.querySelector('.add-user-modal').classList.remove('show')
        e.target.classList.add('dis-none')
    })

});