

export class UpdateTodoDto {
    private constructor(
        public readonly text: string,
        public readonly completed: Date,
    ){}

    get values(){
        const  returnObj: {[key:string]:any} = {};

        if ( this.text ) returnObj.text = this.text;
        if ( this.completed ) returnObj.completed = this.completed;

        return returnObj;

    }

    static create(props:{[key:string]: any}) : [string | undefined, UpdateTodoDto | undefined] {
        const {  text, completed  } = props;
        let newComleted =  completed;
        if ( completed ) {
            const newCompleted = new Date( completed )
            if( newCompleted.toString() === 'Invalid Date' ) {
                return ['Completed must be a valid date', undefined]
            }
        }
        
        
        
        return [undefined, new UpdateTodoDto(text, newComleted)];
    }       
}