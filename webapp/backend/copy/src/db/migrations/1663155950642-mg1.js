const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class mg11663155950642 {
    name = 'mg11663155950642'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "comments" ("id" SERIAL NOT NULL, "nick" character varying(100) NOT NULL, "email" character varying(255) NOT NULL, "confirmed" boolean NOT NULL DEFAULT true, "text" text NOT NULL, "publication_date" TIMESTAMP NOT NULL DEFAULT now(), "post_id" integer NOT NULL, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "posts" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "text" text NOT NULL, "preview_name" character varying(300), "publication_date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "admins" ("id" SERIAL NOT NULL, "email" character varying(200), "password" character varying(255), "nick" character varying(100) NOT NULL, CONSTRAINT "UQ_051db7d37d478a69a7432df1479" UNIQUE ("email"), CONSTRAINT "PK_e3b38270c97a854c48d2e80874e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "projects" ("name" character varying(255) NOT NULL, "description" text, CONSTRAINT "PK_2187088ab5ef2a918473cb99007" PRIMARY KEY ("name"))`);
        await queryRunner.query(`CREATE TABLE "posts_categories_projects" ("posts_id" integer NOT NULL, "projects_name" character varying(255) NOT NULL, CONSTRAINT "PK_c13b05e833b295b262c5ec11b05" PRIMARY KEY ("posts_id", "projects_name"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c98da14c5953216eabc4377fce" ON "posts_categories_projects" ("posts_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_aab526ea9ccf3d516b6fc17f40" ON "posts_categories_projects" ("projects_name") `);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_259bf9825d9d198608d1b46b0b5" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "posts_categories_projects" ADD CONSTRAINT "FK_c98da14c5953216eabc4377fcef" FOREIGN KEY ("posts_id") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "posts_categories_projects" ADD CONSTRAINT "FK_aab526ea9ccf3d516b6fc17f404" FOREIGN KEY ("projects_name") REFERENCES "projects"("name") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "posts_categories_projects" DROP CONSTRAINT "FK_aab526ea9ccf3d516b6fc17f404"`);
        await queryRunner.query(`ALTER TABLE "posts_categories_projects" DROP CONSTRAINT "FK_c98da14c5953216eabc4377fcef"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_259bf9825d9d198608d1b46b0b5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_aab526ea9ccf3d516b6fc17f40"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c98da14c5953216eabc4377fce"`);
        await queryRunner.query(`DROP TABLE "posts_categories_projects"`);
        await queryRunner.query(`DROP TABLE "projects"`);
        await queryRunner.query(`DROP TABLE "admins"`);
        await queryRunner.query(`DROP TABLE "posts"`);
        await queryRunner.query(`DROP TABLE "comments"`);
    }
}
