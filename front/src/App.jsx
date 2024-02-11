import LoginForm from "./layout/LoginForm";
import RegisterForm from "./layout/RegisterForm";
import AppRouter from "./routes/AppRouter";
import useAuth from "./hooks/useAuth";

function App() {
  const {loading} = useAuth()

  if(loading){
    return(
      <p className="text-4xl text-primary">Loading...</p>
    )
  }
  return ( 
    <div className="min-h-screen bg-cover"style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), url('https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2022/08/Blog/week4/%E0%B8%97%E0%B8%B3%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B0%E0%B8%AD%E0%B8%B2%E0%B8%94%E0%B8%84%E0%B8%AD%E0%B8%A1/clean%2001.jpg')" }}>
      <AppRouter />
    </div>
  );
}

export default App;
