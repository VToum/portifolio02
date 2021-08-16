/* chamar menu */
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/* validar se a constante existi abrir*/
       if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
})
    }

  /* validar se a constante existi fechar*/
  if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
  }

  /*remover o menu mobile*/
  const navLink = document.querySelectorAll('.nav__link')

  function linkAction(){
      const navMenu = document.getElementById('nav-menu')
      // When we click on each nav__link, we remove the show-menu class
      navMenu.classList.remove('show-menu')
  }
  navLink.forEach(n => n.addEventListener('click', linkAction))

  /*abrir e fechar as skills pelo traço do lado direito*/

  /* selecionar classe pelo nome da classe no html*/
  const skillsContent = document.getElementsByClassName('skills__content'),
    /* selecionar todas classe pelo nome igual no html*/
    skillsHeader = document.querySelectorAll('.skills__header')

    function toggleSkills(){
      let itemClass = this.parentNode.className

      /* Contador de ItemClass*/
      for(i = 0; i < skillsContent.length; i++){
        /*Array SkillsContent com contador para adicionar*/
        skillsContent[i].className = 'skills__content skills__close'
      }
      /* se os items for igual as skills */
      if(itemClass === 'skills__content skills__close'){
        /* n.e.di */
        this.parentNode.className = 'skills__content skills__open'
      }
    }
        /* n.e.di */
    skillsHeader.forEach((el) =>{
      el.addEventListener('click',toggleSkills)
    })

    /* ======================= QUALIFICAÇÕES  TABS ================================ */

    const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

      tabs.forEach(tab =>{
        tab.addEventListener('click', () =>{
          const target = document.querySelector(tab.dataset.target)

          tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
          })
          target.classList.add('qualification__active')

          tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
          })
          tab.classList.add('qualification__active')
        })
      })

      /* ======================= SERVICES MODAL ================================ */

      const modalViews = document.querySelectorAll('.services__modal'),
        modalBtns = document.querySelectorAll('.services__button'),
        modalClose = document.querySelectorAll('.services__modal-close')

        let modal = function(modalClick){
          modalViews[modalClick].classList.add('active-modal')
        }

        modalBtns.forEach((modalBtns, i) => {
          modalBtns.addEventListener('click', () => {
            modal(i)
          })
        })

        modalClose.forEach((modalClose) =>{
          modalClose.addEventListener('click', () =>{
            modalViews.forEach((modalViews) =>{
              modalViews.classList.remove('active-modal')
            })
          })
        })


