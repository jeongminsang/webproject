module.exports = function(app, fs) {
    app.get('/getKind', function(req, res) {
        let csvText = fs.readFileSync(__dirname + '/../data/kind.csv','utf8');
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