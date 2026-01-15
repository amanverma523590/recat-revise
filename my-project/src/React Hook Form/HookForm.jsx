import {useForm} from 'react-hook-form'

export function HookForm(){

    const {register, handleSubmit, formState:{errors}} = useForm();

    const submit = (values) =>{
        console.log(values);
    }

    return(
        <div className='container-fluid'>
            <form onSubmit={handleSubmit(submit)}>
                <h3>Fill the form</h3>
                <dl>
                    <dt>UseName:</dt>
                    <dd><input type="text" name='UserName' {...register("UserName", {required:true, minLength:4})} /></dd>
                    <dd className='text-danger'>
                        {
                         (errors.UserName?.type === "required") ? <span>User Name Reqired</span> : <span></span> && 
                         (errors.UserName?.type === "minLength") ? <span>too short</span> : <span></span>
                        }
                    </dd>

                    <dt>Password</dt>
                    <dd><input type="password" name="password" {...register("password", {minLength:2, required:true})}/></dd>
                    <dd className='text-danger'>
                        {
                            (errors.password?.type === "minLength") ? <span>add longer password</span> : <span></span> &&
                            (errors.password?.type === "required") ? <span>fill password</span> : <span></span>
                        }
                    </dd>

                </dl>

                <button type='submit' className='text-danger bg-success'>send</button>
            </form>
        </div>
    )
}