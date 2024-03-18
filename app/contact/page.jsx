"use client";
import React, { useState } from "react";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  return (
    <>
      {/* screen */}
      <div className="w-full h-[100vh] bg-pink-100 "></div>
    </>
  );
};

export default Contact;
