import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669854215030 implements MigrationInterface {
    name = 'default1669854215030'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vehicles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "modelo" character varying NOT NULL, "marca" character varying NOT NULL, "ano" character varying NOT NULL, "km" character varying NOT NULL, "cor" character varying NOT NULL, "chassi" character varying NOT NULL, "price" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "vehicles"`);
    }

}
