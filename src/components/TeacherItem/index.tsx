import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://pbs.twimg.com/profile_images/3474078536/8c87c817685dd7ecde25556f9b989274_400x400.jpeg" alt="Rogério Nascimento" />
        <div>
          <strong>Rogério Nascimento</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam accusantium fugiat eveniet iusto deserunt. Eveniet, enim reprehenderit mollitia tenetur facere ex voluptates? Natus vel ut consequatur sunt inventore quam sit.
          </p>

      <footer>
        <p>
          Preço/Hora
              <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )
}

export default TeacherItem;