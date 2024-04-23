-- 1
SELECT  ar1.title, ar1.content, user.email  FROM article1 AS ar1 
INNER JOIN user 

-- 2
SELECT *
FROM article1
ORDER BY id
LIMIT 6, 6;