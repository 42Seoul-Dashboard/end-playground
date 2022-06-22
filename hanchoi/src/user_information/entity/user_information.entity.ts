import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType({description:"temp"})
export class UserTemp{
    @Field(()=>ID)//option 찾아보기 
    id:string

    @Field(()=>String)
    name:string
    
    @Field(()=>String)
    email:string
}