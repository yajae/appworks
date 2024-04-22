SELECT user.email, ar1.title, ar1.content  FROM user 
INNER JOIN article1 AS ar1;

SELECT *
FROM article1
ORDER BY id
LIMIT 6, 6;