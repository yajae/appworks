/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: article1
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `article1` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `author_id` int NOT NULL,
  `author_email` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `article1_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `user` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 31 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: user
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` text NOT NULL,
  `password` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 21 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: article1
# ------------------------------------------------------------

INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (1, 'test', 'test', 1, '');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (2, 'test', 'test', 1, '');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (3, 'test', 'test', 1, '');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (4, 'test', 'test', 1, '');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (5, 'test', 'test', 1, '');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (6, 'test', 'test', 1, '');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (7, 'test', 'test', 1, '');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (8, 'test', 'test', 1, '');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (9, 'test', 'test', 1, '');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (10, 'test', 'test', 1, '');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (11, 'test', 'test', 1, '');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (12, 'test', 'test', 1, '');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (13, 'test', 'test', 3, '');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (15, 'test', 'test', 4, '');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (16, 'test', 'test', 4, '');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (17, 'test', 'test', 6, '');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (18, 'test', 'test', 5, '555yyy@gmail.comurt');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (19, 'test', 'test', 5, '555yyy@gmail.comurt');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (20, 'test', 'test', 5, '555yyy@gmail.comurt');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (21, 'test', 'test', 5, '555yyy@gmail.comurt');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (22, 'test', 'test', 5, '555yyy@gmail.comurt');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (23, 'test', 'test', 5, '555yyy@gmail.comurt');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (24, 'test', 'test', 5, '555yyy@gmail.comurt');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (25, 'test', 'test', 5, '555yyy@gmail.comurt');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (26, 'test', 'test', 5, '555yyy@gmail.comurt');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (27, 'test', 'test', 5, '555yyy@gmail.comurt');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (28, 'test', 'test', 5, '555yyy@gmail.comurt');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (29, 'test', 'test', 5, '555yyy@gmail.comurt');
INSERT INTO
  `article1` (
    `id`,
    `title`,
    `content`,
    `author_id`,
    `author_email`
  )
VALUES
  (30, 'test', 'test', 5, '555yyy@gmail.comurt');

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: user
# ------------------------------------------------------------

INSERT INTO
  `user` (`id`, `email`, `password`)
VALUES
  (1, 'yyy@gmail.com', 'dddd');
INSERT INTO
  `user` (`id`, `email`, `password`)
VALUES
  (2, 'sij@gmai.com', 'sss');
INSERT INTO
  `user` (`id`, `email`, `password`)
VALUES
  (3, '111yyy@gmail.comurt', 'sss');
INSERT INTO
  `user` (`id`, `email`, `password`)
VALUES
  (4, '444yyy@gmail.comurt', 'sss');
INSERT INTO
  `user` (`id`, `email`, `password`)
VALUES
  (5, '555yyy@gmail.comurt', 'ddd');
INSERT INTO
  `user` (`id`, `email`, `password`)
VALUES
  (6, 'yyyccc@gmail.com', 'asaa');
INSERT INTO
  `user` (`id`, `email`, `password`)
VALUES
  (7, '246@gmail.com', 'sd');

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
