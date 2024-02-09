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
    <div className="min-h-screen">
      <AppRouter />
    </div>
  );
}

export default App;
