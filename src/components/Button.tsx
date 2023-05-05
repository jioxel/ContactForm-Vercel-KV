import styles from './components.module.css'
export const Button =({children}:{children:React.ReactNode})=>{
     return <button className={styles.button} type='submit'>{children}</button>
   }