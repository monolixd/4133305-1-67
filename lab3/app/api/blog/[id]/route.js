export function GET(request,{params}){
    return Response.json({
        name:"Andy Ambatanut",
        Major:"Gay",
        lv:"3",
        id:params.id
    });
}