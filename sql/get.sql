CREATE TABLE IF NOT EXISTS mgrt_postgres_storage(
  migration TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);

SELECT COALESCE(json_agg(migration)::TEXT, '[]') AS migration
FROM mgrt_postgres_storage;
