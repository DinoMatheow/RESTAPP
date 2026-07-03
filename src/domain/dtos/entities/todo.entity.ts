
export class TodoEntiy{
    constructor(
        public id: number,
        public text: string,
        public completeAt?: Date | null

    ){}
    get isCompleted(){
        return !!this.completeAt;
    }
    public static fromObject( object: {[key:string]:any} ): TodoEntiy{
        const {id, text, completeAt } = object;
        if( !id ) throw 'Id is required';
        if( !text ) throw 'Text is required';

        let newCompletedAt;
        if ( completeAt ) {
            newCompletedAt = new Date(completeAt);
            if(isNaN( newCompletedAt.getTime() )){
                throw 'CompleteAt is no valid date';
            }
        }
      return new TodoEntiy(id, text, completeAt)


    }
    
}