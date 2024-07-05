import SignInform from '../sing-InForm/sign-In-form.component';
import SignUpform from '../sing-upForm/sign-up-form.component';
//here we did a async operation to ask the remounts that occur to get the Reidrect result so that in our console we don't lose that data 
import './authentication.style.scss'
// and that data to determine whether redirect happended is done by auth
const Authentication = () => {

  return (
    <div className='auth-container'>
      <SignInform></SignInform>
      <SignUpform></SignUpform>
    </div>
  );
};

export default Authentication;