-- Fix the bike table sequence issue
-- Run this SQL in your Supabase SQL Editor to fix the primary key sequence

-- Reset the sequence for the bike table's id column
-- This sets the sequence to the current maximum id value + 1
SELECT setval(
  pg_get_serial_sequence('bike', 'id'),
  COALESCE((SELECT MAX(id) FROM bike), 0) + 1,
  false
);

-- Also fix the part table sequence while we're at it
SELECT setval(
  pg_get_serial_sequence('part', 'id'),
  COALESCE((SELECT MAX(id) FROM part), 0) + 1,
  false
);

-- Verify the sequences are correct
SELECT 
  'bike' as table_name,
  last_value as current_sequence_value,
  (SELECT MAX(id) FROM bike) as max_id_in_table
FROM bike_id_seq
UNION ALL
SELECT 
  'part' as table_name,
  last_value as current_sequence_value,
  (SELECT MAX(id) FROM part) as max_id_in_table
FROM part_id_seq;

