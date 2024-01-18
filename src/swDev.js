export default function swDev (){
    let swPath = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swPath).then((result)=>{
        console.warn("result",result);
    }).catch(function(e){
        console.log(e);
    })
}