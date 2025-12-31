"use client";

import { useState } from "react";
import { usePostHog } from "posthog-js/react";

export default function NewsletterForm() {
  const posthog = usePostHog();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | null>(
    null
  );

  // Email validation function - extensible for future rules
  const validateEmail = (
    email: string
  ): { isValid: boolean; error?: string } => {
    // Trim whitespace
    const trimmedEmail = email.trim();

    // Check if empty
    if (!trimmedEmail) {
      return { isValid: false, error: "Email address is required" };
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return { isValid: false, error: "Please enter a valid email address" };
    }

    return { isValid: true };
  };

  // Handle newsletter subscription
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous messages
    setMessage("");
    setMessageType(null);

    // Validate email
    const validation = validateEmail(email);
    if (!validation.isValid) {
      setMessage(validation.error || "Invalid email");
      setMessageType("error");
      return;
    }

    try {
      // Submit to API
      const response = await fetch(
        "https://atf-emails-buckket.up.railway.app/emails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email.trim() }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        // Track PostHog event for successful newsletter subscription
        posthog?.capture("newsletter_subscribed", {
          page: "home",
          form_type: "newsletter",
          email_domain: email.split("@")[1],
        });

        // Success - clear form and show message
        setEmail("");
        setMessage(
          data.message || "Successfully subscribed to our newsletter!"
        );
        setMessageType("success");
      } else {
        // API returned error
        setMessage(data.message || "Failed to subscribe. Please try again.");
        setMessageType("error");
      }
    } catch (error) {
      // Network or other error
      setMessage(
        "An error occurred. Please check your connection and try again."
      );
      setMessageType("error");
    }
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubscribe}>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-6 py-4 rounded-full text-gray-800 border-0 focus:ring-4 focus:ring-atf-gold/30 outline-none"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-atf-orange to-atf-gold text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
        >
          Subscribe
        </button>
      </div>
      {message && (
        <div
          className={`mt-4 px-6 py-3 rounded-full text-center font-medium ${
            messageType === "success"
              ? "bg-green-100 text-green-800 border border-green-300"
              : "bg-red-100 text-red-800 border border-red-300"
          }`}
        >
          {message}
        </div>
      )}
    </form>
  );
}

