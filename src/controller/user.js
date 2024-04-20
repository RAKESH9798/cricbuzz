const db = require("../config/db.js");
const bcrypt = require("bcrypt");
const getToken = require("../config/jwtTokenProvider.js");
const { insertQuery, selectQuery } = require("../model/user.js");

const register = async (req,res)=>{

    const {name, email, password} = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password,8);
        const { rows } = await db.query(insertQuery, [name, email, hashedPassword]);
        console.log(rows);
        const token = getToken(rows[0].id);
        res.status(200).json({message:"User is Registered successfully!.",token:token})
    } catch (error) {
        console.error("Error registering user:", error);
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        
        const { rows } = await db.query(selectQuery, [email]);
        if (rows.length===0) {
            return res.status(401).json("User email is not registered.");
        }
        
        const user = rows[0];
        console.log(user);
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json("Incorrect password.");
        }

        const token = getToken(user.id);
        res.status(200).json({ message: "Login successful.", token: token });
    } catch (error) {
        console.error("Error during login:", error);
    }
}


module.exports={register,login};