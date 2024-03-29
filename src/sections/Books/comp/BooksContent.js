import React from 'react';
import { connect } from 'react-redux';
import { selectBook, bookSearch } from '../actions/common';
import SearchForm from '../subcomp/SearchForm';
import CommonList from '../subcomp/CommonList';
import CoverGallery from '../subcomp/CoverGallery';
import booksSource from '../sources/booksSource';
import { filterObjListByQuery } from '@lib/filters';
import { LIST, GALLERY } from '../types/booksViewMode';

const BooksContent = (props) => (
  <main className='main'>
    <h2 className='main__title'>Books</h2>

    <SearchForm query={props.query} onSearch={props.bookSearch} />

    {props.viewMode === LIST && (
      <CommonList
        books={props.books}
        activeID={props.activeID}
        onBookSelect={props.selectBook}
      />
    )}
    {props.viewMode === GALLERY && (
      <CoverGallery
        books={props.books}
        activeID={props.activeID}
        onBookSelect={props.selectBook}
      />
    )}
  </main>
);

const mapStateToProps = (state) => ({
  activeID: state.bookActive && state.bookActive.id,
  viewMode: state.booksView,
  books: filterObjListByQuery(booksSource, state.bookSearch, 'title, author, year'),
  query: state.bookSearch,
});

export default connect(mapStateToProps, { selectBook, bookSearch })(BooksContent);
