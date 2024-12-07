import { useState } from "react";

import { Link,useNavigate  } from "react-router-dom";
import styles from "./styles.module.css";
import { message } from "antd";
import "./Admin.css"
const AdminLogin = () => {
	const [email,setemail] = useState('')
	const [password , setpassword] = useState('')
	const [isLoggedin, setIsLoggedin] = useState(false);
	
	const navigate = useNavigate();
	

	async function loginDoctor(event){
		event.preventDefault()
		const response = await fetch('http://localhost:1337/api/Adminlogin' , {
		method:'POST',
		headers:{
			'Content-Type':'application/json'
		},	
		body:JSON.stringify({
				
				email,
				password
			}),
		})
		const data = await response.json()
		
		if(data.user){
			
			
			navigate("/AdminDashboard")
			message.success("Login Successfull")
		}else{
			message.error("Please Check Your Username and Password")
		}
		console.log(data)
	  }

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={loginDoctor}>
						<h1 className="Main">Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							value={email}
							onChange={(e) => setemail(e.target.value)}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={password}
							onChange={(e) => setpassword(e.target.value)}
							required
							className={styles.input}
						/>
						
						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>
					</form>
				</div>
				
			</div>
		</div>
	);
};

export default AdminLogin;