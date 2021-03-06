var Todos = require('../models/todomodels');

module.exports = function(app){
    app.get('/api/setupTodos', function(req, res){
        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false
            }

        ];
        Todos.create(starterTodos, function(err, results){
            res.send(results);
        });
    });
}