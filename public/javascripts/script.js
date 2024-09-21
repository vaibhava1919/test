const navLinks = document.querySelector('.navbar')
        function onToggleMenu(e) {


            e.name = e.name === 'menu' ? 'close' : 'menu'
            navLinks.classList.toggle('top-[9%]')
        }