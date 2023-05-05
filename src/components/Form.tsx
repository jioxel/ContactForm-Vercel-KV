'use client'
import { Button } from "./Button";
import { Input } from "./Input";
import { toast } from 'sonner'
export const Form = () => {
     const handleSubmit=async (event:React.FormEvent<HTMLFormElement>)=>{
          event.preventDefault()
          const form = event.currentTarget
          const formData = new FormData(form)
          //Sacar un solo parametro del formulario
          // const email=formData.get('email')
          //Sacar todos los valores enviados al formulairo
          const {email,name,message} = Object.fromEntries(formData.entries());
          fetch('/api/kv-send-message',{
               method:'POST',
               body:JSON.stringify({email, name, message}),
               headers:{
                    'Content-Type':'application/json'
               }
          }).then(()=>{
               
               toast.success('Mensaje enviado correctamente');
               form.reset()
          }).catch(()=>{
               toast.error('Hubo un error al enviar el mensaje')
          })
     }
  return (
     <form onSubmit={(e)=>handleSubmit(e)} >
     <Input
     id='email'
     label='Tu Email:'
     name='email'
     type='email'
     placeholder='correo@gmai.com'/>
     <Input
     id='name'
     label='Tu Nombre:'
     name='name'
     type='text'
     placeholder='Jovany Sanchez'/>
     <Input
     id='message'
     label='Tu Mensaje:'
     name='message'
     type='text'
     placeholder='Este es el mensaje que quiero enviar'/>
     <Button> Enviar mensaje</Button>
   </form>
  )
}

