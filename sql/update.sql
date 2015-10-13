INSERT INTO mgrt_postgres_storage(migration)
  SELECT arr.value
  FROM json_array_elements_text($1) AS arr
  WHERE NOT EXISTS (
    SELECT 1 FROM mgrt_postgres_storage WHERE migration = arr.value
  );
