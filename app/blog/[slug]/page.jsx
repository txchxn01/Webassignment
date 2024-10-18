// import {Link} from 'next'

async function getdatas(slug) {
    const response = await fetch(
      `https://66eeda5f3ed5bb4d0bf2288e.mockapi.io/test/${slug}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }export default async function page ({params}){
    const blog = await getdatas(params.slug)
    return (
        <div>
            <h1>{blog.name} </h1>
            <h2>{blog.des}</h2>
        </div>
    )
}