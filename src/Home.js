import {useState} from 'react'

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum ....', author: 'mario', id: 1},
        {title: 'React native', body: 'lorem ipsum ....', author: 'wasif', id: 2},
        {title: 'Android dev', body: 'lorem ipsum ....', author: 'minhal', id: 3}
    ])

    return ( 
        <div className="home">
            {blogs.map((blog) =>(
                <div className="blog-preview" key = {blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;