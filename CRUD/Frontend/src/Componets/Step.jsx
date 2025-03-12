import React from 'react'

export default function Step() {
  return (
   <>
    <div className="container mt-4">
      <h2 className="mb-4 text-center">User Registration</h2>
      <form  className="row g-3">

        {/* User Details */}
        <div className="col-md-6">
          <label className="form-label">User ID</label>
          <input type="number" className="form-control" name="userid" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" name="name"  />
        </div>

        <div className="col-md-6">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" name="username"  />
        </div>

        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email"  />
        </div>

        <div className="col-md-6">
          <label className="form-label">Phone Number</label>
          <input type="text" className="form-control" name="phone"  />
        </div>

        <div className="col-md-6">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" name="password"  />
        </div>

        <div className="col-md-6">
          <label className="form-label">Role</label>
          <input type="text" className="form-control" name="role" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Bio</label>
          <textarea className="form-control" name="bio" rows="2" ></textarea>
        </div>

       

        {/* Submit Button */}
        <div className="col-12 text-center mt-4">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>

      </form>
    </div>
   </>
  )
}
