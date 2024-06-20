import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'books',
  password: '3264',
  port: 5432,
});

const testDbConnection = async () => {
  try {
    await pool.query('SELECT 1');
    console.log('Database connection successful');
  } catch (err) {
    console.error('Database connection error', err);
    process.exit(1);
  }
};

export { pool, testDbConnection };

export default pool;