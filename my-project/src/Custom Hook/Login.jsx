
import { useCaptcha } from "./Captcha";
import { useFetchData } from "./FetchData"

export function Login(){

    let code = useCaptcha();
    let categories = useFetchData(`https://fakestoreapi.com/products/categories`);

    return(
        <form className="form-background">
            <h3>User Login</h3>
            <dl>
                <dt>Name</dt>
                <dd><input type="text" /></dd>
                <dt>Password</dt>
                <input type="password" />
                <dt>verify code</dt>
                <dd>{code}</dd>
            </dl>
            <button>Login</button>
            <ul>
                {
                    categories.map(category=>
                        <li key={category}>{category}</li>
                    )
                }
            </ul>
        </form>
    )
}