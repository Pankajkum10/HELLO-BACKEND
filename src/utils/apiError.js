class ApiError extends Error{
    constructor(
        statusCode,
        message="someting is wrong",
        errors=[],
        statck=""
    ){
        super(massage)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false;
        this.errors= errors


        if (statck){
            
            this.stack= statck
        }else{
            Error.captureStackTrace(this,this.constructer)
        }


    };
}
export{ApiError}