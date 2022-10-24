module.exports = {
    index, 
}

function index(req, res, next) {
    console.log('Render book index')
    res.render('book/index')
}