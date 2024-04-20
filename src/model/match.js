const isMatchTableExist = "SELECT EXISTS (" +
    "SELECT 1 " +
    "FROM pg_tables " +
    "WHERE schemaname = 'public' " +
    "AND tablename = 'matches'" +
    ")";


    const createMatchQuery = `
    CREATE TABLE IF NOT EXISTS matches (
        team1 VARCHAR(255),
        team2 VARCHAR(255),
        "date" DATE,
        venue VARCHAR(255)
    );
`;


const insertMatchQuery = "INSERT INTO matches (team1, team2, date, venue) VALUES ($1, $2, $3, $4)";

const selectMatchQuery = "SELECT * FROM matches";

module.exports={isMatchTableExist,createMatchQuery,insertMatchQuery,selectMatchQuery};


