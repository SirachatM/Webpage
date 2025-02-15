import Image from "next/image";
import 'animate.css';

export default function signin() {
  return (<>
    <br />
    <br />
    <br />
    <br />
    <div className="container mt-3">
      <div className="row">
        <div className="card p-3">
        <h2 className="text-center mb-1">Sign In</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">Example : google1234@gmail.com</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputConfirmPassword" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="exampleInputConfirmPassword" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </>
  );
}
