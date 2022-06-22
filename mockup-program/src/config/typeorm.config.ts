import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const dbConfig = {
    type:'postgres',
    host:"localhost",
    port:"5432",
    username:"huchoi",
    password:"huchoi",
    database:"postgres",
    synchronize:"true",
};
export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.RDS_HOSTNAME || dbConfig.host,
    port: 5432,
    username: process.env.RDS_USERNAME || dbConfig.username,
    password: process.env.RDS_PASSWORD || dbConfig.password,
    database: process.env.RDS_DB_NAME || dbConfig.database,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
}