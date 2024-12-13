import React, { useState } from "react";
import { Menu, X, Home, User, Settings, HelpCircle } from "lucide-react";

function GenrateRandom() {
  const generateRandomData = () => {
    const emails = [
      "john.doe@example.com",
      "jane.smith@company.org",
      "mike.johnson@startup.net",
      "sarah.williams@tech.com",
      "alex.brown@innovation.io",
    ];

    const names = [
      "John Doe",
      "Jane Smith",
      "Mike Johnson",
      "Sarah Williams",
      "Alex Brown",
    ];

    return {
      name: names[Math.floor(Math.random() * names.length)],
      email: emails[Math.floor(Math.random() * emails.length)],
      phone: `+1 (${Math.floor(Math.random() * 900) + 100}) ${
        Math.floor(Math.random() * 900) + 100
      }-${Math.floor(Math.random() * 9000) + 1000}`,
      age: Math.floor(Math.random() * 50) + 20,
      city: ["New York", "San Francisco", "Chicago", "Boston", "Seattle"][
        Math.floor(Math.random() * 5)
      ],
    };
  };
}

export default GenrateRandom;
