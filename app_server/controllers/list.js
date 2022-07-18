// JavaScript source code
/* GET 'home' page */
module.exports.infoSite = function (req, res) {
    res.render('list-display', {
        title: ' List',
        pageHeader: {
            title: ''            
        },
    
    });
};
