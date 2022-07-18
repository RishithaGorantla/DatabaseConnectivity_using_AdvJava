module.exports.aboutSite = function (req, res) {
    res.render('about', {
        title: 'About my site',
        pageHeader: {
            title: 'About my site'            
        },       
        
    });
};

module.exports.displaySite = function (req, res) {
    res.render('display', {
        title: 'Not yet implemented'
    });
};

