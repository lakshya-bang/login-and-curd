import { Controller, Body, Get, Post, UseGuards, Put, Param, Delete } from '@nestjs/common';
import { RegisterDTO } from 'src/user/register.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from 'src/auth/auth.service';
import { LoginDTO } from 'src/auth/login.dto';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';


@Controller('auth')
export class AuthController {
    constructor(
        private userService : UserService,
        private authService : AuthService,
    ){}

    //Authentication...
    @Get('users')
      async fun(){
        return await this.userService.findAll();
      }
    
    @Get('/users/:email')
    async getByEmail(@Param('email') id : string){
      return await this.userService.findByPayload({email : id});
    }
    //Updating the user using id.
    @Put('update/:id')
    @UseGuards(AuthGuard('jwt'))

    async update(@Param('id') id: string, @Body() updateTodoDto: RegisterDTO) {
      return await this.userService.update(id, updateTodoDto);
    }
    //Deleting the user using id.
    @Delete('delete/:id')
    @UseGuards(AuthGuard('jwt'))

    async delete(@Param('id') id: string) {
      return await this.userService.delete(id);
    }

    // Authorisation...
    @Post('register')
    async register(@Body() RegisterDTO: RegisterDTO){
        const user = await this.userService.create(RegisterDTO);
        const payload = {
            email: user.email,
        };
        console.log(user);
        const token = await this.authService.signPayLoad(payload);
        return {user,token};
    }

    @Post('login')
    async login(@Body() UserDTO: LoginDTO) {
      const data = await this.userService.findByLogin(UserDTO);
      
      const payload = {
        email: data.user.email,
      };
      const token = await this.authService.signPayLoad(payload);
      return { data, token};
    }
}
