CREATE DATABASE courses_app;

USE courses_app;

CREATE TABLE `courses_app`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `birth_date` VARCHAR(45) NOT NULL,
  `id_role` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE
);

CREATE TABLE `courses_app`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `courses_app`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_user` INT NULL,
  `title` VARCHAR(120) NOT NULL,
  `desc` TEXT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

CREATE TABLE `courses_app`.`comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_user` INT NULL,
  `desc` TEXT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `id_post` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
);

-- // Relations

-- Between users and roles

ALTER TABLE `courses_app`.`users` 
ADD INDEX `fk_id_role_idx` (`id_role` ASC) VISIBLE;
;
ALTER TABLE `courses_app`.`users` 
ADD CONSTRAINT `fk_id_role`
  FOREIGN KEY (`id_role`)
  REFERENCES `courses_app`.`roles` (`id`)
  ON DELETE RESTRICT
  ON UPDATE RESTRICT;

-- Between users and Posts

ALTER TABLE `courses_app`.`posts` 
CHANGE COLUMN `id_user` `id_user` INT NULL ,
ADD INDEX `fk_id_user_idx` (`id_user` ASC) VISIBLE;
;
ALTER TABLE `courses_app`.`posts` 
ADD CONSTRAINT `fk_id_user`
  FOREIGN KEY (`id_user`)
  REFERENCES `courses_app`.`users` (`id`)
  ON DELETE SET NULL
  ON UPDATE NO ACTION;

-- Between users and comments

ALTER TABLE `courses_app`.`comments` 
ADD INDEX `fk_user_id_idx` (`id_user` ASC) VISIBLE;
;
ALTER TABLE `courses_app`.`comments` 
ADD CONSTRAINT `fk_user_id`
  FOREIGN KEY (`id_user`)
  REFERENCES `courses_app`.`comments` (`id`)
  ON DELETE SET NULL
  ON UPDATE NO ACTION;

-- Between Posts and comments

ALTER TABLE `courses_app`.`comments` 
DROP FOREIGN KEY `fk_user_id`;
ALTER TABLE `courses_app`.`comments` 
ADD INDEX `fk_user_id_idx` (`id_user` ASC) VISIBLE,
DROP INDEX `fk_user_id_idx` ;
;
ALTER TABLE `courses_app`.`comments` 
ADD CONSTRAINT `fk_user_id`
  FOREIGN KEY (`id_user`)
  REFERENCES `courses_app`.`users` (`id`)
  ON DELETE SET NULL;








