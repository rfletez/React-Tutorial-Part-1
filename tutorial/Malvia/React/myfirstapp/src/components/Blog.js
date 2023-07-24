function Blog(props) {
    const content = props.contentPosts.map((post) => {
        return(
            <Post key={post.id} posting={post}/>
        );
    });

    return(
        <div>{content}</div>
    );
}

function Post(props) { 
    
    //Destructuring the props
    const {id, title, content} = props.posting;

    return(
        <div>
            <li>{id}</li>
            <li>{title}</li>
            <li>{content}</li>
        </div>
    );
}
export default Blog;