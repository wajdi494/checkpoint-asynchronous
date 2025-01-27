//task 1
const array=["a","b","c","d"]
const iterateWithAsyncAwait=async(arr)=>{
    for(let i=0;i<arr.length;i++){
        await new Promise(resolve=>setTimeout( resolve, 1000))
        console.log(arr[i])
}
}
//task 2 ,3
const awaitCall =async()=>{
    try {
        const res=await fetch("https://jsonplaceholder.typicode.com/users")
        console.log(res)
    if(res.ok){
        const data=await res.json()
        console.log(data)
    }
    else {
        throw new Error("Error")
    }

    } catch (error) {
        console.log("fetchingError",error)
    }
}

//task 4
const concurrentRequests=async()=>{
    try {
        const data=await Promise.all([fetch("https://jsonplaceholder.typicode.com/users"),fetch("https://jsonplaceholder.typicode.com/posts"),fetch("https://jsonplaceholder.typicode.com/albums")])
        const[res1,res2,res3]=data
        const data1=await res1.json()
        const data2=await res2.json()
        const data3=await res3.json()
        console.log(data1,data2,data3)
    } catch (error) {
        console.log(error)
    }
}

//task 5
const parallelCalls=async(Urls)=>{
    try {
        const data=await Promise.all(Urls.map(el=>fetch(el)))
        const res=await Promise.all(data.map(el=>el.json()))
        console.log(res)
  
    } catch (error) {
        console.log(error)
    }
} 
const arr=["https://jsonplaceholder.typicode.com/users","https://jsonplaceholder.typicode.com/posts"]
parallelCalls(arr)