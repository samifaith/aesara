module.exports = function (app){
    app.get('/', (req, res) => {
        // console.log(res)
        console.log(__dirname)
        // console.log(req)
        res.render(__dirname + 'index.html');
      })
      
}