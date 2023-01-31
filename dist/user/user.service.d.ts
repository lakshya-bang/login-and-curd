/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { User } from '../models/user.interface';
import { PayLoad } from 'src/models/payload';
import { Log } from '../log/log.interface';
import { RegisterDTO } from './register.dto';
import { LoginDTO } from '../auth/login.dto';
import { LogService } from 'src/user/log.services';
export declare class UserService {
    private userModel;
    private logModel;
    private logService;
    constructor(userModel: Model<User>, logModel: Model<Log>, logService: LogService);
    create(RegisterDTO: RegisterDTO): Promise<import("mongoose").LeanDocument<any> & Required<{
        _id: unknown;
    }>>;
    findByLogin(UserDTO: LoginDTO): Promise<{
        Log: Log & {
            _id: import("mongoose").Types.ObjectId;
        };
        user: import("mongoose").LeanDocument<any> & Required<{
            _id: unknown;
        }>;
    }>;
    findByPayload(payload: PayLoad): Promise<User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<User[]>;
    update(id: string, RegisterDTO: RegisterDTO): Promise<{
        log: Log & {
            _id: import("mongoose").Types.ObjectId;
        };
        user_update: import("mongoose").LeanDocument<any> & Required<{
            _id: unknown;
        }>;
    }>;
    delete(id: string): Promise<User>;
    sanitizeUser(user: User): import("mongoose").LeanDocument<any> & Required<{
        _id: unknown;
    }>;
}
