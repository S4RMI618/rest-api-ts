import { Prop, getModelForClass } from "@typegoose/typegoose";

class User {
    @Prop({required: true})
    firstName : string;

    @Prop({required: true})
    lastName : string;

    @Prop({required: true, trim: true})
    email : string;

    @Prop({required: true, minlength : 8})
    password : string;
}

const UserModel = getModelForClass(User)
export default UserModel;