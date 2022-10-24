module.exports = {
    index, 
}

function index(req, res, next) {
    console.log('Render home index')
    res.render('about/index')
}