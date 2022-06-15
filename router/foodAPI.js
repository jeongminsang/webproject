module.exports = function(app, fs) {
    app.get('/getFood', function(req, res) {
        let csvText = fs.readFileSync(__dirname + '/../data/food.csv','utf8');
        let csvRows = csvText.split("\n");
        console.log(csvRows);
        
        let csvData = [];
        for (let idx in csvRows) {
            let cRows = csvRows[idx];
            let cData = cRows.split(',');
            if (idx > 0){
                csvData.push(cData);
            }
        }
        res.json(csvData);
    });
    
    
}