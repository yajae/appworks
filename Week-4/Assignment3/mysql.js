const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'assignment',
  password: 'afu5969398',
}).promise();

async function createMember(email, password) {
  const [result] = await pool.query(`
  INSERT INTO user (email, password)
  VALUE (?, ?)
  `, [email, password])
  return result;
}

async function checkMail( email ) {

  const [result] = await pool.query(`
    SELECT * 
    FROM user
    WHERE email = ? 
  `, [email] );

  return result[0];
}
async function checkAll( email, password ) {

  const [result] = await pool.query(`
    SELECT * 
    FROM user
    WHERE email = ? and password = ?
  `, [email, password] );

  return result[0];
}



exports.createMember = createMember;
exports.checkMail = checkMail;
exports.checkAll = checkAll;




  
