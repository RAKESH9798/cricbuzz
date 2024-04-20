const db = require("../config/db");
const match = require("../model/match");

const createMatch = async (req, res) => {
    const { team1, team2, venue, date } = req.body;
    try {
        const isMatchTableExistResult = await db.query(match.isMatchTableExist);
        const isMatchTableExist = isMatchTableExistResult.rows[0].exists;

        if (!isMatchTableExist) {
            await db.query(match.createMatchQuery);
        }

        const formattedDate = date.split("-").reverse().join("-");

        const insertMatchQuery = await db.query(match.insertMatchQuery, [team1, team2, formattedDate, venue]);

        res.status(200).json({ message: "Match Created Successfully" });
    } catch (error) {
        console.error("Error creating match:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const fetchMatches = async (req, res) => {
    try {
        const fetched = await db.query(match.selectMatchQuery);
        res.status(200).json({ message: "Matches Found", matches: fetched.rows });
    } catch (error) {
        res.status(401).json({ error: "Error occurred during fetching the matches", message: error.message });
    }
};

module.exports = { createMatch, fetchMatches };
