import { Document } from "mongoose";
import {User} from "../models/user.interface"

export class Log extends Document{
    activity_type : string;
    activity_data : string;
    activity_date : Date;
}