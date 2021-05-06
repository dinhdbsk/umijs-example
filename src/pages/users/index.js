import {connect} from 'dva';


const UserPage = ({dispatch}) => {
  return (
    <div>
      <span onClick={() => {
        dispatch({
          type: 'global/login'
        })
      }}>login</span>
    </div>
  );
};

export default connect()(UserPage)
