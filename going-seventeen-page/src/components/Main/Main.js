import styles from './main.module.css';

function Main(props){
  return <main>
    <h3 class={styles.head}>{props.title}</h3>
    <p class={styles.text1}>{props.body}</p>
  </main>
}
export default Main;