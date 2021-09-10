/**
 * @Aayush Khanna
 * Trainee Technology
 *
 * This file contains the constructors for user input values
 */

//Initializing variables
export class Blog{
    title: string
    content: string
    categories: string
    liked: boolean
    id:number

    //Initializing constructor
    constructor(){
        this.liked = false
        this.id = 0
        this.title = "default title"
        this.content = "default content"
        this.categories = "default categories"

    }

}
