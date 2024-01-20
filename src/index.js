const initSqlJs = require('sql.js/dist/sql-wasm-debug');

async function run() {
  const SQL = await initSqlJs();
  const sqlite = new SQL.Database();
  sqlite.run("CREATE TABLE 'reposrc' ('progname' NCHAR(40) COLLATE RTRIM, 'data' TEXT COLLATE RTRIM, 'unam' NCHAR(12) COLLATE RTRIM, 'udat' NCHAR(8), 'utime' NCHAR(6), PRIMARY KEY('progname'));");

  let text = "";
  // works on 1.10.1 with 60000 bytes,
  for (let i = 0; i < 70000; i++) {
    text += "a";
  }

  sqlite.run("INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('ZIF_EXCEL_READER', '" + text + "');");
}

run().then(() => {
  process.exit();
}).catch((err) => {
  console.log(err);
  process.exit(2);
});