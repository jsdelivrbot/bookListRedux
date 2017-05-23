import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';


class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    onClick={() => this.props.testi(book)}
                    key={book.title}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    //ottaa sovelluksen tilan propsiksi
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ testi: selectBook }, dispatch);
    //lahettaa tuodun actionin kaikille reducereille 
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
