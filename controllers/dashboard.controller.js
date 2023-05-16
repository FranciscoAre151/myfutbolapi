async function dash(req, res){
    res.json({
        error: null,
        data: {
            title: 'ruta protegida',
            user: req.user
        }
    })
}

module.exports = {
    dash,
}