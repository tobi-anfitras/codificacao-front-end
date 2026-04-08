document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const pageSaction = document.querySelectorAll('.page-section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {

            const pageId = button.getAttribute('data-page');

            //1.remove o .active de todos os botoes e seçoes

            navButtons.forEach(btn => btn.classList.remove('active'));
            pageSaction.forEach(section => section.classList.remove('active'));

            //2. adiciona .active no botão clicado
            button.classList.add('active');

            //3.mostra a seção correspondente
            const targetSection = document.getElementById(pageId);
            if(targetSection) {
                targetSection.classList.add('active')
            }
        });

    });
});