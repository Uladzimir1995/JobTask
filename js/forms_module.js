document.getElementById('telephone_block_right_text_container').addEventListener('click',
    function() {
        document.querySelector('.main_form_block').style.display = 'flex';
    });

document.querySelector('.form_block_close').addEventListener('click',
    function() {
        document.querySelector('.main_form_block').style.display = 'none';
    });