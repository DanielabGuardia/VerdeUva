const controller = {
   home: (req, res) => {
        res.render('home');
    },
    contact: (req, res) => {
        res.reder('contacto');
    },
};

module.exports = controller