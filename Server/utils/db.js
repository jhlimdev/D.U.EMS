import mysql from 'mysql'

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employeems"
})

con.connect(function(err) {
    if(err) {
        console.log("Xx_ 연결에 오류가 발생했습니다. _xX")
    } else {
        console.log("Oo_ 연결 되었습니다. _oO")
    }
})

export default con;

