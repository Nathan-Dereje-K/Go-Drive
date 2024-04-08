"use client";
import React, { useState } from "react";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  return (
    <>
      {/* screen */}
      <div>
        <h1>Contact Page</h1>
      </div>
    </>
  );
};

export default Contact;
