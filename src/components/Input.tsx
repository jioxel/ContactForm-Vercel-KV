import styles from './components.module.css'

export const Input =({id,name,type ,label,placeholder,...props}:{id:string,name:string, type:string,label:string, placeholder:string})=>{
     return <fieldset className={styles.fieldset}>
       <label className = {styles.label} htmlFor={id}>{label}</label>
       <input 
         className={styles.input}  
         id={id} name={name} 
         type={type} 
         placeholder={placeholder} 
         {...props}/>
     </fieldset>
   }