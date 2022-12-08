import { MigrationInterface, QueryRunner } from "typeorm";

export class default1670159235425 implements MigrationInterface {
    name = 'default1670159235425'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "orders" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "employeeId" uuid NOT NULL, "vehicleId" character varying NOT NULL, "selled" numeric NOT NULL, "status" character varying NOT NULL, "date_negotiation" date NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_59fadea46c0451b6663017f4c51" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_59fadea46c0451b6663017f4c51"`);
        await queryRunner.query(`DROP TABLE "orders"`);
    }

}
