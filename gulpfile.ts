import {Task,Gulpclass} from "gulpclass/Decorators";

let gulp = require("gulp");

@Gulpclass()
export class gulpfile{
    
    @Task()
    async display(){
        console.log("Inside gulp typescript file");
    }

}