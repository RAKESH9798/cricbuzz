const insertQuery = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *";

const selectQuery = "SELECT * FROM users WHERE email = $1";

module.exports={insertQuery,selectQuery};













// const db = require("../config/db.js");
// const bcrypt = require("bcrypt");
// const getToken = require("../config/jwtTokenProvider.js");

// const register = async (req,res)=>{

//     console.log(req.body);
//     const {name, email, password} = req.body;

//     try {
//         const hashedPassword = await bcrypt.hash(password,8);
//         console.log(hashedPassword);
//         const insertQuery = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *";
//         console.log(insertQuery);
//         const {rows}  = await db.query(insertQuery, [name, email, hashedPassword]);
//         console.log(rows);
//         const token = getToken(rows[0].id);
//         res.status(200).json({message:"User is Registered successfully!.",token:token})
//     } catch (error) {
//         console.error("Error registering user:", error);
//     }
// }

// const login = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const query = "SELECT * FROM users WHERE email = $1";
//         // console.log(query);
//         const { rows } = await db.query(query, [email]);
//         // console.log(rows);
//         if (rows.length===0) {
//             return res.status(401).json("User email is not registered.");
//         }
        
//         const user = rows[0];
//         console.log(user);
//         const isValidPassword = await bcrypt.compare(password, user.password);
//         if (!isValidPassword) {
//             return res.status(401).json("Incorrect password.");
//         }

//         const token = getToken(user.id);
//         res.status(200).json({ message: "Login successful.", token: token });
//     } catch (error) {
//         console.error("Error during login:", error);
//     }
// }


// module.exports={register,login};