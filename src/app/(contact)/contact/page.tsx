import Script from "next/script"

import CalComponent from "@/components/cal"

export default function ContactPage() {
  return (
    <div className="p-6 container">
      <h1>Let's get connected</h1>
      <p>Schedule a meeting</p>
      <CalComponent />
    </div>
  )
}
