function WelcomeDialog() {
    //This is known as Composition in React to reuse code with Dialog function.
    //Don't need to use Inheritance.
    return(
        <div>
            <Dialogs 
                title="Welcome to React Course" 
                content="You will learn ReactJS"
            />
            <Dialogs 
                title="Welcome to Java Course" 
                content="You will learn Java"
            />
        </div>
    );
}

function FancyBorders(props) {
    return(
        <div>
            {props.children}
        </div>
    );
}

function Dialogs(props) {
    //Whatever is passed between FancyBorders will be a child of that function.
    //This is used when you don't know the props that will be passed.

    return(
        <FancyBorders>
            <h1 className="Dialog-title">{props.title}</h1>
            <p>{props.content}</p>
        </FancyBorders>
    );
}
export default WelcomeDialog;