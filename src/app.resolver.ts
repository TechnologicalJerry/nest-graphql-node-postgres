/* eslint-disable prettier/prettier */
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AppService } from "./app.service";

@Resolver(() => String)
export class AppResolver {

    @Query(() => String)
    index(): string {
        return 'Welcome to NestJs GraphQL PostgresDB SERVER!'
    }

}
