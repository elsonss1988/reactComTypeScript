import { EINPROGRESS } from 'constants';
import { FormEvent, useRef } from 'react';
import './Forms.css'

export function Forms()
{
    const nameRef=useRef<HTMLInputElement>(null);
    const emailRef=useRef<HTMLInputElement>(null);
    const onSubmit=(event:FormEvent)=>{
       event.preventDefault();
       //console.log(document.getElementById('nome')?.value);
       console.log(nameRef.current?.value)
       console.log(emailRef.current?.value)   
    };
    return (
    <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="nome"> Nome</label>
          <input type="text" id="nome" ref={nameRef}/>
            {/* {hasSubmit && errors.name <span>{errors.name}</span>} */}
           <p>Hello Docker React</p> 
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef}/>
        </div>
        <button type='submit'>Enviar</button>
    </form>
    );
}