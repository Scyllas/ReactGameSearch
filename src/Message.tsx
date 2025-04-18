function Message(){
    //JSX
    const name = 'visiting user'
    if(name){
    return <h1>Hello {name}</h1>;
    }
    return <h1>Hello world</h1>;
}

export default Message;