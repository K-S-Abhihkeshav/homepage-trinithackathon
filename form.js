import React from "react";

function create() {
  return (
    <form>
      <h2 align="center"> REGISTER NOW</h2>
      <label>
        {" "}
        Name:
        <input
          class="box"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
        />
      </label>
      <label>
        {" "}
        Email:
        <input
          class="box"
          type="email"
          name="email"
          id="email"
          placeholder="E-Mail "
          required
        />
      </label>
      <label>
        {" "}
        Password:
        <input
          class="box"
          type="password"
          name="password"
          id="password"
          placeholder="Password "
          required
        />
      </label>
      <label>
        Phone number:
        <input
          class="box"
          type="text"
          name="phone"
          id="phone"
          placeholder="Phone Number "
          required
        />
      </label>
      
        <button
          type="submit"
          id="submitDetails"
          name="submitDetails"
          value="Submit"
        >submit</button>
      <div>
        already have an account?<a href="">login</a>
      </div>
    </form>
  );
}

export default create;