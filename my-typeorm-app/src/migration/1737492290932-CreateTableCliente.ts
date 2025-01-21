import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTableCliente1737492290932 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "cliente",
                    columns: [
                        {
                            name: "id",
                            type: "int",
                            isPrimary: true,
                            isGenerated: true,
                            generationStrategy: "increment"
                        },
                        {
                            name: "nome",
                            type: "varchar"
                        },
                        {
                            name: "cidade",
                            type: "varchar"
                        },
                        {
                            name: "email",
                            type: "varchar"
                        },
                        {
                            name: "userId",
                            type: "int"
                        }
                    ]
                }
            )
        )

        // Adicionar chave estrangeira
        await queryRunner.createForeignKey(
            'cliente',
            new TableForeignKey({
            columnNames: ['userId'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('clientes');
    }

}
