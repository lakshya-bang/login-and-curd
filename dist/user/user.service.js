"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const log_services_1 = require("./log.services");
let UserService = class UserService {
    constructor(userModel, logModel, logService) {
        this.userModel = userModel;
        this.logModel = logModel;
        this.logService = logService;
    }
    async create(RegisterDTO) {
        const { email } = RegisterDTO;
        const user = await this.userModel.findOne({ email });
        if (user) {
            throw new common_1.HttpException('user already exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const createdUser = new this.userModel(RegisterDTO);
        await createdUser.save();
        return this.sanitizeUser(createdUser);
    }
    async findByLogin(UserDTO) {
        const { email, password } = UserDTO;
        const user = await this.userModel.findOne({ email });
        var logg_info;
        logg_info = {
            activity_type: "login",
            activity_data: "User",
            activity_date: new Date(),
        };
        if (!user) {
            throw new common_1.HttpException('user doesnt exists', common_1.HttpStatus.BAD_REQUEST);
        }
        if (await bcrypt.compare(password, user.password)) {
            const log = await this.logService.logger(logg_info);
            return { Log: log, user: this.sanitizeUser(user) };
        }
        else {
            throw new common_1.HttpException('invalid credential', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findByPayload(payload) {
        const { email } = payload;
        return await this.userModel.findOne({ email });
    }
    async findAll() {
        let data = await this.userModel.find({});
        let users = [];
        for (let i in data) {
            users.push(this.sanitizeUser(data[i]));
        }
        return users;
    }
    async update(id, RegisterDTO) {
        var logg_info;
        RegisterDTO.password = await bcrypt.hash(RegisterDTO.password, 10);
        var user = await this.userModel.findByIdAndUpdate(id, RegisterDTO).exec();
        logg_info = {
            activity_type: "update",
            activity_data: "User",
            activity_date: new Date(),
        };
        const log = await this.logService.logger(logg_info);
        return { log: log, user_update: this.sanitizeUser(user) };
    }
    async delete(id) {
        return await this.userModel.findByIdAndDelete(id).exec();
    }
    sanitizeUser(user) {
        const sanitized = user.toObject();
        delete sanitized['password'];
        return sanitized;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __param(1, (0, mongoose_1.InjectModel)('Log')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        log_services_1.LogService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map