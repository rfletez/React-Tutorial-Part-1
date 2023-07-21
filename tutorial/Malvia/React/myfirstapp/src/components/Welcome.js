function Welcome(props) {
    console.log(`Welcome props: ${props}`);
    return (
        <h1>Hello {props.user.firstName} {props.user.lastName} 
            from Welcome Component</h1>
    );
}
export default Welcome;