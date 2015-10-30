var app = app || {};

app.Book = Backbone.Model.extend({
    defaults: {
        coverImage: 'img/placegolder.jpg',
        title: 'No title',
        author: 'Unknown',
        releaseDate: 'Unknown',
        keywords: 'None'
    }
});