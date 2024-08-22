import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
import multer from "multer";
import path from "path";

const router = express.Router();

router.post("/adminlogin", (req, res) => {
  const sql = "SELECT * FROM admin WHERE email = ? and password = ?";
  con.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: "쿼리 에러" });
    if (result.length > 0) {
      const email = result[0].email;
      const token = jwt.sign(
        { role: "admin", email: email, id: result[0].id },
        "jwt_secret_key",
        { expiresIn: "10m" }
      );
      res.cookie('token', token)
      return res.json({ loginStatus: true });
    } else {
        return res.json({ loginStatus: false, Error:"이메일 혹은 비밀번호가 틀렸습니다." });
    }
  });
});

function checkTokenExpiration(err, req, res, next) {
    if (err instanceof jwt.TokenExpiredError) {
      // Token has expired, clear the cookie
      res.clearCookie('token');
      return res.json({ loginStatus: false, Error: "토큰이 만료되었습니다." });
    }
    next(err);
  }
  router.use(checkTokenExpiration);

router.get('/category', (req, res) => {
    const sql = "SELECT * FROM category";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "쿼리 에러"})
        return res.json({Status: true, Result: result})
    })
})

router.post('/add_category', (req, res) => {
    const sql = "INSERT INTO category (`name`) VALUES (?)"
    con.query(sql, [req.body.category], (err, result) => {
        if(err) return res.json({Status: false, Error: "쿼리 에러"})
        return res.json({Status: true})
    })
})

router.delete('/delete_category/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM category WHERE id = ?"
    con.query(sql,[id], (err, result) => {
        if(err) return res.json({Status: false, Error: "쿼리 에러"+err})
        return res.json({Status: true, Result: result})
    })
})
router.get('/note', (req, res) => {
    const sql = "SELECT * FROM note";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "쿼리 에러"})
        return res.json({Status: true, Result: result})
    })
})

router.post('/add_note', (req, res) => {
    const sql = "INSERT INTO note (`content`) VALUES (?)"
    con.query(sql, [req.body.note], (err, result) => {
        if(err) return res.json({Status: false, Error: "쿼리 에러"})
        return res.json({Status: true})
    })
})

router.delete('/delete_note/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM note WHERE id = ?"
    con.query(sql,[id], (err, result) => {
        if(err) return res.json({Status: false, Error: "쿼리 에러"+err})
        return res.json({Status: true, Result: result})
    })
})

// -이미지 업로드 부분 시작- 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage
})
// -이미지 업로드 부분 끝-

router.post('/add_employee',upload.single('image'), (req, res) => {
    const sql = `INSERT INTO employee 
    (name,email,password, address, salary, image, category_id) 
    VALUES (?)`;
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err) return res.json({Status: false, Error: "쿼리 에러"})
        const values = [
            req.body.name,
            req.body.email,
            hash,
            req.body.address,
            req.body.salary, 
            req.file.filename,
            req.body.category_id
        ]
        con.query(sql, [values], (err, result) => {
            if(err) return res.json({Status: false, Error: err})
            return res.json({Status: true})
        })
    })
})

router.get('/employee', (req, res) => {
    const sql = "SELECT * FROM employee";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "쿼리 에러"})
        return res.json({Status: true, Result: result})
    })
})

router.get('/employee/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM employee WHERE id = ?";
    con.query(sql,[id], (err, result) => {
        if(err) return res.json({Status: false, Error: "쿼리 에러"})
        return res.json({Status: true, Result: result})
    })
})

router.put('/edit_employee/:id', (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE employee 
        set name = ?, email = ?, salary = ?, address = ?, category_id = ? 
        Where id = ?`
    const values = [
        req.body.name,
        req.body.email,
        req.body.salary,
        req.body.address,
        req.body.category_id
    ]
    con.query(sql,[...values, id], (err, result) => {
        if(err) return res.json({Status: false, Error: "쿼리 에러"+err})
        return res.json({Status: true, Result: result})
    })
})

router.delete('/delete_employee/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM employee WHERE id = ?"
    con.query(sql,[id], (err, result) => {
        if(err) return res.json({Status: false, Error: "쿼리 에러"+err})
        return res.json({Status: true, Result: result})
    })
})

router.get('/admin_count', (req, res) => {
    const sql = "SELECT COUNT(id) as admin FROM admin";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "쿼리 에러"+err})
        return res.json({Status: true, Result: result})
    })
})

router.get('/employee_count', (req, res) => {
    const sql = "SELECT COUNT(id) as employee FROM employee";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "쿼리 에러"+err})
        return res.json({Status: true, Result: result})
    })
})

router.get('/salary_count', (req, res) => {
    const sql = "SELECT FORMAT(SUM(salary), 0) AS salaryOFEmp FROM employee";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "쿼리 에러"+err})
        return res.json({Status: true, Result: result})
    })
})

router.get('/admin_records', (req, res) => {
    const sql = "SELECT * FROM admin"
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "쿼리 에러"+err})
        return res.json({Status: true, Result: result})
    })
})

router.get('/logout', (req, res) => {
    res.clearCookie('token')
    return res.json({Status: true})
})

export { router as adminRouter };
