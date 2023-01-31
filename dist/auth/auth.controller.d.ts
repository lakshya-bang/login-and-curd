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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { RegisterDTO } from 'src/user/register.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from 'src/auth/auth.service';
import { LoginDTO } from 'src/auth/login.dto';
export declare class AuthController {
    private userService;
    private authService;
    constructor(userService: UserService, authService: AuthService);
    fun(): Promise<import("../models/user.interface").User[]>;
    getByEmail(id: string): Promise<import("../models/user.interface").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateTodoDto: RegisterDTO): Promise<{
        log: import("../log/log.interface").Log & {
            _id: import("mongoose").Types.ObjectId;
        };
        user_update: import("mongoose").LeanDocument<any> & Required<{
            _id: unknown;
        }>;
    }>;
    delete(id: string): Promise<import("../models/user.interface").User>;
    register(RegisterDTO: RegisterDTO): Promise<{
        user: import("mongoose").LeanDocument<any> & Required<{
            _id: unknown;
        }>;
        token: string;
    }>;
    login(UserDTO: LoginDTO): Promise<{
        data: {
            Log: import("../log/log.interface").Log & {
                _id: import("mongoose").Types.ObjectId;
            };
            user: import("mongoose").LeanDocument<any> & Required<{
                _id: unknown;
            }>;
        };
        token: string;
    }>;
}
