//Controllers
const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        if(err) {
            next(err);
        }
        conn.query('select * from product', (err, data) => {
            if(err) {
                next(err);
            }
            res.render('index.ejs', {data: data});
        });
    });
};

controller.add = (req, res) => {
    req.getConnection((err, conn) => {
        if(err) {
            next(err);
        }
        conn.query('insert into product set ?', [req.body], (err, dataForm) => {
            if(err) {
                next(err);
            }
            res.redirect("/");
        });
    });
};

controller.edit = (req, res) => {
    req.getConnection((err, conn) => {
        if(err) {
            next(err);
        }
        conn.query('select * from product where id = ?', [req.params.id], (err, dataFormEdit) => {
            if(err) {
                next(err);
            }
            res.render('formedit.ejs', {data: dataFormEdit[0]});
        });
    });
};

controller.update = (req, res) => {
    req.getConnection((err, conn) => {
        if(err) {
            next(err);
        }
        conn.query('update product set ? where id = ?', [req.body, req.params.id], (err, dataUpdate) => {
            if(err) {
                next(err);
            }
            res.redirect("/");
        });
    });
};

controller.delete = (req, res) => {
    req.getConnection((err, conn) => {
        if(err) {
            next(err);
        }
        conn.query('delete from product where id = ?', [req.params.id], (err, dataDelete) => {
            if(err) {
                next(err);
            }
            res.redirect("/");
        });
    });
};

//Exports
module.exports = controller;