
addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
})
async function handleRequest(request, env) {


  //  Putting Values to KV
  // wrangler kv:key put --namespace-id=827dbbdaa3a24de38822e60c6f377b10 "bista" "20"

  // await TEST.put("rohit","20");



  //  Gettting values from KV
  // wrangler kv:key get --namespace-id=827dbbdaa3a24de38822e60c6f377b10 "bista"

  const value=await TEST.get("royal",{type:"text"});
  if(value===null){
    return new Response("Value not found",{status:404});
  }

  return new Response(value);

  // return new Response("Hello from the other side");





}