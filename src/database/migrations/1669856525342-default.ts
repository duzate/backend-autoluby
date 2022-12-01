import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669856525342 implements MigrationInterface {
    name = 'default1669856525342'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "status" character varying NOT NULL DEFAULT 'Disponível'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "status"`);
    }

}
