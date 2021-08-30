import mongoose from "mongoose";

//User interface - The one to be saved. 
interface UserAttributes {
    email: string;
    password: string;
    roles: string[]
}

interface UserModel extends mongoose.Model<UserDoc> {
    build(attributes: UserAttributes): UserDoc;
}

interface UserDoc extends mongoose.Document {
    email: string;
    password: string;
    roles: string[]
}


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: [String],
        required: true
    }
})

userSchema.statics.build = (attrs: UserAttributes) => {
    return new User(attrs);
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

// const buildUser = (attributes: UserAttributes) 

export { User };
