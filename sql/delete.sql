DELETE FROM mgrt_postgres_storage
  WHERE migration NOT IN (
    SELECT value FROM json_array_elements_text($1)
  );
