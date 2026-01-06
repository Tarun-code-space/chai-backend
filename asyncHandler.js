const asyncHandler =(requestHandler) => {
    (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((err) => next(err))

    }
}


export {asyncHandler}

/*
Break down into smaller parts

const asyncHandler =() =>{}
const asyncHandler =(func) =>() =>{}
const asyncHandler =(func) => async() =>{}

*/

//  ### Manage using try-catch part

// const asyncHandler =(fn) =>async () =>(req.res.next)
// {
//     try{
//         await fn(req,res,next)

//     } catch(error){
//         res.status(error.code ||500.json)({
//             success:false,
//             message:error.message
//         })
//     }
// }
