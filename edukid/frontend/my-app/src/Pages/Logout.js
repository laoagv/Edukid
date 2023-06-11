import { front } from "../server";
function Logout(props) {
    return (
      <div>
        {localStorage.clear()}{
            window.location.href = "/"
        }
      </div>
    );
  }
  export default  Logout