import React from 'react';

const HomeContent = () => (
  <div className='content'>
    <div className='content-wrap'>
      <h2>Platform</h2>

      <section className='info-section'>
        <h3 className='info-section__title'>About</h3>
        <p>
          My personal idea of a platform for completed Udemy ReactJS course tasks.
        </p>

        <article className='info-article'>
          <h4 className='info-article__title'>Blog</h4>
          <p className='info-article__body'>
            Display a list of blog posts from the external JSONPlaceholder API with
            the ability to view information about each post author.
          </p>
        </article>

        <article className='info-article'>
          <h4 className='info-article__title'>Postcard</h4>
          <p className='info-article__body'>
            Postcard maker with the ability to choose a greeting in different
            languages ​​and the background color of the greeting.
          </p>
        </article>

        <article className='info-article'>
          <h4 className='info-article__title'>Podcasts</h4>
          <p className='info-article__body'>
            Display a list of podcasts with the ability to view information about
            each of them.
          </p>
        </article>

        <article className='info-article'>
          <h4 className='info-article__title'>Books</h4>
          <p className='info-article__body'>
            Display a list of books with the ability to view information about each
            of them. You can search for a book by title, author or year. The list of
            books has an alternative view mode - the gallery of covers.
          </p>
        </article>

        <article className='info-article'>
          <h4 className='info-article__title'>Board</h4>
          <p className='info-article__body'>
            Display a list of comments, a list of todos and a list of users from the
            external JSONPlaceholder API.
          </p>
        </article>

        <article className='info-article'>
          <h4 className='info-article__title'>Position</h4>
          <p className='info-article__body'>
            Geolocation. Locate and display a user's position.
          </p>
        </article>

        <article className='info-article'>
          <h4 className='info-article__title'>Weather</h4>
          <p className='info-article__body'>5-day weather charts for the city.</p>
        </article>
      </section>
    </div>
  </div>
);

export default HomeContent;