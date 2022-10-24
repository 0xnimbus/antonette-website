module.exports = {
    index, 
}

function index(req, res, next) {
    console.log('Render about index')
    res.render('home/index')
}