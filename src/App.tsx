import { Header } from "./components/Header";
import { Author, Post } from "./components/Post";
import styles from "./App.module.css";
import "./global.css";
import { SideBar } from "./components/SideBar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/highlander08.png",
      name: "Highlander",
      role: "Developer",
    },
    content: [
      { type: "paragraph", content: "Fala Galera ✌" },
      {
        type: "paragraph",
        content: "Acabei de publicas mais um projeto no meu porfolio",
      },
      { type: "link", content: " highlander::Developer" },
    ],
    publishedAt: new Date("2023-01-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego",
      role: "CTO",
    },
    content: [
      { type: "paragraph", content: "Fala Galera ✌" },
      {
        type: "paragraph",
        content: "Acabei de publicas mais um projeto no meu porfolio",
      },
      { type: "link", content: " Diego::Developer" },
    ],
    publishedAt: new Date("2023-01-13 21:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post: any) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
