import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({posts}) {
  
  console.log('i am on the client'); 
  return (
    <div> 
      {posts && posts.map((post) => (
        <div key={post.id}>
          <h2>{post.Title}</h2>

        </div>
      ))}

    </div>
  );
}

export async function getStaticProps() {
  //get posts from Strapi
  const res = await fetch('http://localhost:1337/posts');
  const posts = await res.json();


  return {props: {posts},}
}