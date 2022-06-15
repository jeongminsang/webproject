
module.exports = function(app, fs) {
    app.get('/getError', function(req, res) {
        let filePath = __dirname + '/../data/error.json';
        fs.exists(filePath, function(result) {
            if (result) {
                fs.readFile(filePath, 'utf8', function(err, data) {
                    let todoList = JSON.parse(data);
                    res.json(todoList);
                });
            } else {
                let todoList = new Array();
                let jsonText = JSON.stringify(todoList);
                fs.writeFileSync(filePath, jsonText, 'utf8');
                res.send(jsonText);
            }
        });

    });
    app.get('/updateError', function(req, res) {
        console.log(req.query);
        res.send('update error');        
    });
    app.post('/updateError', function(req,res) {
        console.log(req.body);
        let filePath = __dirname + '/../data/error.json';
        fs.readFile(filePath, 'utf8', function(err, data) {
            let error = JSON.parse(data);
            error.push(req.body); //
            fs.writeFileSync(filePath, JSON.stringify(error), 'utf8');
            res.json({'result':'success'});
        });
    });

}