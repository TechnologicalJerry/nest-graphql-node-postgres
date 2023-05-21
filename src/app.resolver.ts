/* eslint-disable prettier/prettier */
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AppService } from "./app.service";

@Resolver(() => String)
export class AppResolver {
    
    constructor(private readonly usersService: AppService) { }

    @Query(() => String)
    index(): string {
        return 'Welcome to NestJs GraphQL PostgresDB SERVER!'
    }


    @Mutation(() => User)
    createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
        return this.usersService.create(createUserInput);
    }

    @Query(() => [User], { name: 'users' })
    findAll() {
        return this.usersService.findAll();
    }

    @Query(() => User, { name: 'user' })
    findOne(@Args('userId', { type: () => String }) userId: string) {
        return this.usersService.findOne(userId);
    }

    @Mutation(() => User)
    updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
        return this.usersService.update(updateUserInput.userId, updateUserInput);
    }

    @Mutation(() => User)
    removeUser(@Args('userId', { type: () => String }) userId: string) {
        return this.usersService.remove(userId);
    }
}
