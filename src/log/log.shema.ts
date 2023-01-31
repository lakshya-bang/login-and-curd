import * as mongoose from 'mongoose';
import { User } from 'src/models/user.interface';
import { UserSchema } from 'src/models/user.schema';



export const LogSchema = new mongoose.Schema({
    activity_type : {type: String, unique: false, required: true},
    activity_data : {type: String, unique: false, required: true},
    activity_date : {type: Date, unique: false, required: true, default : Date.now}
})