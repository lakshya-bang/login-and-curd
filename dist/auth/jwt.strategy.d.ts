import { Strategy } from "passport-jwt";
import { AuthService } from "./auth.service";
import { VerifiedCallback } from "passport-jwt";
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private userService;
    constructor(userService: AuthService);
    validate(payload: any, done: VerifiedCallback): Promise<any>;
}
export {};
