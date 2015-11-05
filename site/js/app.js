var app = app || {};

$(function () {
    'use strict';

    var books = [
        {title: 'Javascript: The Good Parts', author: 'Douglas Crockford',
                releaseDate: '2008', keywords: 'Javascript Programming'},
        {title: 'The Little Book on Coffee Script', author: 'Alex MacCaw',
                releaseDate: '2012', keywords: 'CoffeScript Programming'},
        {title: 'Scala for the Impatient', author: 'Cay S. Horstmann',
                releaseDate: '2012', keywords: 'Scala Programming'},
        {title: 'American Psycho', author: 'Bret Easton Ellis',
                releaseDate: '1991', keywords: 'Novel Splatter'},
        {title: 'Eloquent Javascript', author: 'Marijn Haverbeke',
                releaseDate: '2011', keywords: 'Javascript Programming'}
    ];

    new app.LibraryView(books);
});