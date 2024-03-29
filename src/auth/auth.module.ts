import { Module } from "@nestjs/common";
import { authcontroller } from "./auth.controller";
import { authservice } from "./auth.service";
import { prismaservice } from "src/prisma/prisma.service";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./strategy";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./strategy/local.strategy";

@Module({
    imports: [PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
        secret: 'THEREISNOSECRET',
        signOptions: { expiresIn: '1h' },
    })],
    providers: [authservice, prismaservice, JwtStrategy, LocalStrategy],
    controllers: [authcontroller]
})

export class authmodule { }