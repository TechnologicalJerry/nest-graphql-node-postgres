/* eslint-disable prettier/prettier */
import { Query, Resolver } from "@nestjs/graphql";

@Resolver(() => String)
export class AppResolver {

    @Query(() => String)
    index(): string {
        return 'Welcome to NestJs GraphQL PostgresDB SERVER!'
    }
}
