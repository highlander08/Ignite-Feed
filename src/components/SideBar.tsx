import { PencilLine } from "phosphor-react";
import React from "react";
import { Avatar } from "./Avatar";
import styles from "./SideBar.module.css";
export const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1675095524926-f1a8581615d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/highlander08.png" />
        <strong>Highlander</strong>
        <span>Developer Full Stack</span>
      </div>
      <footer>
        <a href="#">
          {" "}
          <PencilLine size={20} /> Editar Perfil
        </a>
      </footer>
    </aside>
  );
};
